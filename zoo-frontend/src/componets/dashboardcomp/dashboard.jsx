import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import '../logincomp/login.css'

export default class dashboard extends Component {
  render() {
    return (
      <div>
         <div class=" text-black text-center justify-content-center">
     <h1 className='algo'>Welcome folks </h1>
     <Link to={"/"}><h4>log out</h4>
     </Link>
     <div className="dashboard container"></div>
  
     <div className="cardcontainer row justify-content-center">
    
           
            <div className="card2 col-sm-3 ">
                    <div className="justify-content-center p-5">
                        <Link to={"/animal"}><h2>Animals details</h2></Link>
                    </div>
                </div>  
       
                <div className="card2 col-sm-3 ">
                    <div className="justify-content-center p-5">
                        <Link to={"/manageticket"}><h2>manage tickets</h2></Link>
                    </div>
                </div> 
                <div className="card2 col-sm-3 ">
                    <div className="justify-content-center p-5">
                        
                        <Link to={"/bookticket"}><h2>book tickets</h2></Link>
                    </div>
                </div>
                <div className="card2 col-sm-3 ">
                    <div className="justify-content-center p-5">
                      
                        <Link to={"/search"}> <h2>search ticket by ticket id</h2></Link>
                    </div>
                </div>
                <div className="card2 col-sm-3 ">
                    <div className="justify-content-center p-5">
                        
                        <Link to={"/report"}><h2>get report</h2></Link>
                    </div>
                </div>
                <div className="card2 col-sm-3 ">
                    <div className="justify-content-center p-5">
                        
                        <Link to={"/holidays"}><h2>manage holidays</h2></Link>
                    </div>
                </div>
               
            
                
                


       

    </div>
    </div>
      </div>
    )
  }
}
