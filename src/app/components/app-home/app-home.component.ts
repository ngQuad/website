import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { ISocial } from '../../interfaces/social.interface';
import { ICompanyStats } from '../../interfaces/companystats.interface';
import { ICompanyService } from '../../interfaces/services.interface';
import { ITeamMember } from '../../interfaces/team.interface';
import { IGeoJson } from '../../interfaces/location.interface';
import { IPortfolio } from '../../interfaces/portfolio.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-app-home',
  templateUrl: './app-home.component.html',
  styleUrls: ['./app-home.component.css']
})
export class AppHomeComponent {

  @Input() socials: ISocial;
  @Input() aboutDescription: string;
  @Input() companyStats: ICompanyStats[];
  @Input() companyServices: ICompanyService[];
  @Input() teamMembers: ITeamMember[];
  @Input() iGeoJson: IGeoJson;
  @Input() portfolios: IPortfolio[];
  @Input() currentYear: string;

  @Output() mapReset = new EventEmitter<boolean>();
  @Output() itemLocationClick = new EventEmitter<object>();
  @Output() sendEmail = new EventEmitter<any>();
  @Output() clPhotoSwipe = new EventEmitter<any>();

  onMapReset() {
    this.mapReset.emit();
  }

  onItemLocationClicked(event) {
    this.itemLocationClick.emit(event);
  }

  onSendEmail(data) {
    this.sendEmail.emit(data);
  }

  onClPhotoSwipe(data) {
    this.clPhotoSwipe.emit(data);
  }
}
