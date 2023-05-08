import React from "react";

const personalInfoContent = [
  { meta: "first name", metaInfo: "Akeem" },
  { meta: "last name", metaInfo: "Ogle" },
  // { meta: "Age", metaInfo: "27 Years" },
  // { meta: "Nationality", metaInfo: "Tunisian" },
  { meta: "Freelance", metaInfo: "Available" },
  { meta: "Location", metaInfo: "Tampa, FL" },
  { meta: "phone", metaInfo: "813.331.5419" },
  { meta: "Email", metaInfo: "akeemogle@gmail.com" }
  // { meta: "Skype", metaInfo: " steve.milner" },
  // { meta: "langages", metaInfo: "French, English" },
];

const PersonalInfo = () => {
  return (
    <ul className="about-list list-unstyled open-sans-font">
      {personalInfoContent.map((val, i) => (
        <li key={i}>
          <span className="title">{val.meta}: </span>
          <span className="value d-block d-sm-inline-block d-lg-block d-xl-inline-block">
            {val.metaInfo}
          </span>
        </li>
      ))}
    </ul>
  );
};

export default PersonalInfo;
