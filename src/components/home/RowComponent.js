import styled from "styled-components";

// font-family, rem으로 수정
const StyledTitle = styled.h2`
  margin-bottom: 11px;
  font-weight: 700;
  font-size: 20px;
  color: #000000;
`;

const StyledRow = styled.div`
  white-space: nowrap;
`;

const StyledBox = styled.div`
  display: inline-block;
  width: ${(props) => props.width}px;
  height: 150px;
  margin-right: 16px;
  margin-bottom: 31px;
  background: #838383;
  border-radius: 8px;
`;

const RowComponent = ({ title, width, height }) => {
  return (
    <>
      <StyledTitle>Netflix 인기 콘텐츠</StyledTitle>
      <StyledRow>
        <StyledBox width="272" />
        <StyledBox width="272" />
        <StyledBox width="272" />
        <StyledBox width="272" />
        <StyledBox width="272" />
        <StyledBox width="272" />
        <StyledBox width="272" />
        <StyledBox width="272" />
      </StyledRow>

      <StyledTitle>지금 뜨는 콘텐츠</StyledTitle>
      <StyledRow>
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
      </StyledRow>

      <StyledTitle>일본 영화 & TV프로그램</StyledTitle>
      <StyledRow>
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
      </StyledRow>

      <StyledTitle>Netflix 오리지널</StyledTitle>
      <StyledRow>
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
      </StyledRow>

      <StyledTitle>오늘 한국의 TOP10 TV프로그램</StyledTitle>
      <StyledRow>
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
      </StyledRow>

      <StyledTitle>한국 TV 프로그램&로맨틱</StyledTitle>
      <StyledRow>
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
        <StyledBox width="200" />
      </StyledRow>
    </>
  );
};

export default RowComponent;

// const StyledTitle = styled.h2``;
// const StyledBox = styled.div``;
