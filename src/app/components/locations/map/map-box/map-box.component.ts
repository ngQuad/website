import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { IGeoJson } from '../../../../interfaces/location.interface';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent {

  @Input() height = 600;
  @Input() iGeoJson: IGeoJson;

  @Output() mapReset = new EventEmitter<boolean>();
  @Output() itemLocationClick = new EventEmitter<object>();

  onMapReset() {
    this.mapReset.emit(true);
  }

  onItemLocationClicked(location: object) {
    this.itemLocationClick.emit(location);
  }
}
