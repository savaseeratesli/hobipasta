using API.Entity;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("/api/[controller]")] //api/products dediklerinde ilgili adrese gider.

public class ProductsController:ControllerBase
{
    [HttpGet] //api/products
    public IActionResult GetProducts()
    {
        return Ok(new List<Product>()
        {
        new Product
        {
             Id=1, 
             Name="Çikolatalı Pasta", 
             Description="Bitter", 
             ImageUrl="1.jpg", 
             Price=1500, 
             IsActive=true, 
             Stock=3 
            
        },

        new Product
        {
             Id=2, 
             Name="Beyaz Çikolatalı Pasta", 
             Description="Vanilya", 
             ImageUrl="2.jpg", 
             Price=1000, IsActive=true, 
             Stock=2
        },
            
        });
     
    }

    [HttpGet("{id}")] //api/products/1
    public IActionResult GetProduct(int id)
    {
        return Ok(new Product {
             Id=1, 
             Name="Çikolatalı Pasta", 
             Description="Bitter", 
             ImageUrl="1.jpg", 
             Price=1500, 
             IsActive=true, 
             Stock=3 
        });
    }
    
}
