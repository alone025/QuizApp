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
import axios from "axios";
import Result from "../total/total";
import InputLabel from "@mui/material/InputLabel";
import CircularProgress from "@mui/material/CircularProgress";

export const shuffle = (arr) => {
  return arr
    .map((item) => [Math.random(), item])
    .sort()
    .map((item) => item[1]);
};

const QuizPage = ({ data }) => {
  const tm =
    data.numberOfQuestions == 5
      ? 300
      : data.numberOfQuestions == 10
      ? 600
      : data.numberOfQuestions == 15
      ? 900
      : 700;
  const [time, setTime] = useState(tm);
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [accert, setAccert] = useState(false);
  const [show, setShow] = useState(false);
  const [finished, setFinished] = useState(false);
  const [userAnswers, setUserAnswers] = useState(0);
  const [have, setHave] = useState(true);
  const [start, setStart] = useState(false);
  const [sas, setSas] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime((prevTime) => prevTime - 1);
      } else {
        clearInterval(timer);
      }
    }, 1000);

    if (time == 0) {
      setFinished(true);
    }

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

  const fetchQuestions = async () => {
    console.log(data);
    try {
      const response = await axios.get("https://opentdb.com/api.php", {
        params: {
          amount: data.numberOfQuestions,
          category: data.category,
          difficulty: data.difficulty,
          type: data.type,
          encoding: data.encoding,
        },
      });
      const fetchedQuestions = response.data.results;

      if (fetchedQuestions.length > 0) {
        setQuestions(fetchedQuestions);
        console.log("Savollar", fetchedQuestions);
        setAccert(true);
        setSas(fetchedQuestions[0].incorrect_answers);
        console.log(sas);
      } else {
        console.error("No questions fetched from the API.");
        setHave(false);
      }
    } catch (error) {
      console.error("Error fetching questions:", error);
      fetchQuestions();
    }
  };

  const nextQuestion = () => {
    setTimeout(() => {
      const nextIndex = currentIndex + 1;
      if (nextIndex < questions.length) {
        setCurrentIndex(nextIndex);
        setShow(false);
      } else {
        setFinished(true);
      }
    }, 1000);
  };

  return (
    <>
      {!finished ? (
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
              <p>
                {currentIndex + 1} of {data.numberOfQuestions}
              </p>
            </div>
            <div className="timeTab">
              <img src={clock} alt="" />
              {accert ? <>{formatTime(time)}</> : "00:00"}
            </div>
          </div>
          {have ? (
            <>
              {accert ? (
                <div className="bottomBar">
                  {/*  */}

                  <img src={book} alt="" className="imh3" />
                  <img src={pen} alt="" className="imh4" />
                  <img src={ruler} alt="" className="imh1" />
                  <img src={pencil} alt="" className="imh2" />

                  {/*  */}
                  <div className="quiz-text">
                    <h2>
                      {questions[currentIndex].question || <h2>Hello</h2>}
                    </h2>
                  </div>
                  <div className="content-quiz">
                    <div className="answer-section">
                      {questions[currentIndex].incorrect_answers.map(
                        (options) => (
                          <TextField
                            key={options}
                            id="outlined-read-only-input"
                            defaultValue={options}
                            onClick={() => {
                              setShow(true);
                              nextQuestion();
                            }}
                            InputProps={{
                              readOnly: true,
                              endAdornment: show ? (
                                <img
                                  src={err}
                                  style={{
                                    background: "#fff",
                                    borderRadius: "20px",
                                  }}
                                />
                              ) : (
                                <></>
                              ),
                            }}
                            sx={{
                              backgroundColor: show ? "#E94D4D80" : "#fff",
                              borderRadius: "10px",
                              border: "2px solid rgba(0, 0, 0, 0.25)",
                            }}
                          />
                        )
                      )}
                      <TextField
                        key={questions[currentIndex].correct_answer}
                        id="outlined-read-only-input"
                        defaultValue={questions[currentIndex].correct_answer}
                        onClick={() => {
                          setUserAnswers(userAnswers + 1);
                          setShow(true);
                          nextQuestion();
                        }}
                        InputProps={{
                          readOnly: true,
                          endAdornment: show ? <img src={acc} /> : <></>,
                        }}
                        sx={{
                          backgroundColor: show ? "#DBFFDC" : "#fff",
                          borderRadius: "10px",
                          border: "2px solid rgba(0, 0, 0, 0.25)",
                        }}
                      />
                    </div>
                    <div className="btn-div">
                      <Button
                        variant="contained"
                        fullWidth
                        onClick={() => {
                          setShow(true);
                          nextQuestion();
                        }}
                      >
                        Keyingisi
                      </Button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {start ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    <>
                      <InputLabel sx={{ fontSize: "28px", color: "#fff" }}>
                        Are you ready?
                      </InputLabel>
                      <Button
                        variant="contained"
                        sx={{
                          marginTop: "15px",
                          padding: "10px 20px",
                          borderRadius: "10px",
                        }}
                        onClick={() => {
                          fetchQuestions();
                          setStart(true);
                        }}
                      >
                        Start test
                      </Button>
                    </>
                  )}
                </>
              )}
            </>
          ) : (
            <>
              <InputLabel sx={{ fontSize: "28px", color: "#fff" }}>
                Unfortunately, there are no questions in this category.
              </InputLabel>
            </>
          )}
        </div>
      ) : (
        <Result data={data.numberOfQuestions} answers={userAnswers} />
      )}
    </>
  );
};

export default QuizPage;
