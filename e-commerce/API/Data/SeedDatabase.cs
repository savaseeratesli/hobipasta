using API.Entity;
using Microsoft.AspNetCore.Identity;

namespace API.Data;

public static class SeedDatabase
{
    public static async void Initialize(IApplicationBuilder app)
    {
        var userManager = app.ApplicationServices
                            .CreateScope()
                            .ServiceProvider
                            .GetRequiredService<UserManager<AppUser>>();

        var roleManager = app.ApplicationServices
                            .CreateScope()
                            .ServiceProvider
                            .GetRequiredService<RoleManager<AppRole>>();

        if (!roleManager.Roles.Any()) // dbde herhangi bir role bilgisi yoksa ekle
        {
            var customer = new AppRole { Name = "Customer" };
            var admin = new AppRole { Name = "Admin" };

            //DB ye ekleme
            await roleManager.CreateAsync(customer);
            await roleManager.CreateAsync(admin);         
        }

        if(!userManager.Users.Any())
        {
            var customer = new AppUser { Name = "Savaş Enes ERATEŞLİ", UserName = "savaseneseratesli", Email= "savaseeratesli@gmail.com" };
            var admin = new AppUser { Name= "Nazlıcan ERATEŞLİ", UserName = "nazlcaneratesli", Email= "nazlcaneratesli@gmail.com" };

            await userManager.CreateAsync(customer, "Savas_123");
            await userManager.AddToRolesAsync(customer, ["Customer", "Admin"]);

            await userManager.CreateAsync(admin, "Naz_123");
            await userManager.AddToRoleAsync(admin, "Admin");
        }


    }
}