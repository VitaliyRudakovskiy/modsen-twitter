import { IUser } from '@/types';

export type IUserProps = Pick<IUser, 'name' | 'email'>;
