const Child = ({ onChange }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);
  };

  return (
    <div>
      <input type="text" onChange={handleInputChange} placeholder="Upiši nešto ovo je child strana" />
    </div>
  );
};

export default Child;