import "./styles.css";
import styled from "styled-components";
import Menu from "./components/menu";
import Banner from "./components/banner";
import TopFund from "./components/topfund";

export default function App() {
  const Fund = styled.div`
    width: 80%;
    margin: auto;
    min-height: 300px;
    margin-top: 30px;
    font-family: sans-serif;
    padding: 30px;
  `;
  return (
    <div className="App">
      <Menu></Menu>
      <Banner></Banner>
      <Fund>
        <h1>Top fundraisers</h1>
        <TopFund>
          {/* <div>
            <div>
              <img src="https://images.gofundme.com/FjTViIDgE5YW1O2YmqcS8za7qpg=/720x405/https://d2g8igdw686xgo.cloudfront.net/58539675_1626643603550189_r.jpeg" />
            </div>
            <div className="details">
              <span>Bellevue, WA</span>
              <h4>{}</h4>
            </div>
          </div>
          <div>
            <h1>adg</h1>
          </div>
          <div>
            <h1>adg</h1>
          </div> */}
        </TopFund>
      </Fund>
    </div>
  );
}
