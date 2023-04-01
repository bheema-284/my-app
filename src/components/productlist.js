import React from "react";
import '../index.css'
import { Button } from 'react-bootstrap';
function ProductList(props) {   
    const {data}=props;
    return (
        <div className="cards">
            {data.map((item, i) => {
                return (
                   <div key={i} className="card">
                     <div className="card-columns">
                            <img className="image" src={item.image} alt="Card image cap" />
                            <div className="card-body">
                                <h5 className="card-title">{item.title}</h5>
                                <p className="texsss">{item.category}</p>
                            </div>
                            <div className="pricesss">
                            <p className="texsss h6">{"Rupess: "}{item.price}</p>
                            <p className="texsss h6">{item.rating.rate}</p>
                            </div>
                             <div className="buttons">
                        <Button variant="primary">Buy</Button>
                        <Button variant="success">Add Cart</Button>
                        </div>
                        </div>
                       
                    </div>
                );
            })}
        </div>
    );
}

export default ProductList;
