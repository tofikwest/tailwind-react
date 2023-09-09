import "./Normalize.css";
import "./App.css";
import Wrapper from "./helper/Wrapper";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import ShowYourLink from "./components/showYourLink/ShowYourLink";

function App({ color = "red" }) {
  return (
    <>
      <Header />
      <Wrapper Component={Hero} padding={"63px 300px"} />
      <Wrapper
        Component={ShowYourLink}
        padding={"63px 300px"}
        height={"600px"}
      />
    </>
  );
}

export default App;
