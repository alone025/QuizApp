import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import React from "react";
import "./main.scss";
import axios from "axios";
import QuizPage from "../quizs/quizPage";
import Snackbar from "@mui/material/Snackbar";
import { Alert } from "@mui/material";

const MainP = () => {
  const [categories, setCategories] = React.useState([]);
  const [open, setOpen] = React.useState(true);
  const [snack, setSnack] = React.useState(false);

  React.useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(
          "https://opentdb.com/api_category.php"
        );
        const categories = response.data.trivia_categories;
        setCategories(categories);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, [!categories]);

  const options = [
    {
      id: 1,
      label: "Any category",
      title: "Choose one of the category",
      fall: categories,
      zov: "category",
    },
    {
      id: 2,
      label: "Number of tests",
      title: "Select the number of tests",
      fall: [
        {
          id: 5,
          name: 5,
        },
        {
          id: 10,
          name: 10,
        },
        {
          id: 15,
          name: 15,
        },
      ],
      zov: "numberOfQuestions",
    },
    {
      id: 3,
      label: "Kind of difficulty",
      title: "Select the difficulty level of the test",
      fall: [
        {
          id: 1,
          name: "Easy",
          value: "easy",
        },
        {
          id: 2,
          name: "Medium",
          value: "medium",
        },
        {
          id: 3,
          name: "Hard",
          value: "hard",
        },
      ],
      zov: "difficulty",
    },
    {
      id: 4,
      label: "Any type",
      title: "Select the answer types",
      fall: [
        {
          id: 1,
          name: "Multiple Choice",
          value: "multiple",
        },
        {
          id: 2,
          name: "True / False",
          value: "boolean",
        },
      ],
      zov: "type",
    },
  ];

  const [formData, setFormData] = React.useState({
    numberOfQuestions: 5,
    type: "",
    category: "",
    encoding: "",
    difficulty: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleStartQuiz = async () => {
    if (
      !formData.category ||
      !formData.difficulty ||
      !formData.type ||
      !formData.numberOfQuestions
    ) {
      setSnack(true);
      return;
    }
    try {
      setOpen(false);
    } catch (error) {
      console.error("Error starting quiz:", error);
    }
  };

  const handleClose = () => {
    setSnack(false);
  };

  return (
    <>
      {open ? (
        <div className="container MainPage">
          <Snackbar
            open={snack}
            autoHideDuration={6000}
            onClose={handleClose}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={handleClose}
              severity="error"
              sx={{ width: "100%" }}
            >
              Please fill in all fields before starting the quiz.
            </Alert>
          </Snackbar>
          <div className="log-text">
            <h2>Find out your level with our convenient tests</h2>
          </div>
          <div className="content-bottom">
            <div className="select-section">
              {options.map((option) => (
                <FormControl sx={{ m: 1, minWidth: 120 }} key={option.id}>
                  <h2>{option.title}</h2>
                  <Select
                    name={option.zov}
                    value={formData[option.zov]}
                    onChange={handleInputChange}
                    displayEmpty
                    inputProps={{ "aria-label": "Without label" }}
                  >
                    <MenuItem value="">
                      <em>{option.label}</em>
                    </MenuItem>
                    {option.fall.map((answers) => (
                      <MenuItem
                        value={
                          option.zov == "type"
                            ? answers.value
                            : option.zov == "difficulty"
                            ? answers.value
                            : answers.id
                        }
                        key={answers.id}
                      >
                        {answers.name}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ))}
            </div>
            <div className="btn-dv">
              <Button
                variant="contained"
                fullWidth
                onClick={(e) => {
                  handleStartQuiz(e);
                }}
              >
                Start Test
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <QuizPage data={formData} />
      )}
    </>
  );
};

export default MainP;
