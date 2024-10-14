import React, { useEffect, useState } from 'react';

const MenuItemsByCategory = ({ categoryId, titleCategory, descripcionCategory, column }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // URL de la API REST filtrando por la categoría
    const apiUrl = `http://carta.local/wp-json/wp/v2/menu?categorias=${categoryId}&per_page=100`;

    const fetchMenuItems = async () => {
      try {
        const response = await fetch(apiUrl);

        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }

        const data = await response.json();
        // Ordena los elementos por menu_order
        const sortedData = data.sort((a, b) => a.menu_order - b.menu_order);
        setMenuItems(sortedData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, [categoryId]); // Dependencia de categoryId

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>{titleCategory}</h1>
      <span>{descripcionCategory}</span>
      <ul>
        {menuItems.map(item => (
          <li className={` ${column ? "  flex-col-reverse" : ""} leading-[25px] flex `} key={item.id}>
            <div className='w-[110px] '>
              <p className='text-prices text-[20px] font-extrabold font-montserrat '>${item.acf.precio}</p>
            </div>
            <div className='w-full text-left'>
              <h2 className='text-text font-semibold text-[20px] p-0 m-0 leading-[22px]'>{item.title.rendered}</h2>
              <p className='italic text-textAux font-medium text-md leading-[22px] py-1'>{item.acf.descripcion}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuItemsByCategory;
