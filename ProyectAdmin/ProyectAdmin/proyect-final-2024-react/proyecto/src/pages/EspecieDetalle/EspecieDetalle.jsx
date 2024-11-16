import React, { useEffect, useState } from "react";
import axios from "axios";
import "./EspecieDetalle.css";
import Input from "../../components/Input/Input";
import InputNumber from "../../components/InputNumber/InputNumber";
import Button from "../../components/Button/Button";
import Label from "../../components/Label/Label";

const EspecieDetalle = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const getAppi = async () => {
      await axios("http://localhost:5000/").then((res) => {
        console.log(res.data)
        setData(res.data);
      });
    }
    getAppi();
  }, []);

  return (
    <div className="especie-container">
      <h1 className="especie-header">Detalle de Especie</h1>
      <form className="especie-form">
        <div className="full-width">
          <Input
            text="Nombre Científico"
            placeholder="Nombre Científico"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Input
            text="Nombre Común"
            placeholder="Nombre Común"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Input
            text="Familia"
            placeholder="Familia"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Label name="Cantidad de Muestras" />
          <InputNumber
            text="Cantidad de Muestras"
            placeholder="Cantidad de muestras"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Input
            text="Estado de la Planta"
            placeholder="Estado de la planta"
            className="form-control"
          />
        </div>

        <div className="full-width">
          <Label name="Fotos" />
          <div className="input-group">
            <Input
              text="URL de la imagen"
              placeholder="URL de la imagen"
              className="form-control"
            />
            <Button title="Agregar Imagen" className="btn btn-outline-secondary" />
          </div>
        </div>

        <div className="full-width text-center">
          <Button title="Guardar" className="btn btn-primary" />
        </div>
      </form>
    </div>
  );
};

export default EspecieDetalle;
