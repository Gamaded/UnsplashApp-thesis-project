import React, {useState, useEffect} from "react";
import styled from "styled-components";
import ShowFeedItem from "./ShowFeedItem.jsx";

function ShowFeedColumnsWrapper (props) {
    const {photosList} = props;
    const [numberForAdapt, setNumberForAdapt] = useState(null);
    const columnA = [];
    const columnB = [];
    const columnC = [];

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

    for (let iter = 0, jter = 0; jter < photosList.length; iter++, jter++) {
        iter = iter === numberForAdapt ? 0 : iter;
        switch (iter) {
        case 0:
            columnA.push(photosList[jter]);
            break;
        case 1:
            columnB.push(photosList[jter]);
            break;
        case 2:
            columnC.push(photosList[jter]);
            break;
        default: break;
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

    return (
        <StColumnsWrapper>
            <ul>
                {
                    columnA.map(item => {
                        return (
                            <ShowFeedItem item={item} key={item.id} />
                        );
                    })
                }
            </ul>
            <ul>
                {
                    columnB.map(item => {
                        return (
                            <ShowFeedItem item={item} key={item.id} />
                        );
                    })
                }
            </ul>
            <ul>
                {
                    columnC.map(item => {
                        return (
                            <ShowFeedItem item={item} key={item.id} />
                        );
                    })
                }
            </ul>
        </StColumnsWrapper>
    );
}

const StColumnsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
`;

export default ShowFeedColumnsWrapper;
