using AngularProjectStoreManagementAPI.Models;
using System.Security.Claims;

namespace AngularProjectStoreManagementAPI.Repositories.Token_Services
{
    public interface ITokenService
    {
        TokenResponse GetToken(IEnumerable<Claim> claim);
        string GetRefreshToken();
        ClaimsPrincipal GetPrincipalFromExpiredToken(string token);
    }
}
