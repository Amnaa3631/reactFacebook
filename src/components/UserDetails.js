import React, { useEffect, useState } from 'react'
import '../css/profile.css';
import SpinnerComp from './SpinnerComp';

const UserDetails = () => {
    const [data, setData] = useState(null);
    const [loader, setLoader] = useState(false);

    async function fetchData() {
        setLoader(true);
        let api_key = "6AbGM8eHgOn9PQXLeUKwmkqmc3rEEu28TJLM61dX";
        const res = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${api_key}`);
        let data = await res.json();
        setTimeout(() => {
            if (data != null) {
                setData(data);
                setLoader(false);
            }

        }, 2000);
    }

    useEffect(() => {
        fetchData()
    }, []);

    console.log(data);
    return (
        <div className='row banner bg-secondary' style={{ background: `url(${data != null && data?.hdurl})` }}>
            {data == null && <SpinnerComp />}
            <div className='col-12'>
                <h1 className='text-center text-light'>AMNA</h1>
            </div>
        </div>
    )
}

export default UserDetails
