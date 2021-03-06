import React from "react";
import styled from "styled-components";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { createStyle, loadFonts } from "@/styles";

// Components
import TopNav from "./components/navigation/TopNav";
import MainSideNav from "./components/navigation/MainSideNav";

// Pages
import Error404Page from "./pages/error/404";
import LandingPage from "./pages/Landing";
import UserProfilePage from "./pages/UserProfile";

// Context
import { useFirebaseAuth } from "./context/auth";

const S = createStyle({
  Container: styled.div`
    height: 100%;
    display: flex;
  `,
  Page: styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    overflow-y: auto;
    max-height: 100%;
    background-color: #28282e;
  `,
});

function App() {
  const { user } = useFirebaseAuth();
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
    {
      route: `/profile/${user?.id || ""}`,
      label: "Profile",
      icon: "FiUser",
    },
  ];

  loadFonts();

  return (
    <BrowserRouter>
      <S.Container>
        <MainSideNav items={sideNavItems} />
        <S.Page>
          <TopNav />
          <Switch>
            <Route exact path="/" component={LandingPage} />
            <Route path="/profile/:userId" component={UserProfilePage} />
            <Route path="/inbox" component={LandingPage} />
            <Route path="/map" component={LandingPage} />
            <Route component={Error404Page} />
          </Switch>
        </S.Page>
      </S.Container>
    </BrowserRouter>
  );
}

export default App;
