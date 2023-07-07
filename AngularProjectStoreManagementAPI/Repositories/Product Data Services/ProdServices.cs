using AngularProjectStoreManagementAPI.Models;

using Microsoft.EntityFrameworkCore;

namespace APIProject.Repository.Product_Data_Services
{
    public class ProdServices:IProdServices
    {
        public DatabaseContext _databaseContext;

        public ProdServices(DatabaseContext databaseContext)
        {
            _databaseContext = databaseContext;
        }

        public async Task<List<ProductDatum>?> GetProductData()
        {
            var prod = await _databaseContext.ProductDatum.ToListAsync();
            return prod;
        }

        public async Task<ProductDatum>? GetProductDatum(string id)
        {
            var prod = await _databaseContext.ProductDatum.FindAsync(id);
            if (prod is null)
            {
                return null;
            }
            return prod;
        }

        public async Task<List<ProductDatum>?> PutProduct(string id, ProductDatum productDatum)
        {
            var prod = await _databaseContext.ProductDatum.FindAsync(id);

            if (prod is null)
            {
                return null;
            }

            prod.ProductName = productDatum.ProductName;
            prod.QuantityAvailable = productDatum.QuantityAvailable;
            prod.Cost = productDatum.Cost;

            await _databaseContext.SaveChangesAsync();
            return await _databaseContext.ProductDatum.ToListAsync();
        }

        public async Task<List<ProductDatum>> PostProductDatum(ProductDatum productDatum)
        {
            _databaseContext.ProductDatum.Add(productDatum);
            await _databaseContext.SaveChangesAsync();
            return await _databaseContext.ProductDatum.ToListAsync();
        }

        public async Task<List<ProductDatum>> DeleteProductdatum(string id)
        {
            var prod = _databaseContext.ProductDatum.Find(id);
            if (prod is null)
            {
                return null;
            }
            _databaseContext.Remove(prod);
            await _databaseContext.SaveChangesAsync();
            return await _databaseContext.ProductDatum.ToListAsync();
        }
    }
}
