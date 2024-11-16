import "./InputImage.css"
const InputImage = () => {
  return (
    <div className="bitacora-item">
      <input type="file" accept="image/*" multiple />
    </div>
  );
};
export default InputImage;
