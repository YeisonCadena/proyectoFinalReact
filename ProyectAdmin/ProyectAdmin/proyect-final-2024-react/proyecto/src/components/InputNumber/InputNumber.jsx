import '../../bootstrap/bootstrap.min.css';
 import "./InputNumber.css";

const InputNumber = ({ label, placeholder }) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        type="number"
        className="form-control"
        placeholder={placeholder}
      />
    </div>
  );
};

export default InputNumber;

