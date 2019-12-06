import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {EmailService} from '../services/email.service';
import {Email} from '../Email';

@Component({
  selector: 'app-email-create',
  templateUrl: './email-create.component.html',
  styleUrls: ['./email-create.component.css']
})
export class EmailCreateComponent implements OnInit {

  form: FormGroup;
  email: Email;

  constructor(private fb: FormBuilder, private emailService: EmailService) { }

  ngOnInit() {
    this.form = this.fb.group({
            to: [null],
            subject: [null],
            message: [null],
        });

  }

  createEmail() {
    const data = this.form.value;
    this.email = data;
    this.emailService.sendEmail(this.email);
  }

}
