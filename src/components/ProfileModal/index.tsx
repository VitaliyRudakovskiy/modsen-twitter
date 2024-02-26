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
import { IModal } from '@/types/form';
import Button from '@/UI/Button';
import Input from '@/UI/Input';
import Portal from '@/UI/Portal';
import profileScheme from '@/zod/profileScheme';

import * as Styled from './styled';
import { IProfileForm } from './types';

const ProfileModal = ({ closeModal }: IModal) => {
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
      const fields: (keyof IProfileForm)[] = ['name', 'phone', 'birthDate'];

      const updatedDataForUsers: Partial<IProfileForm> = {};

      fields.forEach((field) => {
        if (data[field]) updatedDataForUsers[field] = data[field];
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

  return (
    <Portal title='Edit profile' closeModal={closeModal}>
      <Styled.ModalForm autoComplete='off' onSubmit={handleSubmit(onSubmit)}>
        <Styled.InputsWrapper>
          {profileInputs.map(({ placeholder, name, type }) => (
            <Styled.InputWrapper key={placeholder}>
              <Styled.InputLabel>{name}</Styled.InputLabel>
              <Input
                {...register(name)}
                placeholder={placeholder}
                type={type}
                autoComplete={false}
              />
              {errors && errors[name] && (
                <Styled.ErrorMessage>
                  {errors[name]?.message}
                </Styled.ErrorMessage>
              )}
            </Styled.InputWrapper>
          ))}
        </Styled.InputsWrapper>
        <Button
          type='submit'
          variant={ButtonVariants.primary}
          disabled={!isValid}
        >
          Save changes
        </Button>
      </Styled.ModalForm>
    </Portal>
  );
};

export default ProfileModal;
