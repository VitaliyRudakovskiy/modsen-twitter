import { IUser } from '@/types/user';

export type IUserProps = Pick<IUser, 'name' | 'email'>;
