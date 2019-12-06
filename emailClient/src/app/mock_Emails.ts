import {Email} from './Email';

export const INBOX_EMAILS: Email[] = [
  {id: 1, from: 'Test1@gmail.com', to: null, subject: 'inbox1', message: 'inbox1 tested'},
  {id: 2, from: 'Test2@gmail.com', to: null, subject: 'inbox2', message: 'inbox2 tested'},
  {id: 3, from: 'Test3@gmail.com', to: null, subject: 'inbox3', message: 'inbox3 tested'},
  {id: 4, from: 'Test4@gmail.com', to: null, subject: 'inbox4', message: 'inbox4 tested'},
];

export const SENT_EMAILS: Email[] = [
  {id: 1, from: 'self@gmail.com', to: 'Sent1@gmail.com', subject: 'Sent1', message: 'Sent1 tested'},
  {id: 2, from: 'self@gmail.com', to: 'Sent2@gmail.com', subject: 'Sent2', message: 'Sent2 tested'},
  {id: 3, from: 'self@gmail.com', to: 'Sent3@gmail.com', subject: 'Sent3', message: 'Sent3 tested'},
  {id: 4, from: 'self@gmail.com', to: 'Sent4@gmail.com', subject: 'Sent4', message: 'Sent4 tested'},
];

export const ARCHIVED_EMAILS: Email[] = [
  {id: 1, from: 'Archived1@gmail.com', to: null, subject: 'Archived1', message: 'Archived1 tested'},
  {id: 2, from: 'Archived2@gmail.com', to: null, subject: 'Archived2', message: 'Archived2 tested'},
  {id: 3, from: 'Archived3@gmail.com', to: null, subject: 'Archived3', message: 'Archived3 tested'},
  {id: 4, from: 'Archived4@gmail.com', to: null, subject: 'Archived4', message: 'Archived4 tested'},
];
