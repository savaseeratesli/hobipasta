using API.Entity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")]    // api/products
public class ProductsController : ControllerBase
{

    [HttpGet]
    public IActionResult GetProducts()
    {
        return Ok(new List<Product>() {
            new Product
            {
				Id = 1, 
				Name = "Çikolatalı Pasta", 
				Description = "Bitter", 
				ImageUrl = "1.jpg", 
				Price = 1500, 
				IsActive = true, 
				Stock = 3 
            },
            new Product
            {
				Id=2, 
				Name="Beyaz Çikolatalı Pasta", 
				Description="Vanilya", 
				ImageUrl="2.jpg", 
				Price=1000, 
				IsActive=true, 
				Stock=2
            }
         });
    }

    // api/products/1
    [HttpGet("{id}")]
    public IActionResult GetProduct(int id)
    {
        return Ok(new Product
        {	
			Id = 1, 
            Name = "Çikolatalı Pasta", 
            Description = "Bitter", 
            ImageUrl = "1.jpg", 
            Price = 1500, 
            IsActive = true, 
            Stock = 3 
			
        });
    }

}