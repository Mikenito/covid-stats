import React from "react";
import './country.css'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import {Button, Popover} from "react-bootstrap";

class Country extends React.Component {
    render() {
        return (
            <div>
                <div className='country'>
                    <img src={`https://countryflagsapi.com/png/${this.props.stats.CountryCode}`}
                         alt={this.props.stats.Country} className='image'/>
                    <h1>{this.props.stats.Country}</h1>
                    <div className='describe'>
                        <p>{`Active: ${this.props.stats.Active}`}</p>
                        <p>{`Confirmed: ${this.props.stats.Confirmed}`}</p>
                        <p>{`Deaths: ${this.props.stats.Deaths}`}</p>
                        <p>{`Recovered: ${this.props.stats.Recovered}`}</p>
                    </div>
                </div>
            </div>
        )
    }

    constructor(props) {
        super(props);
        this.state = {
            target: null,
            show: false
        }
    }
}

export default Country;