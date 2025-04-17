import React from 'react'

const InventoryAddProduct = () => {
  return (
    <>
    <>
  <form>
    <div className="mb-3">
      <label htmlFor="productName" className="form-label">
        Product Name
      </label>
      <input
        type="text"
        className="form-control"
        id="productName"
        required=""
      />
    </div>
    <div className="mb-3">
      <label htmlFor="productCode" className="form-label">
        Product Code
      </label>
      <input
        type="text"
        className="form-control"
        id="productCode"
        required=""
      />
    </div>
    <div className="mb-3">
      <label htmlFor="category" className="form-label">
        Category
      </label>
      <select className="form-select" id="category" required="">
        <option value="" disabled="" selected="">
          Select Category
        </option>
        <option value="electronics">Electronics</option>
        <option value="furniture">Furniture</option>
        <option value="clothing">Clothing</option>
        <option value="accessories">Accessories</option>
      </select>
    </div>
    <div className="mb-3">
      <label htmlFor="quantity" className="form-label">
        Quantity
      </label>
      <input
        type="number"
        className="form-control"
        id="quantity"
        required=""
        min={1}
      />
    </div>
    <div className="mb-3">
      <label htmlFor="price" className="form-label">
        Price
      </label>
      <input
        type="number"
        className="form-control"
        id="price"
        required=""
        min={0}
        step="0.01"
      />
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label">
        Description
      </label>
      <textarea
        className="form-control"
        id="description"
        rows={3}
        required=""
        defaultValue={""}
      />
    </div>
    <button type="submit" className="btn btn-primary">
      Add Product
    </button>
  </form>
</>

    </>
  )
}

export default InventoryAddProduct