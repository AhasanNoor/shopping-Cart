import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class IncrementButton extends Component {
    render() {
        return (
            <div>
                <Link to="/cart"><i className="material-icons" onClick={()=>{this.props.handlerAdd(this.props.data)}}>add</i></Link>
            </div>
        )
    }
}

export default IncrementButton