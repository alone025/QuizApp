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
    img: "src/assets/fireworks (1) 3.png",
    ids: "sml",
  },
  {
    id: 2,
    name: "fm2",
    img: "src/assets/fireworks (1) 1.png",
    ids: "sml",
  },
  {
    id: 3,
    name: "fm3",
    img: "src/assets/fireworks 2.png",
    ids: "sml",
  },
  {
    id: 4,
    name: "fm4",
    img: "src/assets/fireworks 1.png",
    ids: "sml",
  },
  {
    id: 5,
    name: "fm5",
    img: "src/assets/fireworks 3.png",
    ids: "sml",
  },
  {
    id: 6,
    name: "fm6",
    img: "src/assets/fireworks (1) 2.png",
    ids: "sml",
  },
];

const Result = () => {
  const homeNavigate = () => {
    window.location.href = "/";
  };

  return (
    <div className="container TotalPage">
      <div className="contentPage">
        <div className="logo-img">
          <img src={Kubik} alt="" />
        </div>
        <div className="resLogo">
          <h2>Congretulation</h2>
          <p>Congretulation you are good at History.Yo can take exam</p>
        </div>
        <div className="resultQuiz">
          <p>
            <span>
              <img src={alChiroq} alt="" />
              Total question
            </span>
            <span>10</span>
          </p>
          <p>
            <span>
              <img src={trues} alt="" />
              Correct answear
            </span>
            <span>08</span>
          </p>
          <p>
            <span>
              <img src={falses} alt="" />
              Incorrect answear
            </span>
            <span>02</span>
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
            Yakunlash
          </Button>
        </div>
        {imgs.map((image) => (
          <img
            key={image.id}
            src={image.img}
            className={image.name}
            id={image.ids}
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
