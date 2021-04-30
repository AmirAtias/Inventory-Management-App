/** @jsxImportSource @emotion/react */
import { jsx, css } from '@emotion/react';
function Title(props) {
  const titleText = css({
    fontSize: "4rem",
    fontWeight: "4rem",
    color: "#fff",
    lineHeight: "1",
  });

  return <h1 css={titleText}>{props.title}</h1>;
}

export default Title;