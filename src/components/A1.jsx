const A1 = ({ clickButton }) => {
  const namefrom = (e) => {
    e.preventDefault();
    console.log(e);
  };
  return (
    <div>
      <h1>This is A1 Page</h1>
      <button onClick={clickButton}>Click</button>
      <form onSubmit={namefrom}>
        <input type="text" placeholder="Name" />
        <button type="submit">submit</button>
      </form>
    </div>
  );
};

export default A1;
