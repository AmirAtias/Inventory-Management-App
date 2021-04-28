/** @jsxImportSource @emotion/react */
import { css, jsx } from '@emotion/react';
import { Container } from "react-bootstrap";
import Title from "./Title";


const Home = () => {
 

  const pageContent = css({
    fontSize: "2vw",
    fontWeight: "200",
    color: "#fff",
    lineHeight: "1",
    marginTop: "40px",
    marginInline: "20px",
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
    justifyContent: "center",
    margin: "3%",
  });
  const containerCss = css({
    display: "flex",
    flexFlow: "column wrap",
    alignItems: "center",
  });
  return (
    <Container css={containerCss}>
      <Title title="Inventory Management" />
      <div css={pageContent}>
        <h2 style={{ paddingBottom: "3%" }}>
         Web App for Inventory Management
        </h2>
      </div>
    </Container>
  );
};

export default Home;