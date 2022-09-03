import React from "react";
import "../../resources/css/templates.css";

function Template2() {
  const user = JSON.parse(localStorage.getItem("vikiresume-user"));
  return (
    <div className="template1-parent">
      <div className="top d-flex flex-column">
        <h1>
          {user.firstName.toUpperCase()} {user.lastName.toUpperCase()}
        </h1>
        <div>
          <p>{user.email}</p>
          <p>{user.address}</p>
          <p>{user.mobileNumber}</p>
        </div>
      </div>
      <div className="divider mt-3" />
      <div className="divider mt-1" />
      <div className="objective mt-3">
        <h3 className="t2-style">Objective</h3>
        <hr />
        <p>{user.carrierObjective}</p>
      </div>
      <div className="divider mt-3" />
      <div className="education mt-3">
        <h3 className="t2-style">Education</h3>
        <hr />
        {user.education.map((e) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{e.range} : </b>
              </h6>
              <p>
                <strong>{e.qualification}</strong> with{" "}
                <strong>{e.percentage}%</strong> in {e.institution}
              </p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-3" />
      <div className="education mt-3">
        <h3 className="t2-style">Experience</h3>
        <hr />
        {user.experience.map((exp) => {
          return (
            <div className="d-flex align-items-center">
              <h6 style={{ width: 120 }}>
                <b>{exp.range} : </b>
              </h6>
              <p>
                <strong>{exp.company}</strong> in <strong>{exp.place}</strong>
              </p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-3" />
      <div className="mt-3">
        <h3 className="t2-style">Projects</h3>
        <hr />
        {user.projects.map((p) => {
          return (
            <div className="d-flex flex-column">
              <h6>
                <b>
                  {p.title} [{p.range}]
                </b>
              </h6>
              <p>{p.description}</p>
            </div>
          );
        })}
      </div>
      <div className="divider mt-3" />
      <div className="mt-3">
        <h3 className="t2-style">Skills</h3>
        <hr />
        {user.skills.map((s) => {
          return <p>{s.technology}</p>;
        })}
      </div>
    </div>
  );
}

export default Template2;
