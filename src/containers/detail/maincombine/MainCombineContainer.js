
import { useState } from "react";
import MainCombine from "../../../components/detail/maincombine/MainCombine";

const MainCombineContainer = ({windowWidth}) => {
    const [navCheck, setNavCheck] = useState('1');

    const onNavCheckHandler = (e) => {
        const CheckNumber = e.target.id;
        setNavCheck(CheckNumber);
    }

    return <MainCombine windowWidth={windowWidth} onNavCheckHandler={onNavCheckHandler} navCheck={navCheck}/>
}

export default MainCombineContainer;