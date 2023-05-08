import React from "react";

const experienceContent = [
  {
    year: "2021 - Present",
    position: "Full Stack Engineer",
    compnayName: "HMP Metrics",
    details: 
      [
        `Streamlined user experience by integrating full stack authentication using AWS Cognito, React.js, and Express.js, enhancing security and trust within distributed systems`,
        `Boosted user retention, engagement, and renewals by deploying automated email campaigns via AWS SES and Node.js resulting in a 70% increase in subscription renewals.`,
        `Expanded company's digital presence by developing and maintaining 20+ marketing and lead generation websites using HTML, CSS, and JavaScript. `,
        `Improved IT efficiency and support for 150+ employees through installation, deployment, and management of hardware and software.`,
        `Developed a customizable ticketing system using React (frontend) and Express (backend), accommodating various facility technology footprints, allowing 400+ users to submit tickets and reducing resolution time by 80%.`
      ]
  },
  {
    year: "2020 - 2020",
    position: "Software Engineering Fellow ",
    compnayName: "General Assembly ",
    details: 
      [
        `Acquired practical experience and subject matter expertise by completing an accelerated program, creating four full stack applications using cutting-edge technologies and best practices, including Javascript, Node.js, React, REST APIs, Non-Relational and Relational and various other frameworks for building systems. `,
        `Fostered a collaborative work environment by utilizing Git and Github for efficient version control and team coordination. `,
        `Accelerated project delivery through Agile methodologies within a SCRUM environment, focusing on customer-facing web application development.`
      ]
  },
  {
    year: "2019 - 2021",
    position: "Partner",
    compnayName: "Reno Exclusive Assets LLC",
    details:
      [
        `Optimized sales performance by devising a tailored process workflow and sales funnel, driving business growth in alignment with specific KPIs. `,
        `Increased operational efficiency by recruiting, training, and managing virtual assistants to seamlessly integrate within company processes.`
      ]
  },
  {
    year: "2014 - 2017",
    position: "Project Manager",
    compnayName: "Strategic Capital Enterprises ",
    details:
      [
        `Effectively managed project resources by overseeing budgeting, planning, and execution of real estate projects, working closely with business stakeholders. `,
        `Ensured timely project completion and minimized delays by coordinating permitting, project phases, materials, financing, and payroll.`
      ]
  }
];

const Experience = () => {
  return (
    <ul>
      {experienceContent.map((val, i) => (
        <li key={i}>
          <div className="icon">
            <i className="fa fa-briefcase"></i>
          </div>
          <span className="time open-sans-font text-uppercase">{val.year}</span>
          <h5 className="poppins-font text-uppercase">
            {val.position}
            <span className="place open-sans-font">{val.compnayName}</span>
          </h5>
          <p className="open-sans-font">{val.details.map((det, i) => (
            <ul key={i}>
              <li style={{ marginBottom: '.2rem' }}>{det}</li>
            </ul>
          ))}</p>
        </li>
      ))}
    </ul>
  );
};

export default Experience;
