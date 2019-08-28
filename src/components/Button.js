import React from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { logUserIn, logUserOut } from "../actions/loginActions";

const MyButton = styled.button`
  width: 150px;
  height: 25px;
  background: blanchedalmond;
  border-radius: 15px;
  border: none;
`;

export default () => {
  const dispatch = useDispatch();
  const { fetching, isAuthed, user } = useSelector(state => state.login);
  const login = () => dispatch(logUserIn({ username: "cade" }));
  const logout = () => dispatch(logUserOut());

  return (
    <>
      {!isAuthed && (
        <MyButton onClick={login}>Log in</MyButton>
      )}
      {isAuthed && (
        <MyButton onClick={logout}>Log out</MyButton>
      )}
      {fetching && (
        <small>fetching...</small>
      )}
      {user && (
        <small>{user.username} {user.token}</small>
      )}
    </>
  )
}