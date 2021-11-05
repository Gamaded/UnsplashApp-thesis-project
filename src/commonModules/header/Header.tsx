import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import styled from "styled-components";
import { setProfile, login } from "../../store/actions/actions";
import { getCookie, useAppSelector } from "../../helpers";
import AuthButton from "./AuthButton";
import gear from "../../images/gear.png";
import logo from "../../images/unsplash.png";

const Header: React.FC = () => {
  const isAuth = useAppSelector(state => state.isAuth);
  const history = useHistory();
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
  }, [isAuth]);

  return (
    <StHeader>
      <Button
        onClick={() => {
          history.push("/home");
        }}
      >
        <img src={logo} />
      </Button>
      <ProfileCont>
        <StUserAvatar alt="your avatar" src={user.profile_image.medium} />
        <StUsername>{user.username}</StUsername>
        <AuthButton isAuth={isAuth} />
        <Button
          onClick={() => {
            history.push("/settings");
          }}
        >
          <img src={gear} />
        </Button>
      </ProfileCont>
    </StHeader>
  );
}

const StHeader = styled.header`
  position: fixed;
  z-index: 10;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 20px;
  background-color: #424242;
  box-shadow: 0 3px 20px;
`;

const ProfileCont = styled.div`
  display: flex;
  flex-wrap: no-wrap;
  align-items: center;
`;

const StUserAvatar = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 100%;
`;

const StUsername = styled.div`
  padding: 0px 10px;
  color: #ffffff;
`;

const Button = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  border-radius: 5px;
  padding: 3px;
  &:active {
    box-shadow: inset 0px 0px 20px 0px #00000050;
  }
`;

export default Header;
