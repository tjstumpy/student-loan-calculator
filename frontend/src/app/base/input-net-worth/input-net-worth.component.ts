import { Component, Input, OnInit } from '@angular/core';
import { DataI } from 'src/app/data-inputs';

@Component({
  selector: 'app-input-net-worth',
  templateUrl: './input-net-worth.component.html',
  styleUrls: ['./input-net-worth.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class InputNetWorthComponent implements OnInit {
  @Input() data!: DataI;

  constructor() { }

  ngOnInit(): void {
  }

}
