import React from "react";
import Rating from "./Rating";
import {Link} from "react-router-dom"
function Products(props){


    const moveTODetailsScreen = (id) => {
        console.log(id);
    }
 
    return(
        <React.Fragment>
           <div className="row center">
               {props.products.map((prod)=>(
                   <div className="card" key={prod._id}>
                       <Link  to={`/details/${prod._id}`}>
                            <img src={prod.image} className="medium" onClick ={()=>{moveTODetailsScreen(prod._id)}}></img>
                       </Link>
                       
                       <div className="card-body">
                           <h2>{prod.name}</h2>
                           <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
                           <div className="price">
                               Price $ {prod.cost}
                           </div>
                       </div>
                   </div>
               ))}
           </div>
        </React.Fragment>

        // <React.Fragment>
        //     <p style={{color: 'red'}}>{JSON.stringify(props.products)}</p>
        // </React.Fragment>
    )
}
export default Products;