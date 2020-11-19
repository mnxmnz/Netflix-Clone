import { useState } from 'react';
import FooterCheckBoxDown from '../../../../components/detail/player/footer/FooterCheckBoxDown'


const DownContainer = () => {
    const [checked, setChecked] = useState(false);

    const ClickHandler = (e) => {
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }


    return <FooterCheckBoxDown checked={checked} ClickHandler={ClickHandler}  />
}

export default DownContainer;