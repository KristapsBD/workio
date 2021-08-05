import React, { useState } from "react";
import styled from "styled-components";

import { createStyle } from "@/styles";
import Button from "@/components/Button";
import { useModal } from "@/components/Modal";
import AuthModal from "@/components/modals/AuthModal";
import { useFirebaseAuth } from "@/context/auth";
import { auth } from "@/firebase";

const S = createStyle({
  Nav: styled.div`
    height: 60px;
    width: 100%;
    border-bottom: 1px solid #323235;
    display: flex;
    align-items: center;
  `,
  NavRight: styled.div`
    flex: 1;
    padding: 0 12px;
    display: flex;
    align-items: center;
    justify-content: flex-end;

    & > *:not(:last-child) {
      margin-right: 8px;
    }
  `,
  AvatarImage: styled.img`
    height: 48px;
    width: 48px;
    border-radius: 2px;
  `,
  DisplayName: styled.span`
    font-family: "Poppins";
    color: #f1f1f1;
  `,
});

function TopNav() {
  const modal = useModal();
  const { user } = useFirebaseAuth();
  const [modalType, setModalType] = useState<"login" | "register">("login");

  const openLoginModal = () => {
    setModalType("login");
    modal.open();
  };

  const openRegisterModal = () => {
    setModalType("register");
    modal.open();
  };

  const logout = () => {
    auth.signOut();
  };

  return (
    <>
      <AuthModal type={modalType} {...modal.handlers} />
      <S.Nav>
        <S.NavRight>
          {user ? (
            <>
              <S.AvatarImage src={user.avatarUrl} />
              <S.DisplayName>{user.displayName}</S.DisplayName>
              <Button label="Logout" secondary onClick={logout} />
            </>
          ) : (
            <>
              <Button label="Login" onClick={openLoginModal} />
              <Button label="Register" secondary onClick={openRegisterModal} />
            </>
          )}
        </S.NavRight>
      </S.Nav>
    </>
  );
}

export default TopNav;
