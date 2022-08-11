using MongoDB.Bson.Serialization.Attributes;

namespace StudentLoanCalculator.Api.Models
{
    public class GrowthRatesModel
    {
        [BsonId]
        [BsonRepresentation(MongoDB.Bson.BsonType.ObjectId)]
        public string id { get; set; }

        public string riskName { get; set; }
        public double average { get; set; }
        public double low { get; set; }
        public double high { get; set; }
    }
}
