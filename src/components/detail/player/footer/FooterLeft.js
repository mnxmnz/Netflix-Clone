import BlankTop from "../../../common/BlankTop"
import DownLoadButton from "../../../common/DownLoadButton"

const { default: styled } = require("styled-components")
const { default: PlayButton } = require("../../../common/PlayButton")
const { default: FooterLeftBottom } = require("./FooterLeftBottom")

const StyledFooterLeft = styled.div`
    margin : 0 2rem;
`

const FooterLeft = ({windowWidth}) => {
    console.log({windowWidth})
    return (
         <StyledFooterLeft>
             <PlayButton DesktopWidth='13' DesktopHeight='4' MobileWidth='40'/>
             <BlankTop DesktopMargin='1' MobileMargin='1'/>
             {windowWidth>'768' ? <FooterLeftBottom /> : <DownLoadButton DesktopWidth='13' DesktopHeight='4' MobileWidth='40'/> }
         </StyledFooterLeft>
            )
}

export default FooterLeft;