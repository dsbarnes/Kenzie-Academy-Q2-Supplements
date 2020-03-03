import React, { Component } from 'react'
import { ProductConsumer } from '../context'
import { Link } from 'react-router-dom'
import { ButtonContainer } from './StyledComponents'

export default class Details extends Component {
    render() {
        return (
            <React.Fragment>
                <ProductConsumer>
                    {(value) => {
                        const {id, title, img, price, company, info, inCart} 
                            = value.detailProduct
                        return(
                            <div className="container py-5">
                                <div className="row">
                                    <div className="col-10 mx-auto text-center text-slanted text-blue by-5">
                                        <h1>{ title }</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="row">

                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                            <img src={img} alt="productImage" className="img-fluid" />
                                        </div>

                                        <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                                            <h2>Model : { title }</h2>
                                            <h4 className="text-title text-uppersace text-muted mt-3 mb-2">
                                                Made by : <span className="text-uppercase">
                                                    { company }
                                                </span>
                                            </h4>
                                            <h4 className="text-blue">
                                                <strong>
                                                    Price : <span>$</span>{ price }
                                                </strong>
                                            </h4>
                                            <p className="text-capitalized font-weight-bold mt-3 mb-0">
                                                Product Info :
                                            </p>
                                            <p className="text-muted lead">
                                                { info }
                                            </p>
                                        </div>
                                    </div>
                                    <Link to='/'>
                                        <ButtonContainer>
                                            Back to Products
                                        </ButtonContainer>
                                    </Link>
                                    <ButtonContainer
                                        cart
                                        disabled={ inCart ? true : false }
                                        onClick={ ()=> {
                                            value.handleAddToCart(id)
                                            value.openModal(id)
                                        }}
                                    >
                                        { inCart ? "in cart" : "add to cart"}
                                    </ButtonContainer>
                                </div>
                            </div>
                        )
                    }}
                </ProductConsumer>
            </React.Fragment>
        )
    }
}
