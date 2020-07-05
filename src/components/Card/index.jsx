import React from 'react';
import faca from '../../assets/faca.png'

import './style.css'

const Card = props =>{
return(
    <div className="card text-center m-3">
        <div className="overflow">
            <div className="row p-3">
                <img src={faca} alt="imagem 1" className="col-sm-2 w-25 h-25"/>
                <img src={props.imgsrc} alt="imagem 1" className="col-sm-8 rounded-circle border-top border-danger w-50"/>
            </div>
        </div>
        <div className="card-body-text-dark">
            <h4 className="card-title">
                <b>Le Mondiẽ</b>
                <p className="card-text-secondary p-2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil, modi alias deserunt amet similique a ea at ducimus numquam!
                </p>
                <a href="#" className=" btn btn-primary">Go anywhere</a>
            </h4>
        </div>
    </div>
    );
}

export default Card;