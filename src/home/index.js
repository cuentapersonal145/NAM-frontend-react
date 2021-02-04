import {React} from 'react'

import List from '../globalComponents/List'
import Header from './components/HeaderHome'

import img_logo from '../img/logo-sin-fondo.png'
import img_slogan from '../img/slogan.png'
import opc1 from '../img/opc1.png'

import './index.css'

const elements = [
    { id: "productos", nombre: "Productos", imagen: opc1, color: "#e5e7fa" }
]

const HomeView = () => {
    return (
        <div className="page">
            <div className="card-home">
                <Header logo={img_logo} slogan={img_slogan}/>
            </div>
            <br />
            <div className="card-home">
                <List context={""} list={elements}/>
            </div>
        </div>
    )
}

export default HomeView
