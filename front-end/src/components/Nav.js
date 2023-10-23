import React from 'react';
import{Link, useNavigate } from 'react-router-dom';



const Nav=()=>{
    const auth=localStorage.getItem("user");
    const logout=()=>{
const navigate=useNavigate();
        localStorage.clear();
        navigate('/signup');
    }
    
    return(
        <div>
            <img alt='logo'
            className='logo' src='https://img.freepik.com/premium-vector/abstract-modern-ecommerce-logo-design-colorful-gradient-happy-shopping-logo-template_467913-990.jpg' />
           {auth ? <ul className='nav-ul'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/add">Add Product</Link></li>
                <li><Link to="/update">Update Products</Link></li>
              
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick ={logout} to="/SignUp">Logout( {JSON.parse(auth).name})</Link></li>
   
            </ul>
            :
            <ul className='nav-ul nav-right' >
 <li><Link to="/signup">SignUp</Link></li>
        <li> <Link to="/login">Login</Link></li>
            </ul>
            }
        </div>
    )
}
export default Nav;