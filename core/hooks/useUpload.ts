import { useCallback, useState } from 'react';

type Props = {
  companyId: string;
  token: string;
};

export type IUpload = {
  url: string;
  status: 'pending' | 'uploaded' | 'error';
  id: string;
  name: string;
  contentType: string;
  fileName: string;
  size: number;
  path: string;
  pathComplete: string;
  extension: string;
  companyId: string;
  userId: string;
  signedUrl: string;
};

type CallbackProps = {
  path?: string;
};

type IUploadCallback = (file?: File, opts?: CallbackProps) => Promise<IUpload>;

const URL = 'https://oort.api.stellaria.app/api';
const GetUploadUrl = (url: string) => `${URL}${url}`;

const UpdateStatus = async (upload: Partial<IUpload>, token: string) => {
  const { id, status } = upload;
  const res = await fetch(GetUploadUrl(`/upload/status/${id}`), {
    method: 'PUT',
    body: JSON.stringify({ status }),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const data = (await res.json()) as IUpload;
  return data;
};

const CreateUpload = async (upload: Partial<IUpload>, token: string) => {
  const res = await fetch(GetUploadUrl(`/upload`), {
    method: 'POST',
    body: JSON.stringify(upload),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const data = (await res.json()) as IUpload;
  return data;
};

const GetUpload = async (id: string, token: string) => {
  const res = await fetch(GetUploadUrl(`/upload/${id}`), {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  });
  const data = (await res.json()) as IUpload;
  return data;
};

const useUpload = (props: Props) => {
  const { companyId, token } = props;

  const [loading, setLoading] = useState(false);

  const upload = useCallback<IUploadCallback>(
    async (file, opts) => {
      if (!file) return {} as IUpload;
      setLoading(true);

      const contentType = file.type ?? 'application/octet-stream';
      const payload = {
        fileName: file.name,
        companyId,
        contentType,
        size: file.size,
        path: opts?.path
      };

      const { id, signedUrl } = await CreateUpload(payload, token);

      await fetch(signedUrl, {
        method: 'PUT',
        body: file,
        headers: {
          'Content-Type': contentType
        }
      })
        .catch(
          async () => await UpdateStatus({ id: id, status: 'error' }, token)
        )
        .then(
          async () => await UpdateStatus({ id: id, status: 'uploaded' }, token)
        )
        .finally(() => setLoading(false));

      const upload = await GetUpload(id, token);

      return upload;
    },

    [companyId]
  );

  return { upload, loading };
};

export default useUpload;
