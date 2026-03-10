using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Entity;

namespace API.DTO
{
    public class OrderDTO
    {
        public int Id { get; set; }
        public DateTime OrderDate { get; set; } = DateTime.Now;
        public string? FirstName { get; set; }
        public string? Surname { get; set; }
        public string? Phone { get; set; }
        public string? City { get; set; }
        public string? AddresLine { get; set; }
        public string? CustomerId { get; set; }
        public OrderStatus OrderStatus { get; set; } = OrderStatus.Pending;
        public List<OrderItemDTO> OrderItems { get; set; } = new(); //order ile orderıtem tablosu ilişkilendirdim.
        public decimal SubTotal { get; set; }
        public decimal DeliveryFee { get; set; }

        
    }
    public class OrderItemDTO
    {
        public int Id { get; set; }
        public int ProductId { get; set; }
        public string ProductName { get; set; } = null!;
        public string ProductImage { get; set; } = null!;
        public decimal Price { get; set; }
        public int Quantity { get; set; }
    }
}