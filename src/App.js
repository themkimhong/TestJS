import logo from "./logo.svg";
import "./App.css";
import { Dotacard } from "./component/testcard";
import { useEffect, useState } from "react";
import { Button } from "antd";
import axios from "axios";

function App() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.opendota.com/api/heroes").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {data.map((value) => {
        return <Dotacard leg={10} hero={"Mage"} sword={"Metal"} />;
      })}
    </div>
  );
}

export default App;
