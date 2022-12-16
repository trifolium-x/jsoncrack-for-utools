import React from "react";
import Head from "next/head";
import styled from "styled-components";

const StyledPageWrapper = styled.iframe`
  height: 100vh;
  width: 100%;
  border: none;
`;

const Embed = () => {
  return (
    <>
      <Head>
        <title>JSON 导图</title>
        <meta
          name="description"
          content="将Json导图嵌入的你网站."
        />
      </Head>
      <StyledPageWrapper
        scrolling="no"
        title="Untitled"
        src="https://codepen.io/AykutSarac/embed/PoawZYo?default-tab=html%2Cresult"
        loading="lazy"
      >
        See the Pen <a href="https://codepen.io/AykutSarac/pen/PoawZYo">Untitled</a>{" "}
        by Aykut Saraç (<a href="https://codepen.io/AykutSarac">@AykutSarac</a>) on{" "}
        <a href="https://codepen.io">CodePen</a>.
      </StyledPageWrapper>
    </>
  );
};

export default Embed;
