import { SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  passwordDefaultValues,
  passwordInputs,
} from '@/constants/passwordInputs';
import { IModal } from '@/types';
import Input from '@/UI/Input';
import passwordScheme from '@/zod/passwordScheme';

import {
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from '../ProfileModal/styled';

import { IPasswordForm } from './types';
import {
  ErrorMessage,
  InputLabel,
  InputWrapper,
  InputsWrapper,
  ModalForm,
  ModalTitle,
} from './styled';
import Button from '@/UI/Button';
import ButtonVariants from '@/constants/buttonVariants';

const PasswordModal = ({ closeModal }: IModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IPasswordForm>({
    resolver: zodResolver(passwordScheme),
    defaultValues: passwordDefaultValues,
    mode: 'onChange',
  });

  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onSubmit = async (data: IPasswordForm) => {
    console.log(data);
  };

  return createPortal(
    <ModalOverlay onClick={handleClose}>
      <ModalContainer>
        <ModalTitle>Edit password</ModalTitle>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            {passwordInputs.map(({ placeholder, name, type }) => (
              <InputWrapper key={placeholder}>
                <InputLabel>{name}</InputLabel>
                <Input
                  {...register(name)}
                  placeholder={placeholder}
                  type={type}
                />
                {errors && errors[name] && (
                  <ErrorMessage>{errors[name]?.message}</ErrorMessage>
                )}
              </InputWrapper>
            ))}
          </InputsWrapper>

          <Button
            type='submit'
            variant={ButtonVariants.primary}
            disabled={!isValid}
          >
            Save changes
          </Button>
        </ModalForm>

        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalContainer>
    </ModalOverlay>,

    document.body
  );
};

export default PasswordModal;
