import * as React from 'react';
import chart from "../assets/mainChart.png"
import chart2 from "../assets/mainChart2.png"
import "./MainFlexItem.css"

export default function MainFlexItem() {
    return (

        <main className="MainContainer">
            <section className="FirstMain">

                <p>hello</p>
            </section>

            <section className="SecondMain">

                <div className="FirstCell">
                    <h2>Hello</h2>
                    <img className='chart1' src={chart} alt=""></img>
                    </div>

                    
                <div className="SecondCell">
                    <h2>Hello</h2>  
                    <img className='chart2' src={chart2} alt=""></img>
                    </div>
                
            </section>
        </main>


    );
}