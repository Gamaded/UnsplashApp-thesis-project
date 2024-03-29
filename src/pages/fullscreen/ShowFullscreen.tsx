import React from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { setCurrentPhoto } from "../../store/actions/actions";
import { DateLikes, AuthorCont } from "../../commonModules";
import { PleaseWait } from "../../components";
import { useHistory } from "react-router-dom";
import { useAppSelector } from "../../helpers";

function ShowFullscreeen () {
    const dispatch = useDispatch();
    const history = useHistory();
    const isAuth = useAppSelector(state => state.isAuth);
    const currentPhoto = useAppSelector(state => state.currentPhoto);
    const photoId = window.location.search.split("photoId=")[1];
    if (!currentPhoto) {
        dispatch(setCurrentPhoto(photoId));
        return (
            <FullScreenCont>
                <PleaseWait background="dark" />
            </FullScreenCont>
        );
    }

    return (
        <FullScreenCont>
            <FullScreenHeader>
                <FullScreenBackArrow
                    type="button"
                    onClick={() => {
                        history.goBack()
                    }}
                />
                <AuthorCont photo={currentPhoto} />
            </FullScreenHeader>
            <FullScreenContent>
                <FullScreenPhoto alt={currentPhoto.alt_description || ""} src={currentPhoto.urls.full} />
                <FullScreenFooter>
                    <DateLikes photo={currentPhoto} isAuth={isAuth} />
                </FullScreenFooter>
            </FullScreenContent>
        </FullScreenCont>
    );
}

const FullScreenCont = styled.div`
    display: flex;
    flex-wrap: wrap;
    align-content: flex-start;
    width: 100%;
    height: 100vh;
    background-color: #000000e0;
`;


const FullScreenHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    padding: 10px;
    margin-bottom: 5px;
