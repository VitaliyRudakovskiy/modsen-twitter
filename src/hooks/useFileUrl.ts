import { useEffect, useState } from 'react';
import { getDownloadURL, ref } from 'firebase/storage';

import { storage } from '@/db';

const useFileUrl = (file: string) => {
  const [fileURL, setFileURL] = useState('');

  useEffect(() => {
    const getFileUrl = async () => {
      if (file) {
        const url = await getDownloadURL(ref(storage, file));
        setFileURL(url);
      }
    };
    getFileUrl();
  }, [file]);

  return fileURL;
};

export default useFileUrl;
