import '../../bootstrap/bootstrap.min.css';
import "./Label.css";

const Label = ({ name }) => {
  return (
    <div className="bitacora-item mb-3">
      <label className="form-label">{name}</label>
    </div>
  );
};

export default Label;
