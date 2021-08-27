import React, {useState} from "react";
import {useDispatch} from "react-redux";
import styled from "styled-components";
import {likePhoto, unlikePhoto} from "../store/reducers/getDataFromUnsplash";

function Likes ({item, isAuth}) {
    const dispatch = useDispatch();
    const [likesCounter, setLikesCounter] = useState(item.likes);
    const [isLiked, setLiked] = useState(item.liked_by_user);

    function imgSrc () {
        if (!isLiked) {
            return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABWElEQVQ4jc2UsUpcURRF13kzI5pCMJV2OpIEQb9B0liIGMgHiJ2MGIhYpbOL2vkBIlgLwcLCQmsViV0UtJCkC6SLYGGybK5ymYxRnxYeOM3e+6x77oX34LlXNAtqDegHLoGziLhs8qtAL1AFTpv9yIIdwDwwAnxLA6+ADWAhxT4B48AJ8AcYALaA+Yi4yE/tUHfUKbXI9Ir6Qd1MPaNWMr9QG+q22p4DF9Wp295FnVan/+M31M83b6Ye5ps9tNKmh2q1AOrAUUT8LQtMs8dAvQAqQK0sLKsaUBTAd6DvCYB9wI8iIn4Dv9TXZUnqG+BnRJxfC2PqyiOAq+pos/hFfVcC9l5db2W8VL+qww+AvU0zXbcFetQDdeIesMmU7b4r2Jmuv6a+aOG3q8vpU2y9WYuhQp1T99TBTB9S99VZ9Z8/1X3Ag+qu+jH1bn5AqVLb1KXUbY+Clakrp7kYeRvuWdYAAAAASUVORK5CYII=";
        }
        return "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABvElEQVQ4jc3PP2hTURTH8e+5yUt8vhZtBxFBJUqxmM10qa1DBhfB1UUsFKQRwcVNUMzQuUMVadxd3ESdBAkodLDRQSu2FASraXFIppg/789xaBL02eefJIO/5d13zj0f7oH/PRIuZAorFgwfj2vct7c/fSzms164H5ORlK+eGd4qb4T7XXByYdN2nWYe1Tlgf7tcUSggzjyACWq3VJgDRtvDVeC+k4zni7OpRhecXNi03b2NZ8DU7mvICyUQkOndF9WXQ0nrbHE21TAArtPMR2EAip6JxgBkutbwbgNIprBiie77+sOaPUWg6mx/PmDEHzrWLwagMFI/eCRlYsYK+sU68SQIjCf2F8AfhJeo7SmbUu7QN9DiAMDny9cP183OWe70qwncbX93MrG0/hTkXC+YwpPSlbHzAKZTtOLuJWC9h7ettYLETOevCy5fTld8188qvP8H7Z1KK/v26tHqLyDAm2vjZcScBh7/BfYo1mKqlDu59dN7o25PLG3MgN4DnFCrLuiNV7mxRUQ0PBcJAmQKa+Oi5gFwql16rRJcLOVOfIia+S0IkH64mrAryXmA+mjz5uqFdOtPMwPNd/Isj5aD4sfMAAAAAElFTkSuQmCC";
    }

    return (
        <LikesCont
            onClick={() => {
                if (!isAuth) return;

                switch (isLiked) {
                case false:
                    setLikesCounter(++item.likes);
                    setLiked(true);
                    item.liked_by_user = true;
                    dispatch(likePhoto(item.id));
                    break;
                case true:
                    setLikesCounter(--item.likes);
                    setLiked(false);
                    item.liked_by_user = false;
                    dispatch(unlikePhoto(item.id));
                    break;
                default: break;
                }
            }}
        >
            <img alt="i have already liked it" src={imgSrc()} />
            <LikesCounterCont>{likesCounter}</LikesCounterCont>
        </LikesCont>
    );
}

const LikesCont = styled.div`
    display: flex;
    align-self: flex-end;
    align-items: center;
    margin-left: auto;
    padding: 5px;
    background-color: #42424230;
    border-radius: 5px;
    color: #ffffff90;
    cursor: pointer;
`;

const LikesCounterCont = styled.div`
    margin-left: 5px;
    transform: translateY(2px);
`;

export default Likes;
