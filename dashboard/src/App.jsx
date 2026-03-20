import { useEffect, useState } from 'react';
import axios from 'axios';
import StatCard from './components/StatCard';
import LastCreated from './components/LastCreated';
import CategoryList from './components/CategoryList';
import ProductTable from './components/ProductTable';
import './App.css';

function App() {
  const [products, setProducts] = useState([]);
  const [users, setUsers]       = useState([]);
  const [loading, setLoading]   = useState(true);

  useEffect(() => {
    Promise.all([
      axios.get('/api/products'),
      axios.get('/api/users')
    ]).then(([prodRes, userRes]) => {
      setProducts(prodRes.data);
      setUsers(userRes.data);
      setLoading(false);
    }).catch(err => {
      console.error('Error al cargar datos:', err);
      setLoading(false);
    });
  }, []);

  if (loading) return <div className="loading">Cargando dashboard...</div>;

  const lastProduct = products.products?.[products.products.length - 1];
  const lastUser    = users.users?.[users.users.length - 1];
  const categories  = Object.keys(products.countByCategory || {}).length;

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>🎸 Ushuaia MusicStore</h1>
        <p>Panel de administración</p>
      </header>

      <section className="stats-grid">
        <StatCard title="Productos"  value={products.count} icon="📦" />
        <StatCard title="Usuarios"   value={users.count}    icon="👥" />
        <StatCard title="Categorías" value={categories}     icon="🏷️" />
      </section>

      <section className="dashboard-row">
        <LastCreated product={lastProduct} user={lastUser} />
        <CategoryList countByCategory={products.countByCategory} />
      </section>

      <section className="dashboard-table">
        <ProductTable products={products.products || []} />
      </section>
    </div>
  );
}

export default App;
