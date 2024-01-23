import Kubik from "../../assets/yellow_trophy_cup_winner_success_champion_icon_sign_or_symbol_3d_illustration-removebg-preview 1.png";
import alChiroq from "../../assets/question 1.png";
import trues from "../../assets/accept 1.png";
import falses from "../../assets/wrong 2.png";
import { Button } from "@mui/material";

import "./total.scss";

const imgs = [
  {
    id: 1,
    name: "fm1",
    img: "src/assets/fireworks(1)3.png",
    ids: "sml",
  },
  {
    id: 2,
    name: "fm2",
    img: "src/assets/fireworks(1)1.png",
    ids: "sml",
  },
  {
    id: 3,
    name: "fm3",
    img: "src/assets/fireworks2.png",
    ids: "sml",
  },
  {
    id: 4,
    name: "fm4",
    img: "src/assets/fireworks1.png",
    ids: "sml",
  },
  {
    id: 5,
    name: "fm5",
    img: "src/assets/fireworks3.png",
    ids: "sml",
  },
  {
    id: 6,
    name: "fm6",
    img: "src/assets/fireworks(1)2.png",
    ids: "sml",
  },
];

const Result = ({ data, answers }) => {
  const homeNavigate = () => {
    window.location.href = "/";
  };

  return (
    <div className="container TotalPage">
      <div className="contentPage">
        <div className="logo-img">
          {data - answers > answers ? "" : <img src={Kubik} alt="" />}
        </div>
        <div className="resLogo">
          {data - answers > answers ? (
            <h2>Bad result</h2>
          ) : (
            <h2>Congretulation</h2>
          )}
          {data - answers > answers ? (
            <p>Unfortunately, your results are very low. Try again</p>
          ) : (
            <p>
              Congratulations. You have successfully passed the tests. Dont stop
              learning
            </p>
          )}
        </div>
        <div className="resultQuiz">
          <p>
            <span>
              <img src={alChiroq} alt="" />
              Total question
            </span>
            <span>{data}</span>
          </p>
          <p>
            <span>
              <img src={trues} alt="" />
              Correct answear
            </span>
            <span>
              {" "}
              {answers < 10 ? 0 : ""}
              {answers}
            </span>
          </p>
          <p>
            <span>
              <img src={falses} alt="" />
              Incorrect answear
            </span>
            <span>
              {data - answers < 10 ? 0 : ""}
              {data - answers}
            </span>
          </p>
        </div>
        <div className="btn-div">
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              homeNavigate();
            }}
          >
            Finish Test
          </Button>
        </div>
        {data - answers > answers ? (
          <div className=""></div>
        ) : (
          <>
            {imgs.map((image) => (
              <img
                key={image.id}
                src={image.img}
                className={image.name}
                id={image.ids}
              />
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default Result;
