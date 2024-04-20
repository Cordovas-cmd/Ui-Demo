import * as React from 'react';
import "./RightSidebar.css"
import brain from "../assets/brain.png"
import SimpleBarChart from './Charts/BarChart';


export default function RightSideBar() {


    return (
<>
<section className="RightSidebar"> 

  <section className="firstBox">
      <p>Test</p>
      <SimpleBarChart />
  </section>
  <section className="secondBox">
      <p>Test</p>
  </section>
  <section className="thirdBox">
      <p>Test</p>
  </section>
  <section className="fourthBox">
      <p>Test</p>
  </section>

</section>
</>

    );
}