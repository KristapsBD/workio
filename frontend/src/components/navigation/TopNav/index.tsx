import React from "react";
import styled from "styled-components";

import { createStyle } from "@/styles";

const S = createStyle({
  Nav: styled.div`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #323235;
  `,
});

function TopNav() {
  return <S.Nav></S.Nav>;
}

export default TopNav;
