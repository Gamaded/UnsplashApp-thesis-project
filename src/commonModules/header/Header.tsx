import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setProfile, login } from "../../store/actions/actions";
import { getCookie, useAppSelector } from "../../helpers";
import AuthButton from "./AuthButton";

const Header: React.FC = () => {
  const isAuth = useAppSelector(state => state.isAuth);
  const user = useAppSelector(state => state.user);
  const dispatch = useDispatch();
  const code = window.location.search.split("code=")[1];
  const accToken = getCookie("accToken");
  useEffect(() => {
    if (code && !isAuth) {
      dispatch(login(code));
    }
  }, [code]);

  useEffect(() => {
    if (accToken) dispatch(setProfile(accToken));
  }, [accToken]);

  useEffect(() => {
    if (!isAuth) dispatch({
      type: "REMOVE_PROFILE"
    });
  }, [isAuth]);

  return (
    <StHeader>
      <StUserAvatar alt="your avatar" src={user.profile_image.medium} />
      <StUsername>{user.username}</StUsername>
      <AuthButton isAuth={isAuth} />
    </StHeader>
  );
}

const StHeader = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 10px 0px;
  background-color: #424242;
  box-shadow: 0 3px 20px;
`;

const StUserAvatar = styled.img`
    width: 64px;
    height: 64px;
    margin-right: 1%;
    border-radius: 100%;
`;

const StUsername = styled.div`
    margin-right: 1%;
    color: #ffffff;
`;

export default Header;
