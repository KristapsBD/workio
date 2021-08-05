import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createStyle, loadFonts } from "@/styles";

// Components
import TopNav from "./components/navigation/TopNav";
import MainSideNav from "./components/navigation/MainSideNav";

// Pages
import LandingPage from "./pages/Landing";

const S = createStyle({
  Container: styled.div`
    height: 100%;
    display: flex;
  `,
  PageContainer: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 100%;
    background-color: #28282e;
  `,
  Page: styled.div``,
});

function App() {
  const sideNavItems = [
    {
      route: "/",
      label: "Home",
      icon: "FiHome",
    },
    {
      route: "/map",
      label: "Map",
      icon: "FiMap",
    },
    {
      route: "/alerts",
      label: "Inbox",
      icon: "FiInbox",
      badge: 10,
    },
  ];

  loadFonts();

  return (
    <BrowserRouter>
      <S.Container>
        <MainSideNav items={sideNavItems} />
        <S.PageContainer>
          <TopNav />
          <S.Page>
            <Switch>
              <Route exact path="/">
                <LandingPage />
              </Route>
            </Switch>
          </S.Page>
        </S.PageContainer>
      </S.Container>
    </BrowserRouter>
  );
}

export default App;
