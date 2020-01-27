import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Total from './Total'
import IncrementButton from '../components/IncrementButton'
import DecrementButton from '../components/DecrementButton'
import { deleteItem, addQuantity,removeQuantity } from './actions/cartActions'

class Cart extends Component {

    handleAdd = (id) =>{
        this.props.addQuantity(id);
    }

    handleRemove = (id) =>{
        this.props.removeQuantity(id);
    }

    handleDelete = (id) =>{
        this.props.deleteItem(id);
    }

    render() {
        let addedItems = this.props.items.length ? (
            this.props.items.map(item=>{
                return(
                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img"> 
                            <img style={{width: '100px', display: 'inline-block', float: 'left', marginRight: '50px'}} src={item.img} alt={item.img} className=""/>
                        </div>
                            
                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p><b>Price: {item.price}$</b></p> 
                            <p>
                                <b>Quantity: {item.quantity}</b> 
                            </p>
                            <div className="add-remove">
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleRemove(item.id)}}>remove</i></Link>
                                <Link to="/cart"><i className="material-icons" onClick={()=>{this.handleAdd(item.id)}}>add</i></Link>
                            </div>
                            <button className="waves-effect waves-light btn pink remove" onClick={()=>{this.handleDelete(item.id)}}>Remove</button>
                        </div>
                    </li>                        
                )
            })
        ):(
            <p className="center">Cart id empty...</p>
        )
        return (
            <div className="container">
                <div className="cart">
                    <ul className="collection">
                        {addedItems}
                        <Total />
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        items: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        addQuantity: (id) =>{dispatch(addQuantity(id))},
        removeQuantity: (id) =>{dispatch(removeQuantity(id))},
        deleteItem: (id) =>{dispatch(deleteItem(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Cart)