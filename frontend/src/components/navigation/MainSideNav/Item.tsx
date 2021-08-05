import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

import { createStyle } from "@/styles";
import DynamicFiIcon from "@/components/DynamicFiIcon";

const S = createStyle({
  Link: styled(NavLink)`
    display: flex;
    padding: 12px;
    font-size: 16px;
    text-decoration: none;
    font-family: "Poppins";
    align-items: center;
    border-radius: 2px;
    color: #8f8f8f;

    &:hover {
      color: #fff;
    }

    &.active {
      color: #fff;
      background-color: #242429;
    }
  `,
  Icon: styled(DynamicFiIcon)``,
  Label: styled.span`
    margin-left: 12px;
    flex: 1;
  `,
  Badge: styled.span`
    padding: 2px 8px;
    color: #fff;
    background-color: #2e1add;
    border-radius: 40px;
    font-size: 12px;
  `,
});

function MainSideNavItem({ label, route, icon, badge }: MainSideNavItemProps) {
  return (
    <S.Link exact to={route} activeClassName="active">
      <S.Icon name={icon} size={24} />
      <S.Label>{label}</S.Label>
      {badge && <S.Badge>{badge > 9 ? "9+" : badge}</S.Badge>}
    </S.Link>
  );
}

export default MainSideNavItem;

export type MainSideNavItemProps = {
  icon: string;
  label: string;
  route: string;
  badge?: number;
};
