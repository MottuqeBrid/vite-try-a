import "../node_modules/milligram/dist/milligram.min.css";
import A1 from "./components/A1";
import Demo from "./components/Demo";
import FormByUsestat from "./components/FormByUsestat";
import TryUseEffect from "./components/tryuseEffevt/TryUseEffect";
import UseRefP from "./components/UseRefP";
import UseStateForToDo from "./components/UseStateForToDo";
function App() {
  const name = {
    first: "John",
    last: "Doe",
    age: 30,
    city: "New York",
    country: "USA",
    address: "123 Main St",
    email: "johndoe@example.com",
  };
  // const click = () => {
  //   alert("Clicked me!");
  // };
  return (
    <>
      {/* <Demo name={name} hed="this is details" /> */}
      {/* <A1 clickButton={click} /> */}
      {/* <UseRefP /> */}
      {/* <UseStateForToDo /> */}
      {/* <FormByUsestat /> */}
      <h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, sed?
      </h1>
      {/* <TryUseEffect /> */}
    </>
  );
}

export default App;
