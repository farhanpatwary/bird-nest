import { UserInterface } from '../user.interface';

export const USER_MOCK_01: UserInterface = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john.doe@email.com',
};

export const USER_MOCK_02: UserInterface = {
  id: '2',
  firstName: 'Bob',
  lastName: 'Belcher',
  email: 'bob.belcher@email.com',
};

export const USER_MOCK_03: UserInterface = {
  id: '3',
  firstName: 'John',
  lastName: 'Cena',
  email: 'johncena00@email.com',
};

export const USERS_LIST_MOCK: UserInterface[] = [
  USER_MOCK_01,
  USER_MOCK_02,
  USER_MOCK_03,
];
