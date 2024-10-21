import React, { Fragment, useContext, useEffect, useState } from 'react';
import Loading from '../common/loading';
import { AppContext } from '../context/store';

const MenuItemsByCategory = ({ categoryId, titleCategory, descripcionCategory, column, tragos }) => {
  const [menuItems, setMenuItems] = useState([]);
  const [error, setError] = useState(null);
  const { loading, setLoading } = useContext(AppContext);

  const lazyLoading = () => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }



  useEffect(() => {
    // URL de la API REST filtrando por la categoría
    const apiUrl = `https://pink-bear-576532.hostingersite.com/wp-json/wp/v2/menu?categorias=${categoryId}&per_page=90`;

    console.log(apiUrl);




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
        lazyLoading();
      }
    };

    fetchMenuItems();
  }, [categoryId]); // Dependencia de categoryId

  if (loading) return <p className='text-text'>Cargando...</p>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>

      <h1>{titleCategory}</h1>
      <span>{descripcionCategory}</span>
      <ul>


        {tragos ? (menuItems.map(item => (
          <li className={` ${column ? "  flex-col-reverse" : ""} leading-[25px] flex md:pb-4 pb-3`} key={item.id}>

            <div className='w-full text-left'>
              <h2 className='text-text md:font-semibold font-extrabold md:text-[20px] text-[15px]  md:leading-[28px] leading-[15px]'>{item.title.rendered}</h2>
              <div className='w-[110px] '>
                <p className='text-prices md:text-[20px] text-[14px] font-extrabold font-montserrat md:leading-[22px] leading-[18px]'>${item.acf.precio}</p>
              </div>
              <p className='italic text-textAux font-medium md:text-lg text-[10px] md:leading-[22px] leading-[10px] md:py-1 pb-2 '>{item.acf.descripcion}</p>
            </div>
          </li>
        ))) : (menuItems.map(item => (
          <li className={` ${column ? "  flex-col-reverse" : ""} md:leading-[25px] leading-[15px] flex items-start`} key={item.id}>
            <div className='md:w-[110px] w-[60px]  '>
              <p className='text-prices md:text-[20px] text-[10px] font-extrabold font-montserrat md:leading-[22px] leading-[18px]'>${item.acf.precio}</p>
            </div>
            <div className='w-full text-left'>
              <h2 className='text-text font-semibold md:text-[20px] text-[10px]  md:leading-[28px] leading-[15px]'>{item.title.rendered}</h2>
              {item.acf.descripcion ? <p className='italic text-textAux font-medium md:text-lg text-[10px] md:leading-[22px] leading-[10px] md:py-1 pb-2 '>{item.acf.descripcion}</p> : ""}

            </div>
          </li>
        )))}
      </ul>
    </div>
  );
};

export default MenuItemsByCategory;
