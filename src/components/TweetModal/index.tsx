import { SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';

import Textarea from '@/components/Textarea';

import {
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from '../ProfileModal/styled';

import { ITweetModal } from './types';

const TweetModal = ({ closeModal }: ITweetModal) => {
  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleClose}>
      <ModalContainer>
        <Textarea />
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalContainer>
    </ModalOverlay>,

    document.body
  );
};

export default TweetModal;
