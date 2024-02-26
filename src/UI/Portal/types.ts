import { ReactNode } from 'react';

export type IPortalProps = {
  title?: string;
  children: ReactNode;
  closeModal: () => void;
};
