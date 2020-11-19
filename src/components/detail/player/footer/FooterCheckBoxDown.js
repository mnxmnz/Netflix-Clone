import styled from 'styled-components';
import {ReactComponent as Down}  from '../../../../assets/detailheadericon/btn_sqtd_unpressed.svg'
import {ReactComponent as CheckDown} from '../../../../assets/detailheadericon/btn_sqtd_pressed.svg'
const Unvisible = styled.input`
	display: none;
`
const StyledDown = styled(Down)`   
    width:100%;
    color:#ffffff;
    cursor: pointer;

`
const StyledCheckDown = styled(CheckDown)`   
    width:100%;
    color:#ffffff;
    cursor: pointer;

`

const FooterCheckBoxDown = ({checked,ClickHandler}) => {
       return checked?  
        <>
            <Unvisible type="checkbox" id="cb1" checked={checked} onChange={ClickHandler}/>
            <label htmlFor="cb1"><StyledCheckDown/></label>
        </>
        :
        <>
            <Unvisible type="checkbox" id="cb1" checked={checked} onChange={ClickHandler}/>
            <label htmlFor="cb1" ><StyledDown/></label>
        </>
        
    

}

export default FooterCheckBoxDown;