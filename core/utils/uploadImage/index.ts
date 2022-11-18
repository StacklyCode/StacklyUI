import { request } from 'graphql-request';

const removeWhiteSpaces = (name: string) =>
  name.replace(/\s+/g, '').replace('(', '').replace(')', '');

const endpoint = 'https://file-cs-service.staging.ixulabs.com/graphql';

export const getUrl = async (
  fileName: string,
  orgCode: string,
  path: string
) => {
  const sanitizedName = removeWhiteSpaces(fileName);

  const query = `query(
    $orgCode: String!
    $fileName: String!
    $path: String!
  ) {
    uploadFileUrl(
      orgCode: $orgCode
      fileName: $fileName
      path: $path
    ) {
      url
      fileName
    }
  }
  `;

  const value = await request(endpoint, query, {
    fileName: sanitizedName,
    orgCode,
    path
  });

  return value;
};

export const uploadFile = (url: string, file: File) =>
  fetch(url, {
    method: 'PUT',
    body: file,
    headers: {
      'Content-Type': 'application/octet-stream'
    },
    mode: 'cors'
  }).catch((e) => console.error(e));

type uploadImageType = {
  orgcode: string;
  name: string;
};

const uploadImage = async (image: File, options: uploadImageType) =>
  image?.name
    ? getUrl(`${image?.name}`, `${options.orgcode}`, `${options.name}`).then(
        async ({ uploadFileUrl: { url, fileName } }) => {
          await uploadFile(url, image);
          return fileName;
        }
      )
    : image;

export default uploadImage;
