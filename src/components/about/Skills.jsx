import React from "react";

const skillsContent = [
  { skillClass: "p75", skillPercent: "75", skillName: "HTML" },
  { skillClass: "p90", skillPercent: "90", skillName: "JAVASCRIPT" },
  { skillClass: "p70", skillPercent: "70", skillName: "CSS/Sass" },
  { skillClass: "p90", skillPercent: "90", skillName: "Bootstrap" },
  { skillClass: "p75", skillPercent: "75", skillName: "SEMANTIC-UI" },
  { skillClass: "p80", skillPercent: "80", skillName: "MATERIAL-UI" },
  { skillClass: "p90", skillPercent: "90", skillName: "WORDPRESS" },
  { skillClass: "p80", skillPercent: "80", skillName: "JQUERY" },
  { skillClass: "p90", skillPercent: "90", skillName: "NODE.JS" },
  { skillClass: "p80", skillPercent: "80", skillName: "REACT.JS" },
  { skillClass: "p85", skillPercent: "85", skillName: "MONGODB" },
  { skillClass: "p60", skillPercent: "60", skillName: "POSTGRESQL" },
  { skillClass: "p90", skillPercent: "90", skillName: "EXPRESS.JS" },
  { skillClass: "p75", skillPercent: "75", skillName: "AMAZON WEB SERVICES" },
  { skillClass: "p80", skillPercent: "80", skillName: "HEROKU" },
  { skillClass: "p90", skillPercent: "90", skillName: "GITHUB" },
  { skillClass: "p75", skillPercent: "75", skillName: "BITBUCKET" },
  { skillClass: "p75", skillPercent: "75", skillName: "MICROSOFT GRAPH" },
  { skillClass: "p75", skillPercent: "75", skillName: "MARIADB" },
  { skillClass: "p75", skillPercent: "75", skillName: "REST APIs" },
  { skillClass: "p75", skillPercent: "75", skillName: "AGILE METHODOLOGIES" },
  { skillClass: "p75", skillPercent: "75", skillName: "OAUTH" },
];

const Skills = () => {
  return (
    <>
      {skillsContent.map((val, i) => (
        <div className="col-6 col-md-3 mb-3 mb-sm-5" key={i}>
          <div className={`c100 ${val.skillClass}`}>
            <span>{val.skillPercent}%</span>
            <div className="slice">
              <div className="bar"></div>
              <div className="fill"></div>
            </div>
          </div>
          <h6 className="text-uppercase open-sans-font text-center mt-2 mt-sm-4">
            {val.skillName}
          </h6>
        </div>
      ))}
    </>
  );
};

export default Skills;
