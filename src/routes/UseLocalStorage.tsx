import React, { useState } from "react";
import useLocalStorage from "../hooks/useLocalStorage";
import { Container, Input } from "./UseLocalStorage.styled";

export default function UseLocalStorage() {
  const [name, setName] = useLocalStorage("name", "oscar");
  return (
    <Container>
      <Input
        type="text"
        placeholder="Enter your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </Container>
  );
}
