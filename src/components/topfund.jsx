import styled from "styled-components";
export default function TopFund({ children }) {
  const handle = () => {
    return "adg";
  };
  const Fnd = styled.div`
    display: flex;
    column-gap: 20px;
    flex-wrap: wrap;
    margin-top: 30px;
    div {
      width: 30%;
      height: 350px;
      border-radius: 10px;
      display: flex;
      flex-direction: column;
      div {
        width: 100%;
        img {
          width: 100%;
          height: 190px;
          border-top-left-radius: 10px;
          border-top-right-radius: 10px;
        }
      }
    }
  `;
  return <Fnd sp="handle">{children}</Fnd>;
}
