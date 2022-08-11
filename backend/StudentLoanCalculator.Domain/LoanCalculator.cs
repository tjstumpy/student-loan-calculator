namespace StudentLoanCalculator.Domain
{
    public class LoanCalculator : ILoanCalculator
    {
        public LoanCalculator() {}

        public double MonthlyLoanPayment(double loanAmount, double interestRate, int timeInMonths)
        {
            double monthlyPayment = loanAmount * interestRate * 
                (Math.Pow(1 + interestRate, timeInMonths) / (Math.Pow(1 + interestRate, timeInMonths) - 1));

            return monthlyPayment;
        }

        public double MonthlyInvestmentPayment(double loanPayment, double discretionaryIncome)
        {
            return discretionaryIncome - loanPayment;
        }

        public double LoanInterest(double loanAmount, int timeInMonths, double monthlyPayment)
        {
            double totalPaid = monthlyPayment * timeInMonths;
            double interestPaid = totalPaid - loanAmount;
            return interestPaid;
        }

        public double ProjectedInvestment(double monthlyInvestment, double growthRate, int timeInMonths)
        {
            double investmentTotal = monthlyInvestment * ((Math.Pow(1 + growthRate, timeInMonths) - 1) / growthRate); 
            return investmentTotal;
        }
        
        public double ReturnOnInvestment(double monthlyInvestment, int timeInMonths, double investmentTotal)
        {
            double returnOnInvestment = investmentTotal - (monthlyInvestment * timeInMonths);
            return returnOnInvestment;
        }

        public double SuggestedInvestment(double loanInterest, double growthRate, double timeInMonths)
        {
            double suggestedInvestment = - (growthRate * loanInterest) / 
                (- Math.Pow(growthRate + 1, timeInMonths) + ((timeInMonths * growthRate) + 1));
            return suggestedInvestment;
        }

        public List<double> RemainingLoanBalances(double loanAmount, double monthlyInterestRate, double monthlyPayment, int timeInMonths)
        {
            List<double> remainingLoanBalances = new List<double>();
            
            double remainingLoan = loanAmount;

            for (int i = timeInMonths; i >= 0; i--)
            {
                remainingLoanBalances.Add(remainingLoan);
                remainingLoan = LoanAfterPayment(remainingLoan, monthlyInterestRate, monthlyPayment);
            }

            return remainingLoanBalances;
        }

        private double LoanAfterPayment(double loanAmount, double interestRate, double payment)
        {
            if (loanAmount < payment)
                return 0;
               
            double remainingLoan = Math.Round((loanAmount * (1 + interestRate)) - payment, 2);
            
            return remainingLoan;
        }

        public List<double> MonthlyInvestmentGrowth(double monthlyInvestment, double monthlyInvestmentGrowthRate, int months)
        {
            double investmentValue = 0;

            List<double> monthlyInvestmentGrowthValues = new List<double>();
            monthlyInvestmentGrowthValues.Add(0); // Add first month

            for(int m = 1; m <= months; m++)
            {
                investmentValue = Math.Round((investmentValue + monthlyInvestment) * (1 + monthlyInvestmentGrowthRate), 2);
                monthlyInvestmentGrowthValues.Add(Math.Round(investmentValue - (monthlyInvestment * m), 2));
            }

            return monthlyInvestmentGrowthValues;
        }

        public List<double> MonthlyNetWorthImpact(double[] liabilityRemaining, double[] assets)
        {
            if(liabilityRemaining.Length != assets.Length)
            {
                return null;
            }

            List<double> monthlyNetWorthImpact = new List<double>();

            for(int i = 0; i < assets.Length; i++)
            {
                monthlyNetWorthImpact.Add(Math.Round(assets[i] - liabilityRemaining[i], 2));
            }

            return monthlyNetWorthImpact;
        }
    }
}