import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ITeamMember } from '../../interfaces/team.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent {

  @Input() teamMembers: ITeamMember[]
}
