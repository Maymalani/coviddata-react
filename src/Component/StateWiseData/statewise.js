import React, { useEffect, useState } from "react";

const Statewise = () => {

    const[data , setData] = useState([]);

    const getCovidData = async () => {
        const res = await fetch("https://data.covid19india.org/data.json");
        const actualData = await res.json();
        console.log(actualData);
        setData(actualData.statewise);
    };

    useEffect(() => {
        getCovidData();
    },[]);

    console.log(data);

    return(
        <>
            <div className="container-fluid mt-5">
                <div className="main-heading">
                    <h1 className="head"><span className="font-weight-bold">INDIA</span> COVID-19 Dashboard</h1>
                </div>
            </div>

            <div className="table-responsive">
                <table className="table table-hover">
                    <thead className="thead-dark">
                        <tr>
                            <th>State</th>
                            <th>Confirmed</th>
                            <th>Recovered</th>
                            <th>Deaths</th>
                            <th>Active</th>
                            <th>Last Updated</th>
                        </tr>
                        {
                            data.map((curElem , ind) => {
                                return(
                                    <tr key={ind}>
                                        <td>{curElem.state}</td>
                                        <td>{curElem.confirmed}</td>
                                        <td>{curElem.recovered}</td>
                                        <td>{curElem.deaths}</td>
                                        <td>{curElem.active}</td>
                                        <td>{curElem.lastupdatedtime}</td>
                                    </tr>
                                )
                            })
                        }
                    </thead>
                </table>
            </div>
        </>
    );
};

export default Statewise;