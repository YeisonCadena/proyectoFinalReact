import React, { useState } from "react";
import "react-datepicker/dist/react-datepicker.css";
import "./Bitacora.css";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import InputImage from "../../components/InputImage/InputImage";
import TextArea from "../../components/TextArea/TextArea";
import DataPickerHour from "../../components/DataPickerHour/DataPickerHour";
import DataPickerDate from "../../components/DataPickerDate/DataPickerDate";
import Label from "../../components/Label/Label";

const Bitacora = () => {
  const [selectedDate, setSelectedDate] = useState(null); // Estado para la fecha
  const [selectedTime, setSelectedTime] = useState(null); // Estado para la hora

  return (
    <div className="bitacora-container">
      <h1 className="bitacora-header">Bitácora</h1>
      <form className="bitacora-form">
        <div className="full-width">
          <Input
            text="Nombre Bitacora"
            placeholder="Nombre Bitacora"
            className="form-control"
          />
        </div>

        <div>
          <Label name="Fecha del Muestreo" />
          <DataPickerDate
            placeholder="Seleccione una fecha"
            selectedDate={selectedDate} // Pasa el estado de la fecha
            setSelectedDate={setSelectedDate} // Pasa la función para actualizar la fecha
            className="form-control"
          />
        </div>

        <div>
          <Label name="Hora del Muestreo" />
          <DataPickerHour
            placeholder="Seleccione una hora"
            selectedTime={selectedTime} // Pasa el estado de la hora
            setSelectedTime={setSelectedTime} // Pasa la función para actualizar la hora
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Input
            text="Localizacion Geografica"
            placeholder="Ingrese coordenadas GPS"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Label name="Descripción del Hábitat" />
          <TextArea
            placeholder="Ingrese la descripción del hábitat"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Label name="Detalles de las Especies" />
          <Button title="Agregar especie" className="btn btn-primary" />
        </div>

        <div className="full-width">
          <Label name="Fotografías del Sitio" />
          <InputImage className="form-control" />
        </div>

        <div className="full-width">
          <Label name="Comentarios" />
          <TextArea
            placeholder="Ingrese comentarios adicionales"
            className="form-control"
          />
        </div>

        <div className="full-width text-center">
          <Button title="Guardar bitácora" className="btn btn-success" />
        </div>
      </form>
    </div>
  );
};

export default Bitacora;