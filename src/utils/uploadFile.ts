import { ref, uploadBytes } from 'firebase/storage';

import { storage } from '@/db';
import { IFile } from '@/types/tweet';

import compressFile from './compressFile';

const uploadFile = async (file: IFile, id: string) => {
  if (!file) return null;

  const now = new Date();
  const imageId = `${now.getDate()}-${now.getMonth() + 1}-${now.getFullYear()}-${now.getMilliseconds()}-${id}`;
  const imageName = `images/${imageId}.jpg`;
  const fileRef = ref(storage, imageName);

  const compressedImage = await compressFile(file);

  try {
    await uploadBytes(fileRef, compressedImage);
  } catch (error) {
    throw new Error(`An error occured while uploading file: ${error}`);
  }

  return imageName;
};

export default uploadFile;
