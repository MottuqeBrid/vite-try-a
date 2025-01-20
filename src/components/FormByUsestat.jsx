import { useRef, useState } from "react";
// import "../../node_modules/milligram/dist/milligram.min.css";
const FormByUsestat = () => {
  const [showDate, setShowDate] = useState(false);
  const [fdata, setFdata] = useState({
    fName: "",
    lName: "",
    city: "",
    gender: "",
  });
  const handelSubmit = (e) => {
    e.preventDefault();
    setShowDate(true);
  };

  const handleChange = (property, value) => {
    setFdata((setdata) => ({
      ...setdata,
      [property]: value,
    }));
    // console.log(e.target.name, e.target.value);
    // console.log(fdata);
    setShowDate(false);
  };

  return (
    <div>
      <form onSubmit={handelSubmit}>
        <label for="fname">First Name:</label>
        <input
          value={fdata.fName}
          onChange={(e) => {
            handleChange("fName", e.target.value);
          }}
          type="text"
          id="fname"
          name="fname"
          required
        />
        <label for="lname">Last Name:</label>
        <input
          value={fdata.lName}
          onChange={(e) => {
            handleChange("lName", e.target.value);
          }}
          type="text"
          id="lname"
          name="lname"
          required
        />
        <select
          value={fdata.city}
          onChange={(e) => {
            handleChange("city", e.target.value);
          }}
          name="city"
          id=""
        >
          <option value="">Select City</option>
          <option value="New York">New York</option>
          <option value="Los Angeles">Los Angeles</option>
          <option value="Chicago">Chicago</option>
          <option value="Houston">Houston</option>
          <option value="Philadelphia">Philadelphia</option>
        </select>
        <label for="gender">Gender:</label>
        <input
          checked={fdata.gender === "Male"}
          onChange={() => {
            handleChange("gender", "Male");
          }}
          type="radio"
          id="male"
          name="gender"
          value="Male"
        />
        Male
        <input
          checked={fdata.gender === "Female"}
          onChange={() => {
            handleChange("gender", "Female");
          }}
          type="radio"
          id="Female"
          name="gender"
          value="Female"
        />
        Female <br />
        <input type="submit" value="Submit" />
      </form>
      {showDate && (
        <div>
          <p>
            First Name: {fdata.fName} <br />
            Last Name: {fdata.lName} <br />
            City: {fdata.city} <br />
            Gender: {fdata.gender}
          </p>
        </div>
      )}
    </div>
  );
};

export default FormByUsestat;
