import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { Button } from "../../components";
import { logOut } from "../../store/actions";

const SettingsPage = () => {
  const dispatch = useDispatch();
  return (
    <Page>
      <Button
        onClick={() => dispatch(logOut())}
        text="Выйти"
      />
    </Page>
  )
}

const Page = styled.div`
  padding-top: 20px;
`;

export default SettingsPage;
