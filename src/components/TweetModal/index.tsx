import { SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';

import Textarea from '@/components/Textarea';
import { IModal } from '@/types';

import {
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from '../ProfileModal/styled';

const TweetModal = ({ closeModal }: IModal) => {
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
