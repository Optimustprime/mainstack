import React, { useEffect, useState } from "react";
import DoughnutChart from "../Charts/doughnut";
import axios from 'axios';
import Country from "../Dashboard/countries";

function DoughnutContent(props) {
    const [response, setResponse] = useState(null);

    useEffect(() => {
        axios.get('https://fe-task-api.mainstack.io/')
            .then(res => setResponse(res.data))
            .catch(err => console.log(err));
    }, []);

    if (response) {
        return (
                <div className='content'>
                    <div className='head'>
                        <div className='header'>{props.header}</div>
                        <div className='report'>View full reports</div>
                    </div>
                    <div className='collection'>
                        <div>
                            {props.countriesList.map((country, index) => (
                                <Country key={index} image={country.image} text={country.text} percentage={country.percentage} color={country.color} />
                            ))}
                        </div>
                        <div className='doughnutContainer'>
                            <DoughnutChart labels={props.labels} data={props.data} label='Top Locations'/>
                        </div>
                    </div>
                </div>
        );
    }

}

export default DoughnutContent;
