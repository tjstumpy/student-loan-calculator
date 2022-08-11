using MongoDB.Driver;
using MongoDB.Bson;
using StudentLoanCalculator.Api.Identity;
using StudentLoanCalculator.Api.Models;

namespace StudentLoanCalculator.Api.Data
{
    public class MongoCRUD
    {
        private IMongoDatabase db;

        public MongoCRUD(string database) // For Local Server
        {
            var settings = new MongoClientSettings();
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            var client = new MongoClient(settings);
            db = client.GetDatabase(database);
        }
        public MongoCRUD(string database, string connectionString)
        {
            var settings = MongoClientSettings.FromConnectionString(connectionString);
            settings.ServerApi = new ServerApi(ServerApiVersion.V1);
            var client = new MongoClient(settings);
            db = client.GetDatabase(database);
        }

        public void InsertRecord<T>(string table, T record)
        {
            var collection = db.GetCollection<T>(table);
            collection.InsertOne(record);
        }

        public List<T> LoadRecords<T>(string table)
        {
            var collection = db.GetCollection<T>(table);

            return collection.Find(new BsonDocument()).ToList();
        }

        public T LoadRecordById<T>(string table, Guid id)
        {
            var collection = db.GetCollection<T>(table);
            var filter = Builders<T>.Filter.Eq("Id", id);

            return collection.Find(filter).First();
        }

        public void UpsertRecord<T>(string table, Guid id, T record)
        {
            var collection = db.GetCollection<T>(table);

            var result = collection.ReplaceOne(
                new BsonDocument("_id", id),
                record,
                new ReplaceOptions { IsUpsert = true });
        }

        public void DeleteRecord<T>(string table, Guid id)
        {
            var collection = db.GetCollection<T>(table);
            var filter = Builders<T>.Filter.Eq("Id", id);
            collection.DeleteOne(filter);
        }

        public T LoadGrowthRates<T>(string riskName)
        {
            var collection = db.GetCollection<T>("GrowthRates");
            var filter = Builders<T>.Filter.Eq("riskName", riskName);

            return collection.Find(filter).First();
        }

        public void InsertDefaultUser()
        {
            UserModel defaultUser = new UserModel();
            defaultUser.FirstName = "Jonathan";
            defaultUser.LastName = "Mantello";
            defaultUser.EmailAddress = "jmantello@emailadress.com";
            defaultUser.SavedCalculations = new List<SavedCalculationModel>();

            InputModel inputModel = new InputModel();
            inputModel.DiscretionaryIncome = 1500;
            inputModel.LoanAmount = 40000;
            inputModel.InterestRate = 5.8;
            inputModel.TermInYears = 20;

            SavedCalculationModel savedCalculation = new SavedCalculationModel();
            savedCalculation.Name = "My saved calculation";
            savedCalculation.InputModel = inputModel;

            defaultUser.SavedCalculations.Add(savedCalculation);

            InsertRecord("Users", defaultUser);
        }

        public void InsertDefaultGrowthRates()
        {
            MongoCRUD db = new MongoCRUD("StudentLoanDb");

            GrowthRatesModel conservative = new GrowthRatesModel()
            {
                riskName = "conservative",
                average = 0.149,
                low = -0.341,
                high = 0.343
            };

            GrowthRatesModel moderate = new GrowthRatesModel()
            {
                riskName = "moderate",
                average = 0.173,
                low = -0.438,
                high = 0.526
            };

            GrowthRatesModel aggressive = new GrowthRatesModel()
            {
                riskName = "aggressive",
                average = 0.238,
                low = -0.417,
                high = 1.017
            };

            InsertRecord("GrowthRates", conservative);
            InsertRecord("GrowthRates", moderate);
            InsertRecord("GrowthRates", aggressive);

        }
    }
}