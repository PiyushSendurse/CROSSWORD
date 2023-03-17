import { useEffect, useState } from 'react';
import { Link ,useParams,useNavigate} from 'react-router-dom';
import categoryService from '../services/category.service';
import customerService from '../services/customer.service';
import ProductBookSuccessfully from './ProductBookSuccessfully';
import "./customer.css"
import {PersonCircle,TextRight,Trash} from "react-bootstrap-icons";
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




const Customer = (props) => {
  const [categories, setCategories] = useState([]);
  const [bookMsg, setBookMsg] = useState("");


  // const [tempEmp, setTempemp] = useState([]);
const navigate=useNavigate();
 let [productbooksuccessfullyFlag,setProductbooksuccessfullyFlag]=useState(false);
  let [customerFlag,setCustomerFlag]=useState(true);
  let [logoutFlag,setlogoutFlag]=useState(false);

  const [cartOb, setCartOb] = useState({latitude:"",longitude:"",catId:"",userId:props.customerId});
  
  let [custId,setCustId]=useState("");
  let [custOb,setCustOb]=useState({});
  let [custName,setCustName]=useState("");
//  let [productBookedDetails,setProductBookedDetails]=useState("");
  const { id } = useParams();

  const init = () =>{
    categoryService
      .getAll()
      .then((response) => {
        console.log('Printing categories data', response.data);
        setCategories(response.data);
        console.log("printing id of customer"+props.customerId);
        // setTempemp(response.data);
        console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };



  const initUser = () =>{
    customerService
      .get(props.customerId)
      .then((response) =>{
        console.log('Printing customers data', response.data.firstName);
       
        console.log("printing id of customer"+props.customerId);
        setCustId(response.data.id);
        console.warn(response.data);
      })
      .catch((error) => {
        console.log('Something went wrong', error);
      });
  };

  useEffect(() => {
    setCustId(props.customerId);
    init();
   initUser();
  }, []);

  

  const handleDelete = (id) => {
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

//add to caart 

const addProductToCart = () =>{

customerService
        .bookProduct(cartOb)
        .then((response) => {
          console.log(' ', response.data);
          setBookMsg(response.data);
       //   setProductBookedDetails(response.data);
        //  history.push('/category');
        //  navigate("/productbooksuccessfully");
          setProductbooksuccessfullyFlag(true);
          setCustomerFlag(false);
          // <Link to='/category'>Back to List</Link>
        })
        .catch((error) => {
          console.log('something went wroing' + error.response);
        //  navigate("/adminLoginAgain");
        });


      }

      const viewPizza = (catId)=>{
        navigate('/customerproduct',{state:{catId:catId,custId:props.customerId}});
      }


     const goTOCustomer=()=>{
      setProductbooksuccessfullyFlag(false);
      setCustomerFlag(true);
     }


     const handleAddProduct = (catId) =>{

      // fetching geolocation
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showposition, showerror);
        console.log("after gelocation")

    } else {

        console.log("geolocation is not supported");
    }

    function showposition(position) {
      
     console.log("latitude "+position.coords.latitude);
     cartOb.latitude=position.coords.latitude;
     console.log("longitude "+position.coords.longitude);
     cartOb.longitude=position.coords.longitude;
     cartOb.catId=catId;
     console.log(cartOb);


     // calling add method

  addProductToCart();

  }

  function showerror(err) {
      
     console.log("error "+err);
  }


     }

     const seeLogout=()=>{
      console.log("inside logout");
      setlogoutFlag(true);
     }

     const logout=()=>{
      console.log("inside logout");
      navigate("/customerlogin");
      window.location.reload();
     }





  return (
    <div>
    <div className='CustmerBody'>
      <div className='WelcomeBody'> <h1>WELCOME TO THE CUSTOMER PAGE</h1></div>
      <div className='ProfileBody'>
         <div className='profile' ><PersonCircle onClick={()=>seeLogout()}> </PersonCircle>{custName}</div>
{logoutFlag?<div className='align-items-end'>
  {/* <Link to='/customerlogin'>Logout</Link> */}
  <br></br>
  <button type="submit" id="subl" onClick={()=>logout()}>Logout</button>
        </div>:""}
      </div>
  </div>
  {customerFlag?(<div>
         <div>
           <hr/>
           <table className=' table-bordered' align="center">
             {/* <thead className='thead-dark'> */}
               <tr>
                {/* <th>Image</th> */}
                 <th>Id</th>
                 <th>Category Name</th>
                 <th>Description</th>
                
                 <th colSpan={3}>Actions</th>
               </tr>
             {/* </thead> */}
             <tbody>
               {categories.map((category) => (
                 <tr key={category.id}>
                  {/* <td><img src={category.imagePath}/></td> */}
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
                     {/* <button
                       className='btn btn-danger ml-2'
                       onClick={() => {
                         handleDelete(category.id);
                       }}
                     >
                       Delete
                     </button> */}
                     </td>
                     <td>
                     <button
                       className='btn btn-danger ml-2'
                       onClick={() => {
                        viewPizza(category.id)
                       }}
                     >
                       View Pizza
                     </button>
   
   
                   </td>
                   <td>
                     
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
                       to={`/addCategory`}
                     >
                           addCategory
                     </Link> */}
   
                     </td></tr>
             
           </table>
         </div>
   
         </div>):
         
         // <ProductBookSuccessfully  ></ProductBookSuccessfully>
                     <div>
                       <h1>!! productBookedDetails !!</h1>
                          <h1> {bookMsg} </h1>
         <button type="submit" id="sub" name="sub" onClick={()=>goTOCustomer()}>Go to CUSTOMERS HOME page</button>
   </div>
         }
       </div>
  )
}

export default Customer;





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























// import { Link } from 'react-router-dom';
// import { useState } from 'react';
// import adminService from '../services/admin.service ';
// // import { Navigate } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';


// const Customer = (props) => {
 

//     return (
//         <>
//             <div>.....</div>
//             <div>.....</div>
//             <div>.....</div>
//             <div>.....</div>
//             <h1>Welcome to the customer Page</h1>
//             <div>....</div>
//         <h1>Hello Customer </h1>
        

        

//         </>
//     );
// }
// export default Customer;