const ProductTable = ({ products }) => {
  return (
    <div className="product-table">
      <h3>Listado de productos</h3>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Producto</th>
            <th>Categoría</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {products.map(p => (
            <tr key={p.id}>
              <td>{p.id}</td>
              <td>
                <div className="product-cell">
                  <img src={`http://localhost:3000${p.image}`} alt={p.name} onError={e => e.target.src = 'https://placehold.co/40x40?text=?'} />
                  <span>{p.name}</span>
                </div>
              </td>
              <td><span className="cat-badge">{p.category}</span></td>
              <td>${Number(p.price).toLocaleString('es-AR')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
