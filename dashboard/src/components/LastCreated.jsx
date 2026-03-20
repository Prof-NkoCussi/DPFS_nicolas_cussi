const LastCreated = ({ product, user }) => {
  return (
    <div className="last-created">
      <div className="last-card">
        <h3>Último producto agregado</h3>
        {product ? (
          <>
            <img src={`http://localhost:3000${product.image}`} alt={product.name} onError={e => e.target.src = 'https://placehold.co/80x80?text=Sin+imagen'} />
            <p className="last-name">{product.name}</p>
            <p className="last-category">{product.category}</p>
            <p className="last-price">${Number(product.price).toLocaleString('es-AR')}</p>
          </>
        ) : <p>Cargando...</p>}
      </div>

      <div className="last-card">
        <h3>Último usuario registrado</h3>
        {user ? (
          <>
            <img src={`http://localhost:3000${user.image}`} alt={user.name} onError={e => e.target.src = 'https://placehold.co/80x80?text=Sin+imagen'} />
            <p className="last-name">{user.name}</p>
            <p className="last-category">{user.email}</p>
            <p className="last-price role">{user.role}</p>
          </>
        ) : <p>Cargando...</p>}
      </div>
    </div>
  );
};

export default LastCreated;
