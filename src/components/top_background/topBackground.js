import React from "react";

import './topBackground.sass';
import no_img from './no-img.jpeg'


// imgUrl = `http://api.programator.sk/images/1000x600/movies/cosmos_1.jpg`


const TopBackground = ({imgUrl}) => { 

    if (typeof(imgUrl) == 'undefined') { imgUrl = no_img  }

    return (
        <div className='backgr_wrapper'>
            {/* <!--  BLURED_TOP_BG  style={{ backGrSrs: imgUrl }}  --> */}
            <img src={imgUrl} alt="backgr_img" className="backgr_img" />
            {/* <!--  BLURED_TOP_BG  --> */}
        </div>
    )
}

export default TopBackground;