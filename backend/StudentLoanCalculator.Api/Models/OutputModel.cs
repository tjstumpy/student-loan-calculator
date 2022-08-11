namespace StudentLoanCalculator.Api.Models
{
    public class OutputModel
    {
        public double MonthlyPaymentToLoan { get; set; }
        public double MonthlyPaymentToInvest{ get; set; }
        public double InterestPaid { get; set; }
        public double TotalPaidToLoan { get; set; } 
        public double ProjectedInvestment { get; set; }
        public double ReturnOnInvestment { get; set; }
        public double SuggestedInvestmentAmount { get; set; }
        public List<double>? YearlyRemainingLoanBalances { get; set; }
        public List<double>? YearlyInvestmentGrowth { get; set; }
        public List<double>? YearlyNetWorthImpact { get; set; }
        public string? RiskPercentageLow { get; set; }
        public string? RiskPercentageHigh { get; set; }
    }
}
