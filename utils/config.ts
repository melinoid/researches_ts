import { User } from '../data/data.users';

/** Reference audioBible parameters */
export const audioBible = {
  id: '105a06b6146d11e7-01',
  book: {
    id: '1CO',
    chapterId: '1CO.1',
  },
};
/** Reference bible parameters */
export const bible = {
  id: 'bba9f40183526463-01',
  book: {
    id: 'ROM',
    chapterId: 'ROM.1',
    verseId: 'ROM.1.1',
    sectionId: 'ROM.S1',
  },
};
/**
 * Function returns an object with User data.
 *
 * Perhaps this is an interim function (returns just `username`, `pass` and `email`).
 * Will later be expanded for e2e tests.
 * @returns `User`
 */
export function getMainUser() {
  const user = <User>{
    username: process.env.AT_USERNAME,
    password: process.env.AT_PASSWORD,
    email: process.env.AT_EMAIL,
  };
  if ((user.username || user.email) && user.password) {
    return user;
  } else {
    throw Error('Check user credentials in autotests environment.');
  }
}
