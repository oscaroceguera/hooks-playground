import React from "react";
import useHover from "../hooks/useHover";
import { Container } from "./UseLocalStorage.styled";

export default function Two() {
  const [hoverRef, isHovered] = useHover<HTMLDivElement>();
  return <Container ref={hoverRef}>{isHovered ? "😁" : "😥"}</Container>;
}
