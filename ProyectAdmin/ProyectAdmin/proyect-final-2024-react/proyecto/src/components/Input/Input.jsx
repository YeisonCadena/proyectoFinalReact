import "./Input.css"
const Input = ({text,placeholder,type}) => {
  return (
    <div className="bitacora-item">
      <label>{text}: </label>
      <input type="text" placeholder={placeholder} />
    </div>
  );
};
export default Input;
