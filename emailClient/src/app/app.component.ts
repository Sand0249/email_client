import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  valueChanged = 0;
  inbox = 1;
  sent = 2;
  archived = 3;
  title = 'emailClient';
  createBtnClicked: boolean;

  onInboxClicked() {
    this.valueChanged = this.inbox;
    console.log('sending value', this.valueChanged);
  }

  onSentClicked() {
    this.valueChanged = this.sent;
    console.log('sending value', this.valueChanged);
  }

  onArchivedClicked() {
    this.valueChanged = this.archived;
    console.log('sending value', this.valueChanged);
  }

  createEmail() {
    this.createBtnClicked = true;
  }

}


