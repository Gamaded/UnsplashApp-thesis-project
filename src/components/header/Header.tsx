import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styled from "styled-components";
import { setProfile } from "../../store/actions/actions";
import { auth } from "../../store/reducers/getDataFromUnsplash";
import AuthButton from "./AuthButton";
import { getCookie } from "../../helpers";
import { InitialState } from "../../store/reducers/types";

const Header: React.FC = () => {
  const user = useSelector((state: InitialState) => state.user);
  const isAuth = useSelector((state: InitialState) => state.isAuth);
  const dispatch = useDispatch();
  const code = window.location.search.split("code=")[1];
  const accToken = getCookie("accToken");

  if (code && !isAuth) {
    dispatch(auth(code));
  }

  if (accToken && isAuth && Object.keys(user).length < 3) {
    const savedUser = localStorage.getItem(accToken);
    if (savedUser) {
      dispatch(setProfile(JSON.parse(savedUser)));
    }
  }

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
    padding: 10px;
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
