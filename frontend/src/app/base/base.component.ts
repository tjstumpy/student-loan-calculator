import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { DataI } from '../data-inputs';
import { DataO } from 'src/app/data-output';

@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.css', '../../../node_modules/bootstrap/dist/css/bootstrap.css']
})
export class BaseComponent implements OnInit {

  baseline_data: DataI = {
    income: 1500,
    loan_cost: 40000,
    interest: 5.8,
    term: 20,
    risk: "conservative",
  }

  resp: DataO = {
    interestPaid: 0,
    yearlyInvestmentGrowth: [0], 
    yearlyNetWorthImpact: [0],   
    monthlyPaymentToInvest: 0,
    monthlyPaymentToLoan: 0,
    projectedInvestment: 0,
    yearlyRemainingLoanBalances: [0], 
    returnOnInvestment: 0,
    suggestedInvestmentAmount: 0,
    totalPaidToLoan: 0,
    riskPercentageLow: 0,
    riskPercentageHigh: 0
  } 
  isValidInput: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const baseline = document.getElementById("baseline");

    if(baseline){ //fixes compiler errors (potentially null values)
      baseline.style.color = "#ffffff";
    }

    this.submit();
  }

  submit() { //DiscretionaryIncome=1500&LoanAmount=40000&InterestRate=5.8&TermInYears=20&MinimumPayment=200&InvestmentGrowthRate=10.5
    if(this.baseline_data.income == null || this.baseline_data.loan_cost  == null ||  this.baseline_data.interest  == null || this.baseline_data.term  == null ){
      this.isValidInput = false;
      return null;
    }
    
    this.isValidInput = true;
    var query = new URLSearchParams();
    query.append("DiscretionaryIncome", <string><unknown>this.baseline_data.income);
    query.append("LoanAmount", <string><unknown>this.baseline_data.loan_cost);
    query.append("InterestRate", <string><unknown>this.baseline_data.interest);
    query.append("TermInYears", <string><unknown>this.baseline_data.term);
    query.append("InvestmentRisk", <string><unknown>this.baseline_data.risk);

    var url = "http://localhost:5254/StudentLoanCalculator/Calculate?" + query.toString();
    console.log(url);
    console.log(this.baseline_data);
    return this.http.get(url).subscribe(
      (response) => {
        console.log("response received")
        console.log(response);
        this.resp = JSON.parse(JSON.stringify(response));
      }
    )
  }

  reset(): void {
    this.baseline_data = {
      income: 0,
      loan_cost: 0,
      interest: 0,
      term: 0,
      risk: "conservative",
    }
    this.isValidInput = true;

    this.submit();
  }

  switchDisplay(n: number): void {
    const create = document.getElementById("create");
    const baseline = document.getElementById("baseline");

    if (create && baseline){ //fixes compiler errors (potentially null values)
      if(n == 0){ //baseline
        create.style.color = "#ffffff50";
        baseline.style.color = "#ffffff";
        //load baseline data here:
        this.baseline_data = {
          income: 1500,
          loan_cost: 40000,
          interest: 5.8,
          term: 20,
          risk: "conservative",
        }
        this.submit();
      }else{ //create
        baseline.style.color = "#ffffff50";
        create.style.color = "#ffffff";  
        //clear all input data here:
        this.reset();
        this.resp = {
          interestPaid: 0,
          yearlyInvestmentGrowth: [0], 
          yearlyNetWorthImpact: [0],
          monthlyPaymentToInvest: 0,
          monthlyPaymentToLoan: 0,
          projectedInvestment: 0,
          yearlyRemainingLoanBalances: [0], 
          returnOnInvestment: 0,
          suggestedInvestmentAmount: 0,
          totalPaidToLoan: 0,
          riskPercentageLow: 0,
          riskPercentageHigh: 0
        } 
      }
    }
  }
}
