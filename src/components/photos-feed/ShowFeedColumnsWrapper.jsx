import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ShowFeedItem from "./ShowFeedItem.jsx";

function ShowFeedColumnsWrapper ({photosList}) {
    const [numberForAdapt, setNumberForAdapt] = useState(null);
    const columns = numberForAdapt ? setColumns() : [];
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

    function setColumns () {
        const primaryColumnsArr = [];
        for (let iter = 0; iter < numberForAdapt; iter++) {
            primaryColumnsArr[iter] = [];
        }
        for (let iter = 0, jter = 0; jter < photosList.length; iter++, jter++) {
            iter = iter === numberForAdapt ? 0 : iter;
            primaryColumnsArr[iter].push(photosList[jter]);
        }
        return primaryColumnsArr;
    }

    useEffect(() => {
        if (!numberForAdapt) checkWindowWidth();
    });

    return (
        <ColumnsWrapper id="columns-wrapper">
            {
                columns.map(column => {
                    return (
                        <Column key={columns.indexOf(column)}>
                            {
                                column.map(item => {
                                    return (
                                        <ShowFeedItem item={item} key={item.id} />
                                    );
                                })
                            }
                        </Column>
                    );
                })
            }
        </ColumnsWrapper>
    );
}

const ColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    overflow: hidden;
`;

const Column = styled.ul`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding: 0 5px;
`;

export default ShowFeedColumnsWrapper;
