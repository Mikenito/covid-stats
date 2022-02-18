import React from "react";
import './searchbox.css';

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <input
                    type='search'
                    className='search'
                    placeholder={this.props.placeholder}
                    onChange={this.props.handleChange}
            />
        )
    }
}
export default SearchBox;