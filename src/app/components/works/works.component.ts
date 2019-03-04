import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IPortfolio } from '../../interfaces/portfolio.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  @Input() portfolios: IPortfolio[];

  goTo(data){
    window.open(data, "_blank");
  }
}
