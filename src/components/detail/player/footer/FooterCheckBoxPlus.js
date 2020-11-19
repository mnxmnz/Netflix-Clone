import styled from 'styled-components';
import {ReactComponent as Plus}  from '../../../../assets/detailheadericon/btn_sqcheck_unpressed.svg'
import {ReactComponent as CheckPlus} from '../../../../assets/detailheadericon/btn_sqcheck_pressed.svg'

const Unvisible = styled.input`
	display: none;
`
const StyledPlus = styled(Plus)`   
    width:100%;
    color:#ffffff;
    cursor: pointer;
`
const StyledCheckPlus = styled(CheckPlus)`
    width:100%;
    color:#ffffff;
    cursor: pointer;
`

const FooterCheckBoxPlus = ({checked,ClickHandler}) => {
    return checked?  
        <>
            <Unvisible type="checkbox" id="cb2" checked={checked} onChange={ClickHandler}/>
            <label htmlFor="cb2"><StyledCheckPlus/></label>
        </>
        :
        <>
            <Unvisible type="checkbox" id="cb2" checked={checked} onChange={ClickHandler}/>
            <label htmlFor="cb2" ><StyledPlus/></label>
        </>

    
}

export default  FooterCheckBoxPlus;