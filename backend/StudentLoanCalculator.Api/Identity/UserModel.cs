using MongoDB.Bson.Serialization.Attributes;
using StudentLoanCalculator.Api.Models;

namespace StudentLoanCalculator.Api.Identity
{
    public class UserModel
    {
        [BsonId]
        public Guid Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string EmailAddress { get; set; }
        public List<SavedCalculationModel> SavedCalculations { get; set; }
    }
}
