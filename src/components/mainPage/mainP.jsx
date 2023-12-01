import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";
import React from "react";
import "./main.scss";

const options = [
  {
    id: 1,
    value: "option1",
    label: "Option 1",
    title: "Kategoriyadan birini tanlang",
    fall: "Har qanday kategoriya",
  },
  {
    id: 2,
    value: "option2",
    label: "Option 2",
    title: "Testlar sonini tanlang",
    fall: "Testlar soni",
  },
  {
    id: 3,
    value: "option3",
    label: "Option 3",
    title: "O’z darajangizni tanlang",
    fall: "Darajalar turi",
  },
];

const MainP = () => {
  const [selectedOptions, setSelectedOptions] = React.useState({
    select1: "",
    select2: "",
    select3: "",
  });

  const handleSelectChange = (event, selectName) => {
    setSelectedOptions({
      ...selectedOptions,
      [selectName]: event.target.value,
    });
    selectedOptions ? console.log(selectedOptions) : null;
  };

  function next() {
    window.location.href = "/quiztest1";
  }

  return (
    <div className="container MainPage">
      <div className="log-text">
        <h2>Bizning qulay testlar bilan o’z darajangizni aniqlab oling</h2>
      </div>
      <div className="content-bottom">
        <div className="select-section">
          {/* <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={age}
              onChange={handleChange}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value="">
                <em>Har qanday kategoriya</em>
              </MenuItem>
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </FormControl> */}

          {options.map((option) => (
            <>
              <FormControl sx={{ m: 1, minWidth: 120 }} key={option.id}>
                <h2>{option.title}</h2>
                <Select
                  value={selectedOptions[`select${option.id}`]}
                  onChange={(al) => {
                    handleSelectChange(al, `select${option.id}`);
                    console.log(`select${option.id}`);
                  }}
                  displayEmpty
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem value="">
                    <em>{option.fall}</em>
                  </MenuItem>
                  <MenuItem value={option.value}>{option.label}</MenuItem>
                </Select>
              </FormControl>
            </>
          ))}
        </div>
        <div className="btn-dv">
          <Button
            variant="contained"
            fullWidth
            onClick={() => {
              next();
            }}
          >
            Testni boshlash
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainP;
