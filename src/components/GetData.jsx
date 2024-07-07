import React, { useState, useEffect } from "react";
import PrintData from "./PrintData";
import axios from 'axios';
import './getData.css';

const GetData = () => {
    const [harryPotterData, setHarryPotterData] = useState([]);
    const [page, setPage] = useState(0); // Track the current page
    const itemsPerPage = 10; // Define items per page

    useEffect(() => {
        getDataHandler(page);
    }, [page]);

    const getDataHandler = async (page) => {
        const response = await axios.get('https://hp-api.onrender.com/api/characters');
        const startIndex = page * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        setHarryPotterData(response.data.slice(startIndex, endIndex));
    };

    const handleNext = () => {
        setPage((prevPage) => prevPage + 1);
    };

    const handlePrevious = () => {
        if (page > 0) {
            setPage((prevPage) => prevPage - 1);
        }
    };

    return (
        <React.Fragment>
            <h1 className="title">Harry Potter Characters</h1>
            <div className='character'>
                {harryPotterData && harryPotterData.map((character, index) => (
                    <PrintData charData={character} key={index} />
                ))}
            </div>
            <div className="buttons">
                <button className="previous" onClick={handlePrevious} disabled={page === 0}>Previous</button>
                <button className="next" onClick={handleNext} disabled={harryPotterData.length < itemsPerPage}>Next</button>
            </div>
        </React.Fragment>
    );
};

export default GetData;
