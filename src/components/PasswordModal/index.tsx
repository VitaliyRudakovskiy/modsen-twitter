import { SyntheticEvent, useState } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  EmailAuthProvider,
  reauthenticateWithCredential,
  updatePassword,
} from 'firebase/auth';

import ButtonVariants from '@/constants/buttonVariants';
import {
  passwordDefaultValues,
  passwordInputs,
} from '@/constants/passwordInputs';
import { auth } from '@/db';
import { IModal } from '@/types';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import passwordScheme from '@/zod/passwordScheme';

import {
  CloseButton,
  ModalContainer,
  ModalOverlay,
} from '../ProfileModal/styled';

import {
  ErrorMessage,
  InputLabel,
  InputsWrapper,
  InputWrapper,
  ModalForm,
  ModalTitle,
} from './styled';
import { IPasswordForm } from './types';

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

  const [loading, setLoading] = useState<boolean>(false);

  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const onSubmit = async (data: IPasswordForm) => {
    setLoading(true);
    const authUser = auth.currentUser;

    if (!authUser) return;

    try {
      if (data.email !== authUser.email) {
        throw new Error('The entered email does not match your current email');
      }

      const credential = EmailAuthProvider.credential(
        authUser.email,
        data['old password']
      );

      await reauthenticateWithCredential(authUser, credential);

      await updatePassword(authUser, data['new password']);
    } catch (error) {
      throw new Error(`An error occured while changing password: ${error}`);
    } finally {
      setLoading(false);
      reset();
      closeModal();
    }
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
            disabled={!isValid || loading}
          >
            {loading ? 'Loading...' : 'Save password'}
          </Button>
        </ModalForm>

        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalContainer>
    </ModalOverlay>,

    document.body
  );
};

export default PasswordModal;
