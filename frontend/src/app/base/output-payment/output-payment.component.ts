import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { DataO } from 'src/app/data-output';

@Component({
  selector: 'app-output-payment',
  templateUrl: './output-payment.component.html',
  styleUrls: ['./output-payment.component.css', '../../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class OutputPaymentComponent implements OnInit {
  @Input() data!: DataO;

  constructor() { }

  ngOnInit(): void {
  }

  
}
