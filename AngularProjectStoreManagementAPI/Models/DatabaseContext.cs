using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;

namespace AngularProjectStoreManagementAPI.Models
{
    public class DatabaseContext : IdentityDbContext<ApplicationUser>
    {
        public DatabaseContext(DbContextOptions<DatabaseContext> options) : base(options)
        {

        }

        public DbSet<TokenInfo> TokenInfo { get; set; }

        public DbSet<ProductDatum> ProductDatum { get; set; }
    }
}
