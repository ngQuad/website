import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICompanyStats } from '../../interfaces/companystats.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  @Input() description: string;
  @Input() companyStats: ICompanyStats[];
}
