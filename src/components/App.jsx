import React, { useState } from "react";

function App() {
  const [fullname, setFullname] = useState({
    firstname: "",
    lastname: ""
  });
  const [submitname, setSubmited] = useState("");
  function handleChange(event) {
    const { value, name } = event.target;

    setFullname(prevValue => {
      if (name === "lName") {
        return { firstname: prevValue.firstname, lastname: value };
      } else if (name === "fName") {
        return { firstname: value, lastname: prevValue.lastname };
      }
    });
  }
  function handleClick(event) {
    setSubmited(fullname);
    event.preventDefault();
  }
  return (
    <div className="container">
      <h1>
        Hello {submitname.firstname} {submitname.lastname}
      </h1>
      <form onSubmit={handleClick}>
        <input
          onChange={handleChange}
          name="fName"
          placeholder="First Name"
          value={fullname.firstname}
        />
        <input
          onChange={handleChange}
          name="lName"
          placeholder="Last Name"
          value={fullname.lastname}
        />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default App;
