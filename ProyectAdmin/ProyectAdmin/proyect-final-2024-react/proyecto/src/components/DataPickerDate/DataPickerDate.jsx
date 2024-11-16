import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DataPickerDate.css";

const DataPickerDate = ({
  label,
  selectedDate,
  setSelectedDate,
  placeholder,
}) => {
  return (
    <div className="datepicker-container">
      <label className="datepicker-label">{label} </label>
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        dateFormat="dd/MM/yyyy"
        placeholderText={placeholder || "Seleccione una fecha"}
        className="datepicker-input"
      />
    </div>
  );
};

export default DataPickerDate;
