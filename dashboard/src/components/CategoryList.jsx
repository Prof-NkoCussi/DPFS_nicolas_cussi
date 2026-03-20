const CategoryList = ({ countByCategory }) => {
  const categories = Object.entries(countByCategory || {});

  return (
    <div className="category-list">
      <h3>Productos por categoría</h3>
      <ul>
        {categories.map(([name, count]) => (
          <li key={name}>
            <span className="cat-name">{name}</span>
            <span className="cat-badge">{count}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryList;
