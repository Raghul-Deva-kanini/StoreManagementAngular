using AngularProjectStoreManagementAPI.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace AngularProjectStoreManagementAPI.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    
    public class AdminController : ControllerBase
    {
        [HttpGet]
        [Authorize(Roles = "Admin")]
        public IActionResult GetData()
        {
            var status = new Status();
            status.StatusCode = 1;
            status.Message = "Data from admin controller";
            return Ok(status);
        }
    }
}
