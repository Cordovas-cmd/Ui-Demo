import * as React from 'react';
import chart from "../assets/mainChart.png"
import chart2 from "../assets/mainChart2.png"
import "./MainFlexItem.css"
import MarkOptimization from './Charts/LineChart';
import ScatterClickNoSnap from './Charts/ScatterChart';
import BasicScatter from './Charts/ScatterChart';
export default function MainFlexItem() {
    return (

        <main className="MainContainer">
            <section className="FirstMain">

                <p>hello</p>
            </section>

            <section className="SecondMain">

                <div className="FirstCell">
                    <h2>Hello</h2>
                    {/* <img className='chart1' src={chart} alt=""></img> */}
                    <MarkOptimization  className='chart1'/>
                    </div>

                    
                <div className="SecondCell">
                    <h2>Hello</h2>  
                    {/* <img className='chart2' src={chart2} alt=""></img> */}
                    <BasicScatter />
                    </div>
                
            </section>
        </main>


    );
}