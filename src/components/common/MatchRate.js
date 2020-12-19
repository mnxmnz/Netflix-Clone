import styled from 'styled-components'


const StyledRate = styled.span`
    font-weight: bold;
    font-size: 1.4rem;
    line-height: 1.6rem;
    color: #01CD68;
    @media only screen and (max-width: 768px) {
      font-size: 1.2rem;
  }
`

const MatchRate = ({MatchRateNumber}) => {
    return(<StyledRate>{MatchRateNumber}% 일치</StyledRate>)
}

export default MatchRate;