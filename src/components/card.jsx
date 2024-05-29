// Rename your file to card.jsx or card.tsx if you're using TypeScript
import React, { Component } from 'react';
import './card.css'

class Card extends Component {
    render() {
        return (
            <div className='card' >
                <h3>{this.props.title}</h3>
                <p>esse é um elemento js</p>
            </div>
        );
    }
}

Card.defaultProps = {
    title: 'card'
}


export default Card;
