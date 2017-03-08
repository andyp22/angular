import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-component-under-construction',
  templateUrl: './under-construction.component.html',
  styleUrls: ['./under-construction.component.css']
})

export class UnderConstructionComponent {
  title = 'Under Construction';

  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
