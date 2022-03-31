import React from "react";

const Item = () => {
  return (
    <div>
      <div class="timeline-container">
        <div class="content">
          <h3 className="job-title">
            Software Engineer
            <span>Mar 2021 ~ Present</span>
          </h3>
          <h4>Full-Time</h4>

          <p>
            1st Project - Nucleus (NCS)
            <br />
            Developed a healthcare system with a group of fresh grads to manage
            the beds and wards in a hospital using Angular 9 as front-end &
            Java/MSSQL as back-end during training & database
            <br /> <br /> 2nd Project - Traffic Information System (TIMS) -
            Police Technology Department (SPF) <br /> Implemented new FIN ID
            algorithm that ICA requires. Foreign (Identification Number (FIN)
            series with the prefix M) - Implemented Appeals functionality with
            Crystal Report in Microsoft Edge capabilities to generate fine
            payment and appeal letters. - Implemented batch job.
          </p>
        </div>
      </div>

      <div class="timeline-container">
        <div class="content">
          <h3 className="job-title">
            Software Engineer
            <span>Aug 2020 ~ Mar 2021</span>
          </h3>
          <h4>Great Eastern</h4>
          <p>
            Software Engineer developed Great Eastern's Insurannce product in
            Angular9 <br />
            <br /> Developed insurance products for Agent Flow, TravelSmart
            Premier(TSP), MaidGr8(AMG), HomeGr8 Plus(HGP). Generate enhancements
            and new datas in ElasticSearch with Kibana.
          </p>
        </div>
      </div>

      <div class="timeline-container">
        <div class="content">
          <h3 className="job-title">
            Programming Intern <br />
            <span>Mar 2017 - July 2017</span>
          </h3>
          <h4>Beyonics International (School's Internship)</h4>
          <p>
            Developed a manufacturing program with programming language called
            Visual Basic 6.0 with the integration of scanners to scan barcodes{" "}
            <br /> <br /> Developed a program called BIPL MQS Tracking system
            for the manufacturing & procurement department to help minimize the
            need for manual keying in datas.
          </p>
        </div>
      </div>

      {/* <div class="timeline-container">
        <div class="content">
          <h3 className="job-title">
            Networks Intern
            <span>Jun 2018 ~ Aug 2018</span>
          </h3>
          <h4>International Leadership University</h4>
          <p>
            My job involved providing IT support and troubleshooting network
            issues. I also helped design a new network architecture for the
            institution.
          </p>
        </div>
      </div> */}
    </div>
  );
};

export default Item;
