import React from 'react';

import Aux from '../../../Aux';
import Banner from '../../components/Banner/Banner';
import TitleInfo from '../../components/TitleInfo/TitleInfo';

const CandyCrushSaga = (props) => {
    return (
        <Aux>
            <Banner type={"image"} url={"/images/games/thumbnails/CandyCrushSaga.png"} />
            <TitleInfo
                title={"Candy Crush Saga"}
                date={"2017 - current"}
                subtext={"Candy crush saga is an addicting game"}
            />
        </Aux>
    )
}

export default CandyCrushSaga;