import React from 'react';
import { Link } from 'react-router-dom'
import faca from '../../assets/faca.png'

import './style.css'

const Card = props =>{
return(
    <a href="/restaurant">
    <div className="card text-center m-3">
        <div className="overflow">
            <div className="row p-3">
                <img src={faca} alt="imagem 1" className="col-sm-2 w-25 h-25"/>
                <img src={props.imgsrc} alt="imagem 1" className="col-sm-8 rounded-circle border-top border-danger w-50"/>
            </div>
        </div>
        <div className="card-body text-dark">
            <h4 className="card-title">
                <b>Le Mondiẽ</b>
                <p className="card-text-secondary p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil, modi alias deserunt amet similique a ea at ducimus numquam!
                </p>
            </h4>
            <div className="row">
                <a href="#" className="btn btn-outline-danger col-sm-6 disabled">1,5 Km distante</a>
                <a href="#" className="btn btn-outline-success col-sm-6 disabled">100%</a>
            </div>
        </div>
    </div></a>
    );
}

export default Card;