import './card.css';

export const Card1 = (props) => {
    return (
        <div className='card'>
            <h3>{props.title}</h3>
            {props.children}
            <p>{props.descricao}</p>
        </div>
    );
};
