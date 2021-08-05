import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";

import Button from "@/components/Button";
import TextInput from "@/components/form/TextInput";
import Modal, { useModal } from "@/components/Modal";

import firebase from "@/firebase";

function Landing() {
  const [user, loading, error] = useAuthState(firebase.auth());
  const modal = useModal();

  return (
    <div
      style={{
        fontFamily: "Poppins, sans-serif",
      }}
    >
      <div
        style={{
          maxWidth: "400px",
          margin: "0 auto",
        }}
      >
        <br />
        <TextInput name="password" type="password" label="Password" />
      </div>
    </div>
  );
}

export default Landing;
