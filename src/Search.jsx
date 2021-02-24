import React, { useState } from "react";
import "./Search.css";

import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { DateRangePicker } from "react-date-range";

import { Button } from "@material-ui/core";
import PeopleIcon from "@material-ui/icons/People";

const Search = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };
  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  return (
    <div className="search">
      <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
      <h2>
        Number os guests <PeopleIcon />
      </h2>
      <input type="number" min={0} defaultValue={2} />
      <Button>Search Airbnb</Button>
    </div>
  );
};

export default Search;
