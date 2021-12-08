import styled from "styled-components";
import { Link as LinkBase } from "react-router-dom";

export const Container = styled.div`
  height: 100vh;
  background: #ecf0f1;
`;

export const Header = styled.nav`
  background: white;
  padding: 5px;
`;

export const Title = styled.h1`
  text-align: center;
  padding: 24px 0;
`;

export const Nav = styled.nav`
  text-align: center;
  margin-bottom: 16px;
`;

export const Link = styled(LinkBase)`
  background: black;
  color: white;
  margin-right: 12px;
  padding: 6px;
  font-weight: bold;
`;
