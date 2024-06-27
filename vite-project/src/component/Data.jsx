import { useContext, useState } from "react";
import { usingContext } from "../App";
import DataShow from "./DataShow";

export default function Data() {
  const { setData } = useContext(usingContext);
  const [inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(inputs);
    setInputs({
      email: "",
      password: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Email"
        value={inputs.email}
        name="email"
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={inputs.password}
        name="password"
        onChange={handleChange}
      />
      <button>Add</button>
      <DataShow />
    </form>
  );
}
