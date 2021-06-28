import logo512 from "../assets/logo512.png";
const Homepage = () => {
  return (
    <div>
      <h2 style={{ color: "coral", textAlign: "center" }}>
        Welcome To Homepage
      </h2>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <img src={logo512} alter="logo" />
      </div>
    </div>
  );
};
export default Homepage;
