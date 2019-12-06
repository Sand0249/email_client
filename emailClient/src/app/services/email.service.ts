import {Injectable} from '@angular/core';
import {Email} from '../Email';
import {ARCHIVED_EMAILS, INBOX_EMAILS, SENT_EMAILS} from '../mock_Emails';

@Injectable({
  providedIn: 'root'
})
export class EmailService {

  constructor() {
  }

  getInboxEmails(): Email[] {
    return INBOX_EMAILS;
  }

  getSentEmails(): Email[] {
    return SENT_EMAILS;
  }

  getArchivedEmails(): Email[] {
    return ARCHIVED_EMAILS;
  }

  sendEmail(email): Email[] {
    let len  = SENT_EMAILS.length;
    email.id = len++;
    SENT_EMAILS.push(email);
    console.log(SENT_EMAILS);
    return SENT_EMAILS;
  }

  markEmailArchived(email): Email[] {
    ARCHIVED_EMAILS.push(email);
    return ARCHIVED_EMAILS;
  }

  deleteEmail(email, value): Email[] {
    if (value == 1) {
      const index = INBOX_EMAILS.map(x => {
        return x.id;
      }).indexOf(email.id);

      INBOX_EMAILS.splice(index, 1);
      return INBOX_EMAILS;
    }
    else if(value == 2) {
      const index = SENT_EMAILS.map(x => {
        return x.id;
      }).indexOf(email.id);

      SENT_EMAILS.splice(index, 1);
      return SENT_EMAILS;
    }
    else if(value == 3) {
      const index = ARCHIVED_EMAILS.map(x => {
        return x.id;
      }).indexOf(email.id);

      ARCHIVED_EMAILS.splice(index, 1);
      return ARCHIVED_EMAILS;
    }


  }
}
