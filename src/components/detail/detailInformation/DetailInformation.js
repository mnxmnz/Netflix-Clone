import React from "react";
import styled from "styled-components";
import SeasonInner from "../maincombine/season/SeasonInner";
import BlankTop from "../../common/BlankTop";
import Title from "../../common/Tttle";
import DetailInformationContent from "./DetailInformationContent";
import LeftMoreButton from "./LeftMoreButton";
import RightMoreButton from "./RightMoreButton";

const DetailInformation = () => {
    return (
        <StyledButtonWrap id="contentWrap">
            <SeasonInner>
                <BlankTop DesktopMargin="10.2" MobileMargin="2.5" />
                <Title DesktopFontSize="2.4" MobileFontSize="1.5">
                    종이의 집 상세정보
                </Title>
                <BlankTop DesktopMargin="2.5" MobileMargin="2.5" />
                <StyledContentWrap>
                    <DetailInformationContent />
                    <DetailInformationContent />
                    <DetailInformationContent />
                    <DetailInformationContent />
                    <DetailInformationContent />
                    <DetailInformationContent />
                    <DetailInformationContent />
                    <DetailInformationContent />
                </StyledContentWrap>
            </SeasonInner>
            <LeftMoreButton />
            <RightMoreButton />
        </StyledButtonWrap>
    );
};

const StyledButtonWrap = styled.div`
    position: relative;
`;

const StyledContentWrap = styled.div`
    display: flex;
    overflow-x: scroll;
    white-space: nowrap;
    position: relative;
`;

export default DetailInformation;
