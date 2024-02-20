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
    <ModalOverlay onClick={handleClose} data-cy='tweet-modal'>
      <ModalContainer>
        <Textarea />
        <CloseButton
          onClick={closeModal}
          data-cy='tweet-modal-close-button'
          data-testid='close-button'
        >
          &times;
        </CloseButton>
      </ModalContainer>
    </ModalOverlay>,

    document.body
  );
};

export default TweetModal;
