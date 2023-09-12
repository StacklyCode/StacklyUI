import useUpload, { IUpload } from 'hooks/useUpload';
import { useState, useMemo } from 'react';

const config = {
  companyId: '64f63c65abd325287c4b13ea',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmVvciBNZWxhcGVsYSIsImVtYWlsIjoiYmVvckBzdGVsbGFyaWEuYXBwIiwicGFzc3dvcmQiOiIkMmEkMTAkNFpZTzNuLkhGcGlNaS82N2FDUG1xdS5XYldPanNBZHRNd1F1dTZVSVFCUGU3SEdVM0RaM2EiLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTA0VDIwOjA3OjE4LjYzNVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTA0VDIwOjE4OjU4LjIxNVoiLCJpZCI6IjY0ZjYzOGY2MGQyNzJhZDJiZmQ1N2ZmOSIsImlhdCI6MTY5Mzg2NDUyM30.RgwnC9K0Af-gf4MZUwTLPLRAWBymGqxDaEZvXgs4kSI'
};

const Index = () => {
  const [lastUpload, setLastUpload] = useState(null as IUpload);
  const { upload, loading } = useUpload(config);
  const [file, setFile] = useState(null);

  const lastUploadComponent = useMemo(() => {
    if (!lastUpload) return <></>;
    const { url, contentType } = lastUpload;

    const content = contentType.split('/')[0];
    switch (content) {
      case 'image':
        return <img src={url} alt="" />;
      case 'video':
        return <video src={url} controls />;
      case 'audio':
        return <audio src={url} controls />;
      default:
        return <span>Format Not Supported : {url}</span>;
    }
  }, [lastUpload]);

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <input
        type="file"
        onChange={(e) => {
          setFile(e.target.files[0]);
        }}
      />
      {file && <span style={{ color: 'white' }}>File Is Loaded</span>}
      {file && <span style={{ color: 'white' }}>File Name : {file.name}</span>}
      {file && (
        <span style={{ color: 'white' }}>
          File Size : {(file.size / 1024 / 1024).toFixed(2)} MB
        </span>
      )}
      {file && (
        <span style={{ color: 'white' }}>
          File Type : {file.type.split('/')[0]}
        </span>
      )}
      <button
        onClick={async () => {
          const lastUpload = await upload(file, {
            path: '/custom-path'
          });
          setLastUpload(lastUpload);
        }}
      >
        {loading ? 'Loading...' : 'Upload'}
      </button>
      {lastUploadComponent}
      {lastUpload && (
        <>
          <span style={{ color: 'white' }}>File Name : {lastUpload.name}</span>
          <span style={{ color: 'white' }}>
            File Size : {(lastUpload.size / 1024 / 1024).toFixed(2)} MB
          </span>
          <span style={{ color: 'white' }}>
            File Type : {lastUpload.contentType.split('/')[0]}
          </span>
          <span style={{ color: 'white' }}>Path : {lastUpload.path}</span>
          <span style={{ color: 'white' }}>
            Path Complete: {lastUpload.pathComplete}
          </span>
        </>
      )}

      <img src="https://shorturl.lat/809ulx" alt="" srcSet="" />
      <audio src="https://shorturl.lat/3oxxae"></audio>
    </div>
  );
};

export default Index;
