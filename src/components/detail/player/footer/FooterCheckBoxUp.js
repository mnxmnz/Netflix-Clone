import styled from 'styled-components';
import {ReactComponent as Up}  from '../../../../assets/detailheadericon/btn_sqtu_unpressed.svg'
import {ReactComponent as CheckUp}  from '../../../../assets/detailheadericon/btn_sqtu_pressed.svg'

const Unvisible = styled.input`
	display: none;
`
const StyledUp = styled(Up)`   
    width:100%;
    color:#ffffff;
    cursor: pointer;
`
const StyledCheckUp = styled(CheckUp)`   
    width:100%;
    color:#ffffff;
    cursor: pointer;
`
const FooterCheckBoxUp = ({checked,ClickHandler}) => {
    return checked?  
        <>
            <Unvisible type="checkbox" id="cb3" checked={checked} onChange={ClickHandler}/>
            <label htmlFor="cb3"><StyledCheckUp/></label>
        </>
        :
        <>
            <Unvisible type="checkbox" id="cb3" checked={checked} onChange={ClickHandler}/>
            <label htmlFor="cb3" ><StyledUp/></label>
        </>
}

export default  FooterCheckBoxUp;