`;

const FullScreenBackArrow = styled.button`
    width: 51px;
    height: 30px;
    border: none;
    background-color: transparent;
    background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAeCAYAAACBkybCAAABN2lDQ1BBZG9iZSBSR0IgKDE5OTgpAAAokZWPv0rDUBSHvxtFxaFWCOLgcCdRUGzVwYxJW4ogWKtDkq1JQ5ViEm6uf/oQjm4dXNx9AidHwUHxCXwDxamDQ4QMBYvf9J3fORzOAaNi152GUYbzWKt205Gu58vZF2aYAoBOmKV2q3UAECdxxBjf7wiA10277jTG+38yH6ZKAyNguxtlIYgK0L/SqQYxBMygn2oQD4CpTto1EE9AqZf7G1AKcv8ASsr1fBBfgNlzPR+MOcAMcl8BTB1da4Bakg7UWe9Uy6plWdLuJkEkjweZjs4zuR+HiUoT1dFRF8jvA2AxH2w3HblWtay99X/+PRHX82Vun0cIQCw9F1lBeKEuf1UYO5PrYsdwGQ7vYXpUZLs3cLcBC7dFtlqF8hY8Dn8AwMZP/fNTP8gAAAAJcEhZcwAACxMAAAsTAQCanBgAAAXraVRYdFhNTDpjb20uYWRvYmUueG1wAAAAAAA8P3hwYWNrZXQgYmVnaW49Iu+7vyIgaWQ9Ilc1TTBNcENlaGlIenJlU3pOVGN6a2M5ZCI/PiA8eDp4bXBtZXRhIHhtbG5zOng9ImFkb2JlOm5zOm1ldGEvIiB4OnhtcHRrPSJBZG9iZSBYTVAgQ29yZSA1LjYtYzE0NSA3OS4xNjM0OTksIDIwMTgvMDgvMTMtMTY6NDA6MjIgICAgICAgICI+IDxyZGY6UkRGIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyI+IDxyZGY6RGVzY3JpcHRpb24gcmRmOmFib3V0PSIiIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIiB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIiB4bWxuczpzdEV2dD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL3NUeXBlL1Jlc291cmNlRXZlbnQjIiB4bXA6Q3JlYXRvclRvb2w9IkFkb2JlIFBob3Rvc2hvcCBDQyAyMDE5IChXaW5kb3dzKSIgeG1wOkNyZWF0ZURhdGU9IjIwMjAtMDgtMjdUMDk6NTQ6NTkrMDU6MDAiIHhtcDpNb2RpZnlEYXRlPSIyMDIwLTA4LTI3VDEwOjA0OjMwKzA1OjAwIiB4bXA6TWV0YWRhdGFEYXRlPSIyMDIwLTA4LTI3VDEwOjA0OjMwKzA1OjAwIiBkYzpmb3JtYXQ9ImltYWdlL3BuZyIgcGhvdG9zaG9wOkNvbG9yTW9kZT0iMyIgcGhvdG9zaG9wOklDQ1Byb2ZpbGU9IkFkb2JlIFJHQiAoMTk5OCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NWMzM2QyZGUtYzA4Ny1hMDQ4LWIxYTYtMDcwZmU2NzU3NGU3IiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjdjM2FjZDA3LTRlNzMtYmI0Mi1hYmJhLTY2NjQ0YjA5ZGRlYSIgeG1wTU06T3JpZ2luYWxEb2N1bWVudElEPSJ4bXAuZGlkOjdjM2FjZDA3LTRlNzMtYmI0Mi1hYmJhLTY2NjQ0YjA5ZGRlYSI+IDx4bXBNTTpIaXN0b3J5PiA8cmRmOlNlcT4gPHJkZjpsaSBzdEV2dDphY3Rpb249ImNyZWF0ZWQiIHN0RXZ0Omluc3RhbmNlSUQ9InhtcC5paWQ6N2MzYWNkMDctNGU3My1iYjQyLWFiYmEtNjY2NDRiMDlkZGVhIiBzdEV2dDp3aGVuPSIyMDIwLTA4LTI3VDA5OjU0OjU5KzA1OjAwIiBzdEV2dDpzb2Z0d2FyZUFnZW50PSJBZG9iZSBQaG90b3Nob3AgQ0MgMjAxOSAoV2luZG93cykiLz4gPHJkZjpsaSBzdEV2dDphY3Rpb249InNhdmVkIiBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjVjMzNkMmRlLWMwODctYTA0OC1iMWE2LTA3MGZlNjc1NzRlNyIgc3RFdnQ6d2hlbj0iMjAyMC0wOC0yN1QxMDowNDozMCswNTowMCIgc3RFdnQ6c29mdHdhcmVBZ2VudD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTkgKFdpbmRvd3MpIiBzdEV2dDpjaGFuZ2VkPSIvIi8+IDwvcmRmOlNlcT4gPC94bXBNTTpIaXN0b3J5PiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PsyDZAcAAADGSURBVFiF3dZBDsIwDETRb8T9rxxWiMo0iZOwmGE27aaSX1vHjtYa/5LHwbNyb2EX09JVIjuYDJABrWJ6hUuAVjCjguO0kF+kipGHQA1jAYE5xgYCY4wVBPoYOwjcYywh8I2xhQA8L/ezwScxGDsJ+HwZ5ULLOdma5fLGyPdDJdeeCcwPgPybjQqW76u7nrEF9Q4AS9DoNLMDzY5mK1BlztiAqkPTArSyAciDVteZHkhioO7sZrlwCQjsL5qRrhI52ZqlIAAvSrcePWi2F7AAAAAASUVORK5CYII=);
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
`;

const FullScreenContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 10px;
    background-color: #1f1f1f;
`;

const FullScreenPhoto = styled.img`
    width: 100%;
    object-fit: contain;
`;

const FullScreenFooter = styled.footer`
    width: 100%;
    margin-top: 15px;
`;

export default ShowFullscreeen;
