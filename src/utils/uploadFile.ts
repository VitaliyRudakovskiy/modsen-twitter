import { ref, uploadBytes } from 'firebase/storage';

import { storage } from '@/db';
import { IFile } from '@/types';

const uploadFile = async (file: IFile, id: string) => {
  if (!file) return null;

  const now = new Date();
  const imageId = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getMilliseconds()}-${id}`;
  const imageName = `images/${imageId}.jpg`;
  const fileRef = ref(storage, imageName);

  try {
    await uploadBytes(fileRef, file);
  } catch (error) {
    throw new Error(`An error occured while uploading file: ${error}`);
  }

  return imageName;
};

export default uploadFile;
