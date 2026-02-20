namespace API.Entity;

//Herhangi bir kiiş sepetine ürün eklediğinde cart sınıfında  bir nesne üretilecek.
public class Cart
{
    public int CartId { get; set; }
    public string CustomerId { get; set; } = null!; 
    public List<CartItem> CartItems { get; set; } = new List<CartItem>();
}

public class CartItem
{
    public int CartItemId { get; set; }
    public int ProductId { get; set; }
    public Product Product { get; set; } = null!;
    public int CartId { get; set; }
    public Cart Cart { get; set; } = null!;
    public int Quantity { get; set; } 
}