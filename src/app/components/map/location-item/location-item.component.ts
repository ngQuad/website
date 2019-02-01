import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'ngQuad-location-item',
  templateUrl: './location-item.component.html',
  styleUrls: ['./location-item.component.css']
})
export class LocationItemComponent {

  @Input() city: string;
  @Input() state: string;
  @Input() active: string;
  @Input() isLast: string;

  @Output() click = new EventEmitter<boolean>();

  onClick() {
    this.click.emit(true);
  }
}
