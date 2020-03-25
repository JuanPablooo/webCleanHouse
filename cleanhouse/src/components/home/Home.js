import React, { Component } from "react";
import "./home.css";

export default class Home extends Component {
  render() {
    return (
      <div>
        <section className="bg-blue text-white" id="section-header">
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-7 mt-5">
                <div className="">
                  <h1 className="display-4">Descomplique a sua vida</h1>
                  <p className="mt-4 lead ml-3">
                    Economize seu tempo! A clean house é a plataforma mais
                    prática de encontrar profissionais de confiança para cuidar
                    da sua casa.
                  </p>
                  <div className="ml-auto d-flex mt-4" width="200px">
                    <button className="btn btn-blue-dark btn-radius ml-auto">
                      Cadastre-se
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5"></div>
            </div>
          </div>
        </section>

        <section className="text-gray" id="section-o-que-somos">
          <div className="container">
            <div className="row">
              <div className="col-md-7"></div>
              <div className="col-md-5">
                <h1 className="text-blue-dark text-capitalize mt-5">
                  O que somos?
                </h1>
                <div className="text-gray mt-5">
                  <p>
                    Criada no ano de 2020 por um time de sócios desenvolvedores,
                    a CleanHouse é o caminho certo para aqueles que buscam
                    facilidade e confiabilidade.
                  </p>
                  <p>
                    Somos a mais nova Startup brasileira (Magic Code) e atuamos
                    no segmento de serviços domésticos.
                  </p>
                  <p>
                    Atualmente a nossa plataforma conta com centenas de
                    profissionais cadastrados e um time de gestores competentes,
                    que fazem da CleanHouse a escolha certa para manter o
                    equilíbrio e a limpeza do seu lar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separador-de-sessao mt-5"></div>
        </section>

        <section className="text-gray bg-blue" id="section-como-funciona">
          <div className="container bg-white">
            <div className="marcador bg-blue ml-auto mr-auto"></div>

            <h1 className="text-brown text-capitalize mt-5">Como funciona?</h1>

            <div className="row mt-5">
              <div className="col-md-6"></div>
              <div className="col-md-6 pr-5">
                <p>
                  A plataforma simplifica a contratação, trazendo benefícios
                  para ambos os usuários, utilizando o sistema de localização
                  que mostra o profissional ou cliente mais próximo da sua casa.
                </p>
                <p className="mt-3">
                  O intuito da CleanHouse é aproximar pessoas que precisam de
                  serviços domésticos e profissionais dispostos a realizar esse
                  serviço.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="text-white bg-blue-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex border-bottom border-white">
                <div className="justify-content-center align-self-center">
                  <h1 className="text-capitalize mt-5 mb-5">pagamento</h1>
                  <p className="ml-auto mr-auto col-8 text-center mb-5">
                    Recebimento do pagamento ocorre de forma segura, diretamente
                    da plataforma. Além disso, a renda de cada serviço realizado
                    é de 95% para cada funcionário
                  </p>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section>

        <section className="text-white bg-blue-dark">
          <div className="container">
            <div className="row">
              <div className="col-md-6 d-flex">
                <div className="justify-content-center align-self-center">
                  <h1 className="text-capitalize mt-5 mb-5">SERVIÇOS</h1>
                  <p className="ml-auto mr-auto col-9 text-center">
                    Limpeza: Empregados (as) que limpam todos os cômodos da sua
                    casa
                  </p>
                  <p className="ml-auto mr-auto col-9 text-center">
                    Cozinha: Empregados (as) que fazem o preparo da sua comida
                  </p>
                  <p className="ml-auto mr-auto col-9 text-center">
                    Roupas: Empregados (as) que lavam e passam suas roupas
                  </p>
                </div>
              </div>
              <div className="col-md-6"></div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
