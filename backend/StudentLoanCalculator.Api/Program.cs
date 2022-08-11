using StudentLoanCalculator.Domain;
using StudentLoanCalculator.Api.Identity;
using StudentLoanCalculator.Api.Models;
using StudentLoanCalculator.Api.Data;
using MongoDB.Driver;

namespace StudentLoanCalculator.Api
{
    internal class Program
    {
        static void Main(string[] args)
        {
            var builder = WebApplication.CreateBuilder(args);

            // Add services to the container.
            builder.Services.AddControllers();
            // Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();
            builder.Services.AddSingleton<ILoanCalculator, LoanCalculator>();

            // MongoDB
            MongoCRUD db = new MongoCRUD("StudentLoadDb"); // Local connection
            builder.Services.AddSingleton(db);

            var app = builder.Build();

            // Cors
            app.UseCors(IApplicationBuilder =>
            {
                IApplicationBuilder.WithOrigins("http://localhost:4200")
                .AllowAnyOrigin()
                .AllowAnyMethod()
                .AllowAnyHeader();
            });

            // Configure the HTTP request pipeline.
            if (app.Environment.IsDevelopment())
            {
                app.UseSwagger();
                app.UseSwaggerUI();
            }

            app.UseHttpsRedirection();

            app.UseAuthorization();

            app.MapControllers();

            app.Run();
        }
    }
}