import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ShowFeedItem from "./ShowFeedItem.jsx";

function ShowFeedColumnsWrapper (props) {
    const {photosList} = props;
    const [numberForAdapt, setNumberForAdapt] = useState(null);
    const columns = [];
    for (let iter = 0; iter < numberForAdapt; iter++) {
        columns[iter] = [];
    }

    function checkWindowWidth () {
        if (window.innerWidth > 1024 && numberForAdapt !== 3) {
            setNumberForAdapt(3);
        }
        if (window.innerWidth <= 1024 && window.innerWidth > 575 && numberForAdapt !== 2) {
            setNumberForAdapt(2);
        }
        if (window.innerWidth < 575 && numberForAdapt !== 1) {
            setNumberForAdapt(1);
        }
    }

    window.onresize = () => {
        checkWindowWidth();
    };

    useEffect(() => {
        if (!numberForAdapt) {
            checkWindowWidth();
        }
    });

    for (let iter = 0, jter = 0; jter < photosList.length; iter++, jter++) {
        iter = iter === numberForAdapt ? 0 : iter;
        columns[iter].push(photosList[jter]);
    }

    return (
        <StColumnsWrapper>
            {
                columns.map(column => {
                    return (
                        <SrColumn key={columns.indexOf(column)}>
                            {
                                column.map(item => {
                                    return (
                                        <ShowFeedItem item={item} key={item.id} />
                                    );
                                })
                            }
                        </SrColumn>
                    );
                })
            }
        </StColumnsWrapper>
    );
}

const StColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

const SrColumn = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 5px;
`;

export default ShowFeedColumnsWrapper;
