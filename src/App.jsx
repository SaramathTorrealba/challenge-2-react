import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./components/Button";
import { Button } from "bootstrap";
import { InputForm } from "./components/InputForm";


let messageButton = "Ingresar";

function App() {
  const [name, setName] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <>
      <InputForm name={name} setName={setName} password={password} setPassword= {setPassword}></InputForm>
      {password=="252525" && <ButtonComponent button={messageButton}/>}

    </>
  );
}

export default App;
