import React from "react";
import Country from "../Country/Country";
import './countrylist.css';

class CountryList extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <div className='countrylist'>
                {
                    this.props.stats.map(country => <Country key={country.CountryCode} stats={country}/>)
                }
            </div>
        )
    }
}

export default CountryList