import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate, useNavigate, useParams } from 'react-router-dom';
// import { useEffect } from 'react/cjs/react.development';
import { useEffect } from 'react';
import categoryService from '../services/category.service';


const AddCategory = (props) => {
  const [categoryName, setCategoryName] = useState('');
  const [description, setDescription] = useState('');
  

  const navigate = useNavigate();
  const { id } = useParams();

  const saveCategory = (c) => {
    c.preventDefault();

    const category = {
      categoryName,
      description,
    };
    if (id) {
      //update
      categoryService
        .update(category)
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
      categoryService
        .create(category)
        .then((response) => {
          console.log('employee added successfully', response.data);
        //  history.push('/category');
          navigate("/admincategory");
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
      categoryService
        .get(id)
        .then((category) => {
          setCategoryName(category.data.firstName);
          setDescription(category.data.lastName);
  
        })
        .catch((error) => {
          console.log('Something went wrong', error);
        });
    }
  }, []);
  return (
    <div className='container'>
      <div>......</div>
      <div>......</div>
      <div>......</div>
      <div>......</div>
      <h3>Add Category</h3>
      <hr />
      <form>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='categoryName'
            value={categoryName}
            onChange={(c) => setCategoryName(c.target.value)}
            placeholder='Enter category name'
          />
        </div>
        <div className='form-group'>
          <input
            type='text'
            className='form-control col-4'
            id='description'
            value={description}
            onChange={(c) => setDescription(c.target.value)}
            placeholder='Enter description'
          />
        </div>
        
        <div>
          <button onClick={(c) => saveCategory(c)} className='btn btn-primary'>
            Save Or Update
          </button>
          
        </div>

        
       </form>
       <hr />
       <Link to='/admincategory'>Back to List</Link>
     </div>
  );
};

export default AddCategory;
