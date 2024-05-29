import React from 'react';
import { Card1 } from "./card1";

const cardTitles = ['T1', 'T2', 'T3'];

export const Cards = () => {
    return (
        <div>
            <h1>Meus Cards</h1>
            <div>
                {
                    cardTitles.map((cardTitle, index) => (
                        <Card1 key={index} title={cardTitle} descricao={'esse é um elemento de teste'}>
                        </Card1>
                    ))
                }
            </div>
        </div>
    );
};
