import React from "react";
import styled from "styled-components";

const DetailInformationContent = () => {
    return (
        <>
            <StyledInformationOutline>
                <StyledInformationProfile>
                    <div>'도쿄'</div>
                </StyledInformationProfile>
                <StyledProfileContent>
                    <p>주연</p>
                    <p>우루술라<br></br>코르베로</p>
                </StyledProfileContent>
            </StyledInformationOutline>
        </>
    );
};

const StyledInformationOutline = styled.div`
    width: 100px;
    height: 165px;
    position: relative;
    background-color: #333333;
    border-radius: 6px 6px 6px 6px;
    margin: 1%;
`;

const StyledInformationProfile = styled.div`
    width: 100px;
    height: 100px;
    position: absolute;
    bottom: 39.52%;
    background-color: #c4c4c4;
    border-radius: 6px 6px 0px 0px;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
        background-color: #777777;
        
        & > div {
            display: block;
            font-weight: bold;
            font-size: 16px;
            line-height: 126%;
            letter-spacing: -0.06em;
            color: #ffffff;
            text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000, 4px 4px 4px rgba(0, 0, 0, 0.25);
        }
    }

    & > div {
        display: none;
    }
`;

const StyledProfileContent = styled.div`
    color: white;
    position: absolute;
    top: 60.48%;
    padding: 3%;

    & > p:nth-child(1) {
        font-weight: normal;
        font-size: 14px;
        line-height: 126%;
        letter-spacing: -0.06em;
        color: #777777;
        padding: 1%;
    }

    & > p:nth-child(2) {
        font-weight: normal;
        font-size: 14px;
        line-height: 119%;
        color: #ffffff;
        padding: 1%;
    }
`;

export default DetailInformationContent;
