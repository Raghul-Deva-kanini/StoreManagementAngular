using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AngularProjectStoreManagementAPI.Models;

using Microsoft.AspNetCore.Authorization;
using APIProject.Repository.Product_Data_Services;

namespace APIProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductDatumsController : ControllerBase
    {
        private readonly IProdServices _prodServices;

        public ProductDatumsController(IProdServices prodServices)
        {
            _prodServices = prodServices;
        }

        // GET: api/ProductDatums
        [HttpGet]
        
        public async Task<ActionResult<IEnumerable<ProductDatum>?>> GetProductData()
        {
            return await _prodServices.GetProductData();
        }

        // GET: api/ProductDatums/5
        [HttpGet("{id}")]
        [Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductDatum>> GetProductDatum(string id)
        {
            var prod = await _prodServices.GetProductDatum(id);

            if (prod == null)
            {
                return NotFound("Prod id not matching");
            }

            return Ok(prod);
        }

        // PUT: api/ProductDatums/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
     //   [Authorize(Roles = "Admin")]
        public async Task<ActionResult<List<ProductDatum>?>> PutProductDatum(string id, ProductDatum productDatum)
        {
            var res = await _prodServices.PutProduct(id, productDatum);
            if (res == null)
            {
                return NotFound("Prod id not matching");
            }
            return Ok(res);
        }

        

        // POST: api/ProductDatums
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        //[Authorize(Roles = "Admin")]
        public async Task<ActionResult<ProductDatum>> PostProductDatum(ProductDatum productDatum)
        {
            var prod = await _prodServices.PostProductDatum(productDatum);
            return Ok(prod);
        }
        

        // DELETE: api/ProductDatums/5
        [HttpDelete("{id}")]
        //[Authorize(Roles = "Admin")]

        public async Task<ActionResult<List<ProductDatum>>> DeleteProductdatum(string id)
        {
            var prod = await _prodServices.DeleteProductdatum(id);

            if (prod == null)
            {
                return NotFound("Prod id not matching");
            }
            return Ok(prod);
        }

    }
}
