using System;
using Microsoft.EntityFrameworkCore;
namespace Model
{

    public class Context : DbContext
    {
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                var servername = Environment.MachineName;
                optionsBuilder.UseSqlServer("Server =" + servername + ";Database=ProvaCSharp2;Integrated Security=True");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(e => e.Id);
                entity.Property(e=> e.Name);
                entity.Property(e=> e.Age);
                entity.Property(e=> e.Breed);
                entity.Property(e=> e.UserName);
                entity.Property(e=> e.Password);
                entity.Property(e=> e.Image);

            });
        }
    }
}