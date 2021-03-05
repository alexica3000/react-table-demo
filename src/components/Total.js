import React, {Component} from 'react';

class Total extends Component {
    render() {
        const {totalItems} = this.props;

        return (
            <div>Total items: <b>{totalItems}</b></div>
        )
    }
}

export default Total;
