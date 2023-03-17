import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useEffect } from 'react/cjs/react.development';
import { useEffect } from 'react';
import productService from '../services/product.service';


const AddProduct = (props) => {
  const [pizzaName, setPizzaName] = useState('');
  const [image, setImage] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');
  
  

  const navigate = useNavigate();
  const { id } = useParams();

  const saveProduct = (p) => {
    p.preventDefault();

    const product = {
      pizzaName,
      image,
      price,
      description,
      
    };
    if (id) {
      //update
      productService
        .update(product)
        .then((response) => {
          console.log('Employee data updated successfully', response.data);
          // history.push('/');
        })
        .catch((error) => {
          alert(error.response.status);
          console.log('Error code ' + error);
          console.log('Something went wrong', error.response.data);
        });
    } else {
      //create
      productService
        .create(product,props.categoryId)
        .then((response) => {
          console.log('employee added successfully', response.data);
        //  history.push('/category');
        //  navigate("/adminproduct");
          props.refreshProducts();
          // <Link to='/category'>Back to List</Link>
        })
        .catch((error) => {
          console.log('something went wroing' + error.response);
          navigate("/adminLoginAgain");
        });
    }
  };

  useEffect(() => {
    if (id) {
      productService
        .get(id)
        .then((category) => {
          setPizzaName(category.data.firstName);
          setDescription(category.data.lastName);
  
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
    }
  }, []);

const backToProducts=()=>{
  props.refreshProducts();
}


  return (
    <div className='container'>
      {/* <div>......</div>
      <div>......</div>
      <div>......</div>
      <div>......</div> */}
      <h3>Add Product</h3>
      <hr />
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='pizzaName'
            value={pizzaName}
            onChange={(p) => setPizzaName(p.target.value)}
            placeholder='Enter pizza name'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='latitude'
            value={image}
            onChange={(p) => setImage(p.target.value)}
            placeholder='Enter image path'
          />
        </div>


        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='price'
            value={price}
            onChange={(p) => setPrice(p.target.value)}
            placeholder='Enter price'
          />
        </div>

        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='description'
            value={description}
            onChange={(c) => setDescription(c.target.value)}
            placeholder='Enter description about pizza'
          />
        </div>

       
        
        <div>
          <button onClick={(p) => saveProduct(p)} className='btn btn-primary'>
            Save Or Update
          </button>
          
        </div>

        
       </form>
       <hr />
       <button onClick={(p) => backToProducts(p)} className='btn btn-primary'>
            Back To Products
          </button>
       {/* <Link to='/adminproduct'>Back to List</Link> */}

       
     </div>
  );
};

export default AddProduct;
