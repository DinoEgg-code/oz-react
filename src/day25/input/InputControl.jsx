const inputControl = ({value, onValueChange }) => {
  const handleChange = (e) => {
    onValueChange(e.target.value);
  };
  return (
    <input type="text" value={value} onChange={handleChange} />
  );
};

export default inputControl;
  