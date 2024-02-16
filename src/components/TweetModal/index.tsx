import { createPortal } from 'react-dom';

import Textarea from '@/components/Textarea';

import {
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from '../ProfileModal/styled';

import { ITweetModal } from './types';

const TweetModal = ({ closeModal }: ITweetModal) => {
  return createPortal(
    <ModalOverlay>
      <ModalContainer>
        <Textarea />
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalContainer>
    </ModalOverlay>,

    document.body
  );
};

export default TweetModal;
