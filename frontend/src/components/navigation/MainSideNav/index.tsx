import React from "react";
import styled from "styled-components";

import { createStyle } from "@/styles";

import MainSideNavItem, { MainSideNavItemProps } from "./Item";

const S = createStyle({
  Nav: styled.nav`
    width: 240px;
    background-color: #141419;
    display: flex;
    flex-direction: column;
  `,
  NavHeader: styled.div`
    height: 60px;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Poppins", sans-serif;
    border-bottom: 1px solid #323235;
  `,
  NavItemList: styled.div`
    display: flex;
    flex-direction: column;
    padding: 12px;

    & > *:not(:first-child) {
      margin-top: 4px;
    }
  `,
});

export type MainSideNavProps = {
  items: MainSideNavItemProps[];
};

function MainSideNav({ items }: MainSideNavProps) {
  const mappedItems = items.map((item) => {
    return <MainSideNavItem key={item.route} {...item} />;
  });

  return (
    <S.Nav>
      <S.NavHeader>
        <h2>Workio</h2>
      </S.NavHeader>
      <S.NavItemList>{mappedItems}</S.NavItemList>
    </S.Nav>
  );
}

export default MainSideNav;
