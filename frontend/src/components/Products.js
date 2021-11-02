import React from "react";
import Rating from "./Rating";
function Products(props){
    return(
        // <React.Fragment>
        //    <div className="row center">
        //        {props.products.map((prod)=>(
        //            <div className="card" key={prod._id}>
        //                <img src={prod.image} className="medium"></img>
        //                <div className="card-body">
        //                    <h2>{prod.name}</h2>
        //                    <Rating rating={prod.rating} numReviews={prod.numReviews}></Rating>
        //                    <div className="price">
        //                        Price $ {prod.cost}
        //                    </div>
        //                </div>
        //            </div>
        //        ))}
        //    </div>
        // </React.Fragment>

        <React.Fragment>
            <p style={{color: 'red'}}>{JSON.stringify(props.products)}</p>
        </React.Fragment>
    )
}
export default Products;