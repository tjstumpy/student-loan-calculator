using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StudentLoanCalculator.Domain
{
    public interface ILoanCalculator
    {
        public double MonthlyLoanPayment(double loanAmount, double interestRate, int timeInMonths);
       
        public double MonthlyInvestmentPayment(double loanPayment, double discretionaryIncome);
       
        public double LoanInterest(double loanAmount, int timeInMonths, double monthlyPayment);
        
        public double ProjectedInvestment(double monthlyInvestment, double growthRate, int timeInMonths);
        
        public double ReturnOnInvestment(double monthlyInvestment, int timeInMonths, double investmentTotal);
        
        public double SuggestedInvestment(double loanInterest, double growthRate, double timeInMonths);
        
        public List<double> RemainingLoanBalances(double loanAmount, double monthyInterestRate, double monthlyPayment, int timeInMonths);
        
        List<double> MonthlyInvestmentGrowth(double monthlyInvestment, double monthlyInvestmentGrowthRate, int months);

        public List<double> MonthlyNetWorthImpact(double[] liabilityRemaining, double[] assets);
    }
}
