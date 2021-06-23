import logo from "../assets/dotalogo.png";
import { Link } from "react-router-dom";
export const Header = (props) => {
  return (
    <div
      style={{ display: "flex", justifyContent: "space-evenly", padding: "10" }}
    >
      <Link to="/">
        <div style={{ marginTop: 10 }}>
          <img width={100} src={logo} alter="log" />
        </div>
      </Link>
      <div>
        <ul style={{ display: "flex", listStyle: "none", marginTop: 20 }}>
          <Link to="/dota-hero">
            <li style={{ paddingRight: 15 }}>DotaHero</li>
          </Link>
          <Link to="/pro-player">
            <li>ProPlayer</li>
          </Link>
        </ul>
      </div>
    </div>
  );
};