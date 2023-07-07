using Microsoft.AspNetCore.Identity;

namespace AngularProjectStoreManagementAPI.Models
{
    public class ApplicationUser : IdentityUser
    {
        public string? Name { get; set; }
    }
}
