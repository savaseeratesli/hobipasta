using API.Entity;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace API.Data;

public class DataContext(DbContextOptions options) : IdentityDbContext<AppUser, AppRole, string>(options)
{
    public DbSet<Product> Products => Set<Product>();

    public DbSet<Cart> Carts => Set<Cart>();

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        base.OnModelCreating(modelBuilder);

        modelBuilder.Entity<Product>().HasData(
            new List<Product>
            {
                new Product { Id=1, Name="Çikolatalı Pasta", Description="Bitter", ImageUrl="1.jpg", Price=1500, IsActive=true, Stock=3 },
                new Product { Id=2, Name="Beyaz Çikolatalı Pasta", Description="Vanilya", ImageUrl="2.jpg", Price=1000, IsActive=true, Stock=2 },
                new Product { Id=3, Name="Çilekli Pasta", Description="Çilek", ImageUrl="3.jpg", Price=2000, IsActive=true, Stock=4 },
                new Product { Id=4, Name="Muzlu Pasta", Description="Muz", ImageUrl="4.jpg", Price=1800, IsActive=true, Stock=1 },           
            }
        );
    }
}