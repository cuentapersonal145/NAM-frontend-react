import {React} from 'react'

import './HeaderHome.css'

const HeaderHome = (props) => {
    return (
        <div className="container1">
            <div className="container1_1">
                <img src={props.logo} className="logo" alt="logo" />
            </div>
            <div className="container1_2">
                <img src={props.slogan} className="slogan" alt="slogan" />
            </div>
        </div>
    )
}

export default HeaderHome
