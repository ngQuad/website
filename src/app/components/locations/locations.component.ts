import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IGeoJson } from '../../interfaces/location.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ngQuad-locations',
  templateUrl: './locations.component.html',
  styleUrls: ['./locations.component.css']
})
export class LocationsComponent {

  @Input() iGeoJson: IGeoJson;
  @Output() mapReset = new EventEmitter<boolean>();
  @Output() itemLocationClick = new EventEmitter<object>();

  onMapReset() {
    this.mapReset.emit();
  }

  onItemLocationClicked(event) {
    this.itemLocationClick.emit(event);
  }
}
