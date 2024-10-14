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
    verseId: 'ROM.1.2',
    sectionId: 'ROM.S1',
    parallelId: '9879dbb7cfe39e4d-01',
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

/**
 * Function returns api key for api project from AT_API_KEY env variable.
 * @returns api key.
 */
export function getApiKey() {
  const apiKey = process.env.AT_API_KEY;
  if (apiKey) {
    return apiKey;
  } else {
    throw Error('AT_API_KEY env variable is empty.');
  }
}
