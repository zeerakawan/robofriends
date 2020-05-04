import React from 'react';

const Card = (props) => {
    const { id, name, email } = props;
    return (
        <div className='tc bg-light-green dib pa3 ma2 grow bw shadow-5' >
            <img src={`https://robohash.org/${id}`} alt='robots'/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;
