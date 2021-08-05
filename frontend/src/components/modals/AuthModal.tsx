import React from "react";

import firebase from "@/firebase";
import Button from "@/components/Button";
import Modal, { ModalProps } from "@/components/Modal";
import TextInput from "../form/TextInput";

const continueWithProvider = async (provider: firebase.auth.AuthProvider) => {
  firebase.auth().signInWithPopup(provider);
};

function LoginForm() {
  return <div></div>;
}

function RegisterForm() {
  return <div></div>;
}

function AuthModal({ type, ...props }: AuthModalProps) {
  if (type == "login") {
    return (
      <Modal title="Login" {...props}>
        <TextInput
          name="username"
          label="Username"
          type="text"
          placeholder="JohnDoe"
        />
        <br />
        <TextInput
          name="password"
          label="Password"
          type="password"
          placeholder="******"
        />
        <br />
        <Button
          label="Login"
          onClick={() =>
            continueWithProvider(new firebase.auth.GoogleAuthProvider())
          }
        />
        <br />
        <Button
          label="Continue with Google"
          onClick={() =>
            continueWithProvider(new firebase.auth.GoogleAuthProvider())
          }
          secondary
        />
        <p>Only "continue with" works rn btw</p>
      </Modal>
    );
  }

  return <Modal title="Register" {...props}></Modal>;
}

export default AuthModal;

export type AuthModalProps = {
  type: "login" | "register";
} & Omit<ModalProps, "title">;
