import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class DecrementButton extends Component {
    render() {
        return (
            <div>
                <Link to="/cart"><i className="material-icons" onClick={()=>{this.props.handleRemove(this.props.data)}}>remove</i></Link>
            </div>
        )
    }
}

export default DecrementButton