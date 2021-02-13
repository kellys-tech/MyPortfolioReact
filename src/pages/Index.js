import React from "react";
import image from "../assets/20201109_114240.jpg";

function Index() {
  return (
  <div>
    <div className="container">
    <div className="row">
      <div className=" col-xs-12">
        <h4>About Me</h4>
      </div>
    </div>
    <section>
      <div className="row">
        <div className="col-lg-12 col-xs-12">
          <img src= {image} width="150" height="150" alt="Kelly Smith"
            className="img-thumbnail img-responsisve float-left mr-2" />
          <p>
            I am an experienced and versatile Information Technology professional specializing in Business Analysis, Project Management and Software Testing. I have expertise working within complex enterprise web applications, mobile and desktop platforms plus SOA based web services such as Rest and SOAP type APIs.
            
            I have significant experience within multiple technology disciplines including software testing, quality assurance, requirements gathering, technical documentaion, data analysis, release management and project management.

            My specialization focuses on testing custom software, coordination of test efforts, defect documentation, technical documentation, SDLC management, communication, sprint planning, user stories and working with developers, testers, users and project managers to ensure the delivery of high-quality software products to business partners based on customer needs.
          </p>
        </div>
      </div>
    </section>
  </div>
</div>
  );
}

export default Index;
