import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import ButtonVariants from '@constants/buttonVariants';
import { profileDefaultValues, profileInputs } from '@constants/profileInputs';
import { zodResolver } from '@hookform/resolvers/zod';
import Button from '@UI/Button';
import Input from '@UI/Input';
import profileScheme from '@zod/profileScheme';

import {
  CloseButton,
  ErrorMessage,
  InputsWrapper,
  ModalContainer,
  ModalForm,
  ModalOverlay,
  ModalTitle,
} from './styled';
import { IProfileForm, IProfileModal } from './types';

const ProfileModal = ({ closeModal }: IProfileModal) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
  } = useForm<IProfileForm>({
    resolver: zodResolver(profileScheme),
    defaultValues: profileDefaultValues,
    mode: 'onChange',
  });

  return createPortal(
    <ModalOverlay>
      <ModalContainer>
        <ModalTitle>Edit profile</ModalTitle>
        <ModalForm>
          <InputsWrapper>
            {profileInputs.map(({ placeholder, name, type }) => (
              <Fragment key={placeholder}>
                <Input
                  {...register(name)}
                  placeholder={placeholder}
                  type={type}
                />
                {errors && errors[name] && (
                  <ErrorMessage>{errors[name]?.message}</ErrorMessage>
                )}
              </Fragment>
            ))}
          </InputsWrapper>
          <Button type='submit' variant={ButtonVariants.primary}>
            Save changes
          </Button>
        </ModalForm>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
      </ModalContainer>
    </ModalOverlay>,
    document.body
  );
};

export default ProfileModal;
