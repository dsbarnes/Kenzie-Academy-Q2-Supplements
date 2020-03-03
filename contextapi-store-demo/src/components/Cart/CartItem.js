import React, { Component } from 'react'

export default class CartItem extends Component {
    render() {
        const { item, value }  = this.props
        const { id, title, img, price, total, count } = item
        const {increment, decrement, removeItem} = value

        return (
            <React.Fragment>
                <div className="row my-1 text-capitalized text-center">
                    <div className="col-10 mx-auto col-lg-2">
                        <img 
                            src={img} 
                            style={{width: '5rem', height: "5rem"}}
                            className="img-fluid"
                            alt="cartItem"
                        />
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">
                            product : </span>
                            { title }
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">
                            price : </span>
                            { price }
                    </div>
                    <div className="col-10 mx-auto col-lg-2 my-2 my-lg-0">
                        <div className="d-flex justify-content-center">

                            <span className="btn btn-dark mx-1"
                                onClick={ () => decrement(id) }>
                                -
                            </span>
                            
                            <span className="btn btn-dark mx-1">{count}</span>
                            
                            <span className="btn btn-dark mx-1"
                                onClick={ () => increment(id) }>
                                +
                            </span>
                        </div>
                    </div>
                    <div className="col-10 mx-auto col-lg-2"
                        onClick={ () => {removeItem(id)}}>
                        <i className="fa fa-trash"></i>
                    </div>
                    <div className="col-10 mx-auto col-lg-2">
                        <span className="d-lg-none">
                            total : </span>
                            <strong>
                                item total : $ { total }
                            </strong>
                    </div>
                    
                    
                    
                    
                    
                    <div className="col-10 mx-auto col-lg-2"></div>

                    <div className="col-10 mx-auto col-lg-2"></div>



                    
                </div>
            </React.Fragment>
        )
    }
}
