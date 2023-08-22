import React, { useState, useEffect } from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import { useGetPageQuery, useGetProductsQuery } from '../../slices/productsApiSlice';
import { Link } from 'react-router-dom';
import Product from '../../components/Product';
import Loader from '../../components/Loader';
import Message from '../../components/Message';
import Paginate from '../../components/Paginate';
import Meta from '../../components/Meta';
import { servere } from '../../data/servere';
const HomeScreen = () => {
  const { pageNumber, keyword } = useParams();
  const [category, setCategory] = useState('all');

  const {data, isLoading, error}  = useGetPageQuery()
 
  const [filteredProducts, setFilteredProducts] = useState([]);


  useEffect(() => {
    // Function to filter products based on the category
    const filterProductsByCategory = (category) => {
      if (data && data) {
        return data.filter((product) => product.category === category);
      }
      return [];
    };

    // Based on the category, set the filtered products
    let categoryFilteredProducts = [];
    switch (category) {
      case 'all':
        categoryFilteredProducts = data ? data : [];
        break;
      case 'sample':
        categoryFilteredProducts = filterProductsByCategory('Sample category');
        break;
      case 'electronics':
        categoryFilteredProducts = filterProductsByCategory('Electronics');
        break;
      default:
        categoryFilteredProducts = data ? data.products : [];
    }

    setFilteredProducts(categoryFilteredProducts);
  }, [category, data]);

  // Check if data is undefined or null
  if (isLoading || !data) {
    return <Loader />;
  }

  // Check for errors
  if (error) {
    return (
      <Message variant='danger'>{error?.data?.message || error.error}</Message>
    );
  }

  console.log(data);

  return (
    <>
      {keyword && (
        <Link to='/produse' className='btn btn-light mb-4'>
          Inapoi
        </Link>
      )}
      <>
        <Meta />
        <h1 className='text-white'>Servere</h1>
        {/* <Button onClick={() => setCategory('all')}>All</Button>
        <Button onClick={() => setCategory('electronics')}>Electronics</Button>
        <Button onClick={() => setCategory('sample')}>Sample</Button> */}
        <Row>
          {servere.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
        {/* <Paginate
          pages={data.pages}
          page={data.page}
          keyword={keyword ? keyword : ''}
        /> */}
      </>
    </>
  );
};

export default HomeScreen;
