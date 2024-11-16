import "./TextArea.css"
const TextArea = ({placeholder}) => {
  return (
    <div className="bitacora-item">
      <textarea placeholder={placeholder} />
    </div>
  );
};
export default TextArea;
