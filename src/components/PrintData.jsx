import React from "react";
import './printData.css';

const PrintData = ({ charData }) => {
    return (
        <React.Fragment>
            <div className='character-card'>
                <img src={charData.image} alt={charData.name} />
                <div className="card-details">
                    <h1 className="name">{charData.name}</h1>
                    <p className="status">{charData.house}</p>
                    <p className="species">{charData.species}</p>
                    <p className="last-seen">Actor: {charData.actor}</p>
                    <p className="ancestry">Ancestory: {charData.ancestry}</p>
                </div>
            </div>
        </React.Fragment>
    );
};

export default PrintData;
