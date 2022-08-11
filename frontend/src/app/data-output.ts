export interface DataO {
    interestPaid: number,
    yearlyInvestmentGrowth: number[],
    yearlyNetWorthImpact: number[],
    monthlyPaymentToInvest: number,
    monthlyPaymentToLoan: number,
    projectedInvestment: number,
    yearlyRemainingLoanBalances: number[], 
    returnOnInvestment: number,
    suggestedInvestmentAmount: number,
    totalPaidToLoan: number,
    riskPercentageLow: number,
    riskPercentageHigh: number
}