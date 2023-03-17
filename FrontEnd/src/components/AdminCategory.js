import { useEffect, useState } from 'react';
import { Link ,useNavigate} from 'react-router-dom';
import categoryService from '../services/category.service';
import AdminProduct from './AdminProduct';

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




const AdminCategory = () => {
  const [categories, setEmployees] = useState([]);
  const [catId,setCatId]=useState("");
  // const [tempEmp, setTempemp] = useState([]);
  const navigate = useNavigate();
  const [displayCategoryFlag,setdisplayCategoryFlag]=useState(true);


const viewProducts = (catId) =>{
  // setdisplayCategoryFlag(false);
  // setCatId(catId);

  navigate('/adminproduct',{state:{id:catId}});
}






  const init = () => {
    categoryService
      .getAll()
      .then((response) => {
        console.log('Printing employees data', response.data);
        setEmployees(response.data);
        // setTempemp(response.data);
        console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    init();
  }, []);

  const handleDelete = (id) =>{
    console.log('Printing id', id);
    categoryService
      .remove(id)
      .then((response) => {
        console.log('employee deleted successfully', response.data);
        init();
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  const handleUpdate=(category)=>{
    console.log("category to update ",category);
   
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
      <h1>List of Categories</h1>
      <hr />

      
          

      <div>
        {/* <Link to='/add' className='btn btn-primary mb-2'>
          
        </Link> */}
        <table className='table table-bordered table-striped' align="center">
          <thead className='thead-dark'>
            <tr>
              <th>Id</th>
              <th>Category Name</th>
              <th>Description</th>
             
              <th colSpan={3}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category) =>(
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{category.categoryName}</td>
                <td>{category.description}</td>
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

                {/* <Link
                    className='btn btn-info'
                    to={`/updateCategory/${category.id}`}
                  >
                    UpdateCategory
                  </Link> */}

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
                      handleDelete(category.id);
                    }}
                  >
                    Delete
                  </button>
                </td>
                <td>
                <td><button type="submit" id="sub1" name="sub1"  onClick={()=>viewProducts(category.id)} >View</button></td>
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

                <Link
                    className='btn btn-info'
                    to={`/addCategory`}
                  >
                    addCategory
                  </Link>
                  </td>

                  </tr>
          
        </table>
      </div>


      

       
        
        {/* <AdminProduct  categoryId={catId}  ></AdminProduct>  */}
        
       


    </div>
  )
}

export default AdminCategory;





//             <div>.....</div>
//             <div>.....</div>

//             <div class="productSection2">
//             <div></div>
//                 <div class="productGrid">
                    
//                     <div class="product">
//                         <div class="image">
//                             <img src="Images/mysql.svg" alt=""/>
//                         </div>
//                         <div class="description">
//                             <h3>MySQL</h3>
//                             <p>By Sir Nishat Kumar</p>
//                             <h2 class="price">$500</h2>
//                             <a href="" class="buy">Buy Now</a>
//                             <a href="" class="add">Add to Cart</a>
//                         </div>
//                     </div>
//                     <div class="product">
//                         <div class="image">
//                             <img src="Images/html-css.svg" alt=""/>
//                         </div>
//                         <div class="description">
//                             <h3>Html & CSS</h3>
//                             <p>By Sir Nishat Kumar</p>
//                             <h2 class="price">$500</h2>
//                             <a href="" class="buy">Buy Now</a>
//                             <a href="" class="add">Add to Cart</a>
//                         </div>
//                     </div>
//                     <div class="product">
//                         <div class="image">
//                             <img src="Images/js.svg" alt=""/>
//                         </div>
//                         <div class="description">
//                             <h3>JS</h3>
//                             <p>By Sir Nishat Kumar</p>
//                             <h2 class="price">$500</h2>
//                             <a href="" class="buy">Buy Now</a>
//                             <a href="" class="add">Add to Cart</a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>
//     );
// }
// export default Category;