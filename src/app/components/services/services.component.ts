import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ICompanyService } from '../../interfaces/services.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent {

  @Input() companyServices: ICompanyService[];
}
