import { SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';

import * as Styled from './styled';
import { IPortalProps } from './types';

const Portal = ({ title = '', children, closeModal }: IPortalProps) => {
  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) closeModal();
  };

  return createPortal(
    <Styled.ModalOverlay onClick={handleClose}>
      <Styled.ModalContainer>
        <Styled.ModalTitle>{title}</Styled.ModalTitle>
        <Styled.CloseButton onClick={closeModal}>&times;</Styled.CloseButton>
        {children}
      </Styled.ModalContainer>
    </Styled.ModalOverlay>,

    document.body
  );
};

export default Portal;
