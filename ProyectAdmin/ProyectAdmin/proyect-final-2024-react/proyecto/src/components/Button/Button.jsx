import "./Button.css"
const Button = ({title}) => {
  return (
    <div className="bitacora-item">
      <div className={"bitacora-item"}>
        <button className="guardar-btn">{title}</button>
      </div>
    </div>
  );
};
export default Button;