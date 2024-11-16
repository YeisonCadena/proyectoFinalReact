import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './DataPickerHour.css'; // Asegúrate de que los estilos estén en este archivo

const DataPickerHour = ({ label, selectedTime, setSelectedTime, placeholder }) => {
  return (
    <div className="datepicker-container">
      <label className="datepicker-label">{label}</label>
      <DatePicker
        selected={selectedTime} // Usa el estado pasado desde el componente padre
        onChange={(time) => setSelectedTime(time)} // Actualiza la hora seleccionada
        showTimeSelect
        showTimeSelectOnly
        timeIntervals={15}
        timeCaption="Hora"
        dateFormat="h:mm aa"
        placeholderText={placeholder || "Seleccione una hora"}
        className="datepicker-input"
      />
    </div>
  );
};

export default DataPickerHour;