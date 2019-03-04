import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ISocial } from '../../interfaces/social.interface';
import { emailValidator } from '../../helpers/email.helper';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  emailValidator = emailValidator;

  @Input() socials: ISocial[];

  @Output() sendEmail = new EventEmitter<any>();

  onSendEmail(data) {
    this.sendEmail.emit(data);
  }
}
