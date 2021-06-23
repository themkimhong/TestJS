import axios from "axios";
import { useEffect, useState } from "react";
import { Dotacard } from "../component/testcard";

function DotaHeroPage() {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios.get("https://api.opendota.com/api/heroes").then((res) => {
      setData(res.data);
      console.log(res.data);
    });
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {data.map((value) => {
          return (
            <Dotacard
              leg={value.legs}
              hero={value.localized_name}
              sword={"Metal"}
            />
          );
        })}
      </div>
    </div>
  );
}
export default DotaHeroPage;
