import { auto } from "async";
import {
  GiNinjaHeroicStance,
  GiWingedLeg,
  GiShatteredSword,
} from "react-icons/gi";
export const Dotacard = (props) => {
  return (
    <div
      style={{
        width: 400,
        height: 160,
        margin: 20,
        padding: 25,
        backgroundColor: "lightblue",
        borderRadius: 5,
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
        <GiNinjaHeroicStance size={30} style={{ color: "white" }} />
        <h3 style={{ color: "white" }}>{props.hero}</h3>
      </div>
      <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
        <GiWingedLeg size={30} style={{ color: "white" }} />
        <h3 style={{ color: "white" }}>{props.leg}</h3>
      </div>
      <div style={{ padding: 10, display: "flex", alignItems: "center" }}>
        <GiShatteredSword size={30} style={{ color: "white" }} />
        <h3 style={{ color: "white" }}>{props.sword}</h3>
      </div>
    </div>
  );
};
