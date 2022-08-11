import { Component, Input, OnInit } from '@angular/core';
import { DataI } from '../../data-inputs';

@Component({
  selector: 'app-input-student-loan',
  templateUrl: './input-student-loan.component.html',
  styleUrls: ['./input-student-loan.component.css','../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class InputStudentLoanComponent implements OnInit {
  @Input() data!: DataI;

  constructor() { }

  ngOnInit(): void {
  }

}
