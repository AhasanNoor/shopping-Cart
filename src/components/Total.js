import React, { Component } from 'react'
import { connect } from 'react-redux'

class Total extends Component {
    render() {
        return (
            <div>
                <div className="container">
                    <div className="collection">
                        <div className="collection-item">
                            <li className="collection-item"><b>Total: {this.props.total} $</b></li>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {
        addedItems: state.addedItems,
        total: state.total
    }
}

export default connect(mapStateToProps)(Total)