const ChildLiftPage = ({ onChange, broj }) => {
  const handleInputChange = (e) => {
    onChange(e.target.value);

  };

  return (
    <>
      {/* <div>
        <h2>Child Component</h2>
        <input type="text"  onChange={handleInputChange} placeholder="Upiši nešto ovo je child strana" />
      </div> */}
      <div>
        <h2>Child Component broj</h2>
        <input
          type="text"
          value={broj}
          onChange={handleInputChange}
          placeholder="Upiši Broj nešto ovo je child strana"
        />
      </div>
    </>
  );
};

export default ChildLiftPage;