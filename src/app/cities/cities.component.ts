import { Component, OnInit } from '@angular/core';
import { City } from '../city';

@Component({
  selector: 'app-cities',
  templateUrl: './cities.component.html',
  styleUrls: ['./cities.component.css']
})
export class CitiesComponent implements OnInit {
  city: City = {
    carId: 46,
    name: 'Kahramanmaraş'
  }
  constructor() { }

  ngOnInit(): void {
  }

}