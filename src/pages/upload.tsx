import useUpload from 'hooks/useUpload';
import { useState } from 'react';

const config = {
  companyId: '64f63c65abd325287c4b13ea',
  token:
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiQmVvciBNZWxhcGVsYSIsImVtYWlsIjoiYmVvckBzdGVsbGFyaWEuYXBwIiwicGFzc3dvcmQiOiIkMmEkMTAkNFpZTzNuLkhGcGlNaS82N2FDUG1xdS5XYldPanNBZHRNd1F1dTZVSVFCUGU3SEdVM0RaM2EiLCJjcmVhdGVkQXQiOiIyMDIzLTA5LTA0VDIwOjA3OjE4LjYzNVoiLCJ1cGRhdGVkQXQiOiIyMDIzLTA5LTA0VDIwOjE4OjU4LjIxNVoiLCJpZCI6IjY0ZjYzOGY2MGQyNzJhZDJiZmQ1N2ZmOSIsImlhdCI6MTY5Mzg2NDUyM30.RgwnC9K0Af-gf4MZUwTLPLRAWBymGqxDaEZvXgs4kSI'
};

const Index = () => {
  const [lastImage, setLastImage] = useState('');
  const { upload, loading } = useUpload(config);
  const [file, setFile] = useState(null);
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
      <button
        onClick={async () => {
          const { url } = await upload(file);
          setLastImage(url);
        }}
      >
        {loading ? 'Loading...' : 'Upload'}
      </button>
      <img src={lastImage} alt="" />
    </div>
  );
};

export default Index;
