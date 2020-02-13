import React from 'react';

const Card = ({name, email, id})=> {
    return (
        <div className="bg-light-green dib br3 pa3 ma3 grow bw2 shadow-5 tc">
            <img src={`https://robohash.org/${id}?100x10`} alt="robort"/>
           <div>
           <h2>{name}</h2>
            <p>{email}</p>
           </div>
        </div>
    )
};

export default Card;