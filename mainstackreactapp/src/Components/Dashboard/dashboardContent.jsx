import React, { useEffect, useState } from "react";
import DoughnutChart from "../Charts/doughnut";
import axios from 'axios';
import './dashboard.css';
import DoughnutContent from "../Charts/completeDought";
import LineGraph from "../Charts/lineChart";
import Button from "./buttonComponent";
let dates={};
let values={};
function DashboardContent() {

    const [response, setResponse] = useState(null);
    const [stateDates, setDates] = useState(dates);
    const [stateValues, setValues] = useState(values);

    useEffect(() => {
        axios.get('https://fe-task-api.mainstack.io/')
            .then(res => setResponse(res.data))
            .catch(err => console.log(err));
    }, []);
    const colorsList = [
        "#599EEA",
        "#844FF6",
        "#0FB77A",
        "#FAB70A",
        "#F09468"
    ];
    const imageList = [
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682519700/Country_Nigeria_Style_Flag_Radius_On_k1yywj.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682519700/Country_Andorra_Style_Flag_Radius_On_tcbimx.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682519700/Country_Netherlands_Style_Flag_Radius_On_ox3nmk.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682519700/Country_Andorra_Style_Flag_Radius_On_tcbimx.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682519700/Country_United_States_of_America_Style_Flag_Radius_On_ttscsi.svg"
    ];
    const socialList = [
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682525137/Google_g0ukpb.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682524459/Instagram_twjiyg.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682524460/Vector_cdjrux.svg",
        "https://res.cloudinary.com/dk80ynx1w/image/upload/v1682524459/5296501_linkedin_network_linkedin_logo_icon_1_o5ijub.svg",
    ];

    if (response) {
        const countriesList = response.top_locations.map((location, index) => {
            return {
                image: imageList[index % imageList.length],
                text: location.country,
                percentage: location.percent,
                color: colorsList[index % colorsList.length]
            }});
        const souceList = response.top_sources.map((location, index) => {
            return {
                image: socialList[index % socialList.length],
                text: location.source,
                percentage: location.percent,
                color: colorsList[index % colorsList.length]
            }});
        const graphData = response.top_locations;
        const fullResponse = response.graph_data.views;
        const labels = graphData.map((location) => location.country);
        const data = graphData.map((location) => location.percent);
        dates = Object.keys(fullResponse).map((date) => {
            const d = new Date(date);
            const monthNames = [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec',
            ];
            const formattedDate = `${d.getDate()} ${monthNames[d.getMonth()]}`;
            return formattedDate;
        });

        values = Object.values(fullResponse);
        const handleFirstClick = () => {
            setDates([dates[0]]);
            setValues([values[0]]);
        };
        const handleSecondClick = () => {
            const reducedDates = dates.slice(0, 3);
            const reducedValues = values.slice(0, 3);
            setDates(reducedDates);
            setValues(reducedValues);
        };
        const handlethirdClick = () => {
            const reducedDates = dates.slice(0, 7);
            const reducedValues = values.slice(0, 7);
            setDates(reducedDates);
            setValues(reducedValues);
        };
        const handleFourthClick = () => {
            const reducedDates = dates.slice(0, 30);
            const reducedValues = values.slice(0, 30);
            setDates(reducedDates);
            setValues(reducedValues);
        };
        const allTimeClick = () => {
            const reducedDates = dates.slice(0, 30);
            const reducedValues = values.slice(0, 30);
            setDates(reducedDates);
            setValues(reducedValues);
        };



        const graphData_ = response.top_sources;
        const labels_ = graphData_.map((source_) => source_.source);
        const data_ = graphData_.map((source_) => source_.percent);
        return (
            <div>
                <div className='Header'>
                    Dashboard
                    <div className='greeting'>
                        Good morning, Blessing ⛅️<br/>
                        <span>
                            Check out your dashboard summary.
                        </span>
                    </div>
                    <div className='buttons'>
                        <Button days='1 Day' onClick={handleFirstClick}/>
                        <Button days='3 Days' onClick={handleSecondClick}/>
                        <Button days='7 Days' onClick={handlethirdClick}/>
                        <Button days='30 Days' onClick={handleFourthClick}/>
                        <Button days='All Time' onClick={allTimeClick}/>
                        <Button days='Custome Date' onClick={allTimeClick}/>
                    </div>

                </div>
                <div className='lineChartEnclosing'>
                    <div className='topLine'>
                        Page Views<br/>
                        <span className='small'>
                        All time<br/>
                    </span>
                        <div className='big'>
                            500
                        </div>
                    </div>
                    <LineGraph xValues={stateDates} yValues={stateValues} />
                </div>
                <div className='othercontent'>
                    <DoughnutContent colorsList={colorsList} imageList={imageList} data={data} labels={labels} countriesList={countriesList} header='Top Locations'/>
                    <DoughnutContent colorsList={colorsList} data={data_} labels={labels_} countriesList={souceList} header='Top Referral Sources'/>
                </div>
            </div>

        );
    }
    return <div>Loading...</div>;
}

export default DashboardContent;
