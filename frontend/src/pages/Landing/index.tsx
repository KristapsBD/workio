import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "@/components/Button";
import TextInput from "@/components/form/TextInput";
import Modal, { useModal } from "@/components/Modal";

import firebase from "@/firebase";

const continueWithProvider = async (provider: firebase.auth.AuthProvider) => {
  firebase.auth().signInWithPopup(provider);
};

function Landing() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const modal = useModal();

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <Modal title="Register" {...modal.handlers}>
        <Button
          label="Continue with Google"
          onClick={() =>
            continueWithProvider(new firebase.auth.GoogleAuthProvider())
          }
        />
      </Modal>
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <br />
        <TextInput name="password" type="password" label="Password" />
        <br />
        <Button label="Register" onClick={() => modal.open()} />
      </div>
    </div>
  );
}

export default Landing;
