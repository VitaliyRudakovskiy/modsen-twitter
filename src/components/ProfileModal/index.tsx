import { SyntheticEvent } from 'react';
import { createPortal } from 'react-dom';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { zodResolver } from '@hookform/resolvers/zod';
import {
  collection,
  getDocs,
  query,
  updateDoc,
  where,
} from 'firebase/firestore';

import ButtonVariants from '@/constants/buttonVariants';
import { profileDefaultValues, profileInputs } from '@/constants/profileInputs';
import { firestore } from '@/db/index';
import { selectUser, updateCurrentUser } from '@/store/slices/userSlice';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import profileScheme from '@/zod/profileScheme';

import {
  CloseButton,
  ErrorMessage,
  InputLabel,
  InputsWrapper,
  InputWrapper,
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

  const { id } = useSelector(selectUser);
  const dispatch = useDispatch();

  const onSubmit = async (data: IProfileForm) => {
    try {
      const usersCollection = collection(firestore, 'users');
      const userQuery = query(usersCollection, where('id', '==', id));
      const userSnapshot = await getDocs(userQuery);

      if (userSnapshot.empty) return;

      const userRef = userSnapshot.docs[0].ref;
      const fields: (keyof IProfileForm)[] = [
        'name',
        'email',
        'phone',
        'birthday',
      ];

      const updatedDataForUsers: Partial<IProfileForm> = {};

      fields.forEach((field) => {
        if (data[field]) {
          updatedDataForUsers[field] = data[field];
        }
      });

      await updateDoc(userRef, updatedDataForUsers);

      dispatch(updateCurrentUser(updatedDataForUsers));
    } catch (error) {
      throw new Error(`An error occured while submitting form: ${error}`);
    } finally {
      reset();
      closeModal();
    }
  };

  const handleClose = (e: SyntheticEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <ModalOverlay onClick={handleClose}>
      <ModalContainer>
        <ModalTitle>Edit profile</ModalTitle>
        <ModalForm onSubmit={handleSubmit(onSubmit)}>
          <InputsWrapper>
            {profileInputs.map(({ placeholder, name, type }) => (
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

export default ProfileModal;
