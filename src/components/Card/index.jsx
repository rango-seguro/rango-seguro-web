import React from 'react';

import './style.css'

const Card = props =>{
return(
    <div className="card text-center m-5">
        <div className="overflow">
            <img src={props.imgsrc} alt="imagem 1" className="rounded-circle border-top border-danger"/>
        </div>
        <div className="card-body-text-dark">
            <h4 className="card-title">
                <p className="card-text-secondary">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas nihil, modi alias deserunt amet similique a ea at ducimus numquam!
                </p>
                <a href="#" className=" btn btn-primary">Go anywhere</a>
            </h4>
        </div>
    </div>
    );
}

export default Card;