import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ISocial } from '../../interfaces/social.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  @Input() socials: ISocial[];
}
