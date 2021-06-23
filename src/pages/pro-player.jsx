import { Select } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Dotacard } from "../component/testcard";

const ProPlayerPage = () => {
  const [data, setData] = useState();

  useEffect(() => {
    axios
      .get("https://api.opendota.com/api/proPlayers")
      .then((res) => {
        console.log(res);
        setData(res.data);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(data);
  return (
    <idv>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h3>ProPlayer : </h3>
        <Select style={{ width: 120 }}>
          <Select.Option>OG</Select.Option>
          <Select.Option>Nigma</Select.Option>
        </Select>
      </div>
    </idv>
  );
};
export default ProPlayerPage;
