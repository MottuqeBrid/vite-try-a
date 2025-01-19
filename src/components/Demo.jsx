// import React from "react";

const Demo = ({ name, hed }) => {
  // console.log(name);

  return (
    <div>
      <h1>{hed}</h1>
      <ul>
        {Object.entries(name).map(([key, value]) => (
          <li
            style={{
              listStyle: "none",
            }}
            key={key}
          >
            <strong>{key}:</strong> {value}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Demo;
