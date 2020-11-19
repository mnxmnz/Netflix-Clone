import { useState } from 'react';
import FooterCheckBoxUp from '../../../../components/detail/player/footer/FooterCheckBoxUp'


const UpContainer = () => {
    const [checked, setChecked] = useState(false);

    const ClickHandler = (e) => {
        if(checked){
            setChecked(false)
        }else{
            setChecked(true)
        }
    }

    return <FooterCheckBoxUp checked={checked} ClickHandler={ClickHandler}  />
}

export default UpContainer;