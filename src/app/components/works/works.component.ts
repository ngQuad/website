import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IPortfolio } from '../../interfaces/portfolio.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css']
})
export class WorksComponent {

  @Input() portfolios: IPortfolio[];

  @Output() clPhotoSwipe = new EventEmitter<any>();

  goTo(data) {

    if (!data) {
      return;
    }

    window.open(data, "_blank");
  }

  clPhotoswipe(index: number, portfolios: IPortfolio[]) {

    this.clPhotoSwipe.emit({ index, portfolios });
  }
}
