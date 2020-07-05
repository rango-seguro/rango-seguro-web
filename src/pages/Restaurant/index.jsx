import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../components/Header'

import './style.css'

import cover1 from '../../assets/cover1.png'
import term from '../../assets/icon-term.png'
import limpeza from '../../assets/badges/limpeza.png'
import masc from '../../assets/badges/masc.png'
import alcool from '../../assets/badges/alcool.png'
import cook from '../../assets/badges/cook-record.png'
import tapete from '../../assets/badges/tapete.png'
import lav from '../../assets/badges/lavat.png'
import uber from '../../assets/uber.png'
import rappi from '../../assets/rappi.png'
import ifood from '../../assets/ifood.png'
import seumenu from '../../assets/seumenu.png'

const Restaurant = () => {
  return (
    <>
      <Header />

      <Link to="/map-navigation">
        <strong>buscar no mapa</strong>
      </Link>

      <div className="p-3">
        <div className="row row-each">
          <img
            src={cover1}
            alt="imagem do restaurante"
            className="w-50 rounded-circle col-sm-5"
          />
          <div className="col-sm-3">
            <h6 className="text-info mb-0">Le Bondiê</h6>
            <b className="text-secondary"> Restaurante italiano</b>
            <br />
            <a
              href="#"
              alt="km de distância"
              className="btn btn-outline-info btn-sm mt-3"
            >
              1,5 km distância
            </a>
          </div>
        </div>

        <h4 className="px-3 pt-5 pb-0 text-secondary">
          <img src={term} width="8%" alt="" /> Rangômetro
        </h4>
        <br />
        <div className="row px-3 pt-0">
          <span
            class="fa-stack fa-2x badger"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Conquista Orgânicos"
          >
            <i class="fa fa-certificate fa-stack-2x golden-badge"></i>
            <img src={masc} alt="" width="10%" className="fa fa-sm fa-stack" />
          </span>
          <span
            class="fa-stack fa-2x badger"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Conquista Social"
          >
            <i class="fa fa-certificate fa-stack-2x silver-badge"></i>
            <img src={alcool} alt="" width="5%" className="fa fa-sm fa-stack" />
          </span>
          <span
            class="fa-stack fa-2x badger"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Conquista de Vendas"
          >
            <i class="fa fa-certificate fa-stack-2x bronze-badge"></i>
            <img src={cook} alt="" width="5%" className="fa fa-sm fa-stack" />
          </span>
          <span
            class="fa-stack fa-2x badger"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Conquista Social"
          >
            <i class="fa fa-certificate fa-stack-2x bronze-badge"></i>
            <img src={lav} alt="" width="5%" className="fa fa-sm fa-stack" />
          </span>
          <span
            class="fa-stack fa-2x badger"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Conquista de Vendas"
          >
            <i class="fa fa-certificate fa-stack-2x silver-badge"></i>
            <img src={tapete} alt="" width="5%" className="fa fa-sm fa-stack" />
          </span>
        </div>
        <h4 className="mt-5 btn btn-block btn-info">
          <i class="fa fa-cutlery" aria-hidden="true"></i> Cardápio
        </h4>
        <hr />
        <h6>Área do estabelecimento: 160m²</h6>
        <h4 className="p-3 text-secondary">
          <i class="fa fa-users fa-2x" aria-hidden="true"></i> Lotação: 3 de 10
        </h4>
        <div class="progress">
          <div
            class="progress-bar w-25 bg-info"
            role="progressbar"
            aria-valuenow="0"
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
      <footer class="footer mt-auto py-3 bg-light text-muted">
        <div class="container">
          <span>Deliverys</span>
          <div className="row">
            <div className="">
              <a href="#">
                <img src={uber} alt="" width="15%" className="pl-3" />
              </a>
              <a href="#">
                <img src={rappi} alt="" width="20%" className="pl-3" />
              </a>
              <a href="#">
                <img src={ifood} alt="" width="20%" className="pl-3" />
              </a>
              <a href="#">
                <img src={seumenu} alt="" width="15%" className="pl-3" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Restaurant
