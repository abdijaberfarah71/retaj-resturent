import { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [data, setData] = useState([]);
  const [formData, setFormData] = useState({});

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await axios
      .post("http://localhost:5000/create", formData)
      .then((response) => {
        console.log(response);
        setFormData({
          name: "",
          email: "",
          password: "",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  (async function getData() {
    await axios
      .get("http://localhost:5000/user")
      .then((res) => setData(res.data));
  })();

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="txet"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Enter Username"
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="Enter Email"
        />
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          placeholder="Enter Password"
        />
        <button type="submit">submit</button>
      </form>

      <table>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
