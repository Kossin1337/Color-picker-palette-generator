import "./Alert.scss";

export const Alert = ({ type, message, setStatus }) => {
  const resetStatus = () => {
    setStatus(false);
  };

  return (
    <div className={`alert ${type}`}>
      <span>{message}</span>
      <i className="fas fa-trash" onClick={resetStatus}></i>
    </div>
  );
};
