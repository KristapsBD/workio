import styled from "styled-components";
import React from "react";
import { useHistory } from "react-router-dom";

import { createStyle } from "@/styles";
import Button from "@/components/Button";

const S = createStyle({
  Container: styled.div`
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h1,
    p {
      color: #f1f1f1;
      font-family: "Poppins", sans-serif;
      margin: 12px;
    }

    p {
      margin-bottom: 24px;
    }
  `,
  CatGif: styled.img`
    z-index: 0;
  `,
});

function Error404() {
  const history = useHistory();

  const redirect = () => {
    history.push("/");
  };

  return (
    <S.Container>
      <h1>404 - Page Not Found</h1>
      <p>Looks like the page you're looking for does not exist.</p>
      <Button label="Go Home" onClick={redirect} />
    </S.Container>
  );
}

export default Error404;
