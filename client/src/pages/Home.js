import React from "react";
import { useNavigate } from "react-router-dom";
import DefaultLayout from "../components/DefaultLayout";
import template1 from "../resources/templates/template1.png";
import template2 from "../resources/templates/template2.png";

function Home() {
  const navigate = useNavigate();
  const templates = [
    {
      title: "Simple Resume",
      img: template1,
    },
    {
      title: "HIghlighted Sections Resume",
      img: template2,
    },
  ];
  return (
    <DefaultLayout>
      <div className="row home">
        {templates.map((t, index) => {
          return (
            <div className="col-md-4">
              <div className="template">
                <img
                  src={t.img}
                  height="400"
                  alt="Simple Resume"
                  style={{ width: "100%" }}
                />
                <div className="text">
                  <p>{t.title}</p>
                  <button onClick={() => navigate(`/templates/${index + 1}`)}>
                    TRY
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </DefaultLayout>
  );
}

export default Home;
