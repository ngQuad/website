import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISocial } from '../../interfaces/social.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  @Input() socials: ISocial[];
}
