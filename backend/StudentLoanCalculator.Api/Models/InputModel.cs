namespace StudentLoanCalculator.Api.Models
{
    public class InputModel
    {
        public double DiscretionaryIncome { get; set; } // Monthly
        public double LoanAmount { get; set; }
        public double InterestRate { get; set; }
        public int TermInYears { get; set; } 
        public string InvestmentRisk { get; set; }
    }
}
