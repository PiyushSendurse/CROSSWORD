import { useEffect, useState } from 'react';
import { Link,useLocation } from 'react-router-dom';
import productService from '../services/product.service';
import AddProduct from './AddProduct';
// import employeeService from '../services/employee.service';

// import { Link } from 'react-router-dom';

// const Category = (props) => {
//     return (
//         <>
            {/* <div class="productSection0">
                <div class="slider">
                    <div class="slide-viewer">
                        <div class="slide-group">
                            <div class="slide slide-1">
                                <img src="Images/slide-1.jpg" alt="slide_01" />
                            </div>
                            <div class="slide slide-2">
                                <img src="Images/slide-2.jpg" alt="slide_02" />
                            </div>
                            <div class="slide slide-3">
                                <img src="Images/slide-3.png" alt="slide_03" />
                            </div>
                            <div class="slide slide-4">
                                <img src="Images/slide-4.jpg" alt="slide_04" />
                            </div>
                        </div>
                    </div>
                    <div class="slide-buttons"></div>
                </div>
            </div> */}

            {/* <div class="productSection1">
                <div class="main_container">
                    <div class="vertical_sec">
                        <div class="horizontal_sec">
                            <div class="box" id="box1">
                                <h3>Data Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                            <div class="box" id="box2">
                                <h3>Business</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                        </div>
                        <div class="horizontal_sec">
                            <div class="box" id="box3">
                                <h3>Computer Science</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                            <div class="box" id="box4">
                                <h3>Information Tech</h3>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea!
                                    Cum sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                            </div>
                        </div>
                    </div>
                    <div class="vertical_sec">
                        <div class="box" id="box5">
                            <h3>Personal Development</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci voluptate laboriosam ea! Cum
                                sint, reprehenderit quam laudantium quo quaerat cupiditate ipsum veniam</p>
                        </div>
                    </div>
                </div>
            </div> */}




const AdminProduct = () => {
  const [products, setProducts] = useState([]);
  const [catId,setCatId]=useState("");
  const location = useLocation();
  const [addCatFlag,setAddCatFlag]=useState(false);
  // const [tempEmp, setTempemp] = useState([]);

  const [displayCategoryFlag,setdisplayCategoryFlag]=useState(true);


// const viewProducts = (catId) =>{
//   setdisplayCategoryFlag(false);
//   setCatId(catId);
// }






  const init = () => {
    productService
      .getAll(location.state.id)
      .then((response) => {
        console.log('Printing employees data', response.data);
        setProducts(response.data);
        // setTempemp(response.data);
        console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    setCatId(location.state.id);
    init();
  }, []);

  const handleDelete = (id) =>{
    console.log('Printing id', id);
    productService
      .remove(id)
      .then((response) => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  // const handleUpdate=(category)=>{
  //   console.log("category to update ",category);
   
  // }

  const addProduct=(catId)=>{
    setAddCatFlag(true);
    setdisplayCategoryFlag(false);
  }

  const displayProduct=()=>{
    setdisplayCategoryFlag(true);
   window.location.reload();
  }



  return (
    <div className='container'>
        <div>.....</div>
        <div>.....</div>
        <div>.....</div>
        <div>.....</div>
        {/* <table cellspacing="100px" align="center">
            <tr><td>a</td><td>b</td><td>c</td></tr>
        </table> */}
        
        <h1>Inside Admin Page</h1>
      
      <hr />
      {/* <div>{location.state.id}</div> */}
      {displayCategoryFlag?(<div>
        <h1>List of Products</h1>

      <div>
        {/* <Link to='/add' className='btn btn-primary mb-2'>
          
        </Link> */}
        <table className='table table-bordered table-striped' align="center">
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>PizzaName</th>
              <th>Image</th>
              <th>Price</th>
              <th>Description</th>
             
             
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) =>(
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.pizzaName}</td>
                <td>{product.image}</td>
                <td>{product.price}</td>
                <td>{product.description}</td>
                
                <td>
                  {/* <Link
                    className='btn btn-info'
                    to={`/employees/edit/${category.id}`}
                  >
                    Update
                  </Link> */}

                {/* <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleUpdate(category);
                    }}
                  >
                    Update
                  </button> */}

                <Link
                    className='btn btn-info'
                    to={`/updateCategory/${product.id}`}
                  >
                    UpdateProduct
                  </Link>

                </td>

                {/* <td>
                  <Link
                    className='btn btn-info'
                    to={`/uploadImage/${employee.id}`}
                  >
                    Image Upload
                  </Link>
                </td> */}
                <td>
                  <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      handleDelete(product.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                {/* <td><button type="submit" id="sub1" name="sub1"  onClick={()=>viewProducts(product.id)} >View</button></td> */}
                </td>
              </tr>
             
            ))}
          </tbody>
                    <tr><td></td><td>
                      {/* <button
                    className='btn btn-danger ml-2'
                    onClick={() => {
                      // handleDelete(category.id);
                    }}
                  >
                    Add
                  </button> */}

                {/* <Link
                    className='btn btn-info'
                    to={`/addproduct`}
                  >
                    addProduct
                  </Link> */}

                  <button type="submit" id="sub11" name="sub11" onClick={()=>addProduct(location.state.id)} >addProduct</button>
                  </td>

                  </tr>

                  {/* <tr><td> <Link to='/adminproduct'>Back to List</Link></td></tr> */}
          <tr><td> <Link to='/admincategory'>Back to Admin Category</Link></td></tr>
        </table>
      </div>


      

        </div>):


                
                  <div>

        <AddProduct  categoryId={catId}  refreshProducts={displayProduct}></AddProduct> 
        
        
       </div>
        }


    </div>
  )
}

export default AdminProduct;



