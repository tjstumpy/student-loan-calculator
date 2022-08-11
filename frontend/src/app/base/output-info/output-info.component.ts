import { Component, Input, OnInit } from '@angular/core';

import { DataO } from 'src/app/data-output';

@Component({
  selector: 'app-output-info',
  templateUrl: './output-info.component.html',
  styleUrls: ['./output-info.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class OutputInfoComponent implements OnInit {
  @Input() data!: DataO;
  
  constructor() { }

  ngOnInit(): void {
  }

}
