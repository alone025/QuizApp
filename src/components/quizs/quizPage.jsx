import back from "../../assets/right-arrow (2) 1.png";
import clock from "../../assets/clock (1) 1.png";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import acc from "../../assets/accept 1.png";
import err from "../../assets/wrong 2.png";
import ruler from "../../assets/ruler 1.png";
import pencil from "../../assets/pencil 1.png";
import book from "../../assets/book 1.png";
import pen from "../../assets/pen 1.png";
import "./quiz.scss";
import { useEffect, useState } from "react";

const options = [
  {
    id: 1,
    text: "Alisher Navoiy",
    visible: true,
  },
  {
    id: 2,
    text: "Chingisxon",
    visible: false,
  },
  {
    id: 3,
    text: "Amir Temur",
    visible: false,
  },
];

const QuizPage = ({ tem, nump, asnw }) => {
  const [time, setTime] = useState(tem); // 40 minutes in seconds

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [time]);

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(
      2,
      "0"
    )}`;
  };

  const backnavigate = () => {
    window.location.href = "/";
  };

  return (
    <div className="container QuizPage">
      <div className="topBar">
        <Button
          style={{
            background: "transparent",
            border: "none",
            lineHeight: "0",
            borderRadius: "10px",
          }}
          onClick={() => {
            backnavigate();
          }}
        >
          <div className="backIcon">
            <img src={back} alt="" />
          </div>
        </Button>
        <div className="listTab">
          <p>01 of {nump}</p>
        </div>
        <div className="timeTab">
          <img src={clock} alt="" />
          {formatTime(time)}
        </div>
      </div>
      <div className="bottomBar">
        {/*  */}

        <img src={book} alt="" className="imh3" />
        <img src={pen} alt="" className="imh4" />
        <img src={ruler} alt="" className="imh1" />
        <img src={pencil} alt="" className="imh2" />

        {/*  */}
        <div className="quiz-text">
          <h2>
            Who is the most powerful general in the world? And where is he or
            she live.
            {/* {asnw} */}
          </h2>
        </div>
        <div className="content-quiz">
          <div className="answer-section">
            {options.map((options) => (
              <>
                <TextField
                  key={options.id}
                  id="outlined-read-only-input"
                  defaultValue={options.text}
                  onClick={() => {
                    console.log(options.text);
                  }}
                  InputProps={{
                    readOnly: true,
                    endAdornment: options.visible ? (
                      <img src={acc} />
                    ) : (
                      <img
                        src={err}
                        style={{ background: "#fff", borderRadius: "20px" }}
                      />
                    ),
                  }}
                  sx={{
                    backgroundColor: options.visible ? "#DBFFDC" : "#E94D4D80",
                    borderRadius: "10px",
                    border: "2px solid rgba(0, 0, 0, 0.25)",
                  }}
                />
              </>
            ))}
          </div>
          <div className="btn-div">
            <Button variant="contained" fullWidth>
              Keyingisi
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
