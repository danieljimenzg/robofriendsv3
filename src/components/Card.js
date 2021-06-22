import React from 'react';

const Card = ({name, email, id}) => {
    return (
        <div className='bg-light dib br3 pa3 ma2 grow shadow-4 tc'>
            <img alt='robots' src={`https://robohash.org/${id}?set=set4`}/>
            <div>
            <h2>{name}</h2>
            <p>{email}</p>
        </div>
        </div>
    );
}

export default Card;