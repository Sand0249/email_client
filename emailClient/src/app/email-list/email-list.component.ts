import {Component, Input, OnInit} from '@angular/core';
import {INBOX_EMAILS} from '../mock_Emails';
import {EmailService} from '../services/email.service';
import {Email} from '../Email';

@Component({
  selector: 'app-email-list',
  templateUrl: './email-list.component.html',
  styleUrls: ['./email-list.component.css']
})
export class EmailListComponent implements OnInit {

  @Input() valueClicked: number;

  constructor(private emailService: EmailService) {
  }

  ngOnInit() {
    this.showEmails();
  }

  showEmails() {

    // tslint:disable-next-line:no-conditional-assignment
    if (this.valueClicked == 1) {
      return this.emailService.getInboxEmails();
      // tslint:disable-next-line:no-conditional-assignment
    } else if (this.valueClicked == 2) {
      return this.emailService.getSentEmails();
      // tslint:disable-next-line:no-conditional-assignment
    } else if (this.valueClicked == 3) {
      return this.emailService.getArchivedEmails();
    }
  }

  deleteEmail(email) {
    return this.emailService.deleteEmail(email, this.valueClicked);
  }

  archiveEmail(email) {
    return this.emailService.markEmailArchived(email);
  }

}
