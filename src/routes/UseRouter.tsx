import React from "react";
import useRouter from "../hooks/useRouter";
import { Container } from "./UseRouter.styled";

export default function UseRouter() {
  const router = useRouter();
  console.log("router.query.postId", router.query.id);
  console.log("router.pathname", router.pathname);
  return (
    <Container>
      <button onClick={(e) => router.push("/")}>HOME</button>
    </Container>
  );
}
