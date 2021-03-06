import React from "react";
import "./Home.css";
import Navbar from "../Navbar";

export default function Home(props) {
  return (
    <>
      <Navbar />
      <div>
        <section className="bg-blue text-white" id="section-header">
          <div className="container">
            <div className="row pb-5">
              <div className="col-md-7 mt-5">
                <div className="">
                  <h1 className="display-4">Descomplique a sua vida</h1>
                  <p className="mt-4 lead ml-3">
                    Economize seu tempo! A Clean House é a plataforma mais
                    prática de encontrar profissionais de confiança para cuidar
                    da sua casa.
                  </p>
                  <div className="ml-auto d-flex mt-4" width="200px">
                    <button
                      className="btn btn-blue-dark btn-radius ml-auto"
                      onClick={() => {
                        props.history.push("/cadastro");
                      }}
                    >
                      Cadastre-se
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-md-5">
                <div className="img-header d-none d-md-block"></div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-gray" id="section-o-que-somos">
          <div className="container">
            <div className="row">
              <div className="col-md-7"></div>
              <div className="col-md-5">
                <h1 className="text-blue-dark lead text-title text-capitalize mt-5">
                  Quem somos?
                </h1>
                <div className="text-gray mt-4">
                  <p>
                    Criada no ano de 2020 por um time de sócios desenvolvedores,
                    a Clean House é o caminho certo para aqueles que buscam
                    facilidade e confiabilidade.
                  </p>
                  <p>
                    Somos a mais nova Startup brasileira (Magic Code) e atuamos
                    no segmento de serviços domésticos.
                  </p>
                  <p>
                    Atualmente a nossa plataforma conta com centenas de
                    profissionais cadastrados e um time de gestores competentes,
                    que fazem da Clean House a escolha certa para manter o
                    equilíbrio e a limpeza do seu lar.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separador-de-sessao mt-5"></div>
        </section>

        <section className="text-gray bg-blue">
          <div className="container bg-white" id="section-como-funciona">
            <div className="marcador bg-blue ml-auto mr-auto"></div>

            <div className="row mt-5 d-flex pb-3">
              <div className="col-md-6">
                <div className="img-como-funciona ml-auto mr-auto"></div>
              </div>
              <div className="col-md-6 pr-5  align-self-center">
                <h1 className="text-yellow text-left lead text-title text-capitalize mt-3 mb-5">
                  Como funciona?
                </h1>
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
          <div
            className="container border-bottom border-white pb-3"
            id="section-pagamento"
          >
            <div className="row">
              <div className="col-lg-4 col-md-4 mt-3 mb-3 pl-5 d-none d-sm-block">
                <div className="img-pagamento"></div>
              </div>
              <div className="col-lg-6 col-md-8 d-flex ">
                <div className="justify-content-center align-self-center">
                  <h1 className="text-uppercase text-center lead text-title mt-5 mb-5">
                    pagamento
                  </h1>
                  <p className="ml-auto mr-auto col-8 text-center mb-5">
                    Recebimento do pagamento ocorre de forma segura, diretamente
                    da plataforma. Além disso, a renda de cada serviço realizado
                    é de 95% para cada funcionário
                  </p>
                </div>
              </div>
              <div className="col-lg-1"></div>
            </div>
          </div>
        </section>

        <section className="text-white bg-blue-dark">
          <div className="container" id="section-serviços">
            <div className="row">
              <div className="col-lg-3 col-md-4 mt-3 mb-3 d-none d-sm-block">
                <div className="img-limpeza mr-auto "></div>
              </div>
              <div className="col-lg-5 col-md-8 d-flex">
                <div className="justify-content-center align-self-center">
                  <h1 className="text-uppercase text-center lead text-title mt-5 mb-5">
                    SERVIÇOS
                  </h1>
                  <p className="ml-auto mr-auto col-9 text-center">
                    Limpeza: profissionais que limpam todos os cômodos da sua
                    casa
                  </p>
                  <p className="ml-auto mr-auto col-9 text-center">
                    Cozinha: profissionais que fazem o preparo da sua comida
                  </p>
                  <p className="ml-auto mr-auto col-9 text-center mb-5">
                    Roupas: profissionais que lavam e passam suas roupas
                  </p>
                </div>
              </div>
              <div className="col-lg-4 mt-3 d-none d-lg-block">
                <div className="img-cozinha-roupas"></div>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="bg-yellow">
            <div className="container bg-white" id="section-vantagens">
              <h1
                className="text-center mt-5 lead text-capitalize text-yellow 
              text-title mb-5"
              >
                Conheça as nossas Vantagens
              </h1>
            </div>
          </div>

          <div className="skew negative bg-blue">
            <h2
              className="text-center lead text-subtitle pt-1 text-white 
                text-capitalize"
            >
              Para o profissional
            </h2>
          </div>

          <div className="container text-gray">
            <div className="row">
              <div className="col-md-12 mt-5">
                <div className="ml-auto mr-auto icon-vantagem icon-vantagem01 mb-3"></div>
                <p className="offset-md-4 col-md-4">
                  A cada serviço realizado, acontece uma avaliação para o
                  profissional. Quanto mais avaliações com 5 estrelas, o
                  profissional sobe seu ranking e pode ser premiado como mais
                  bem colocado nas listas.
                </p>
              </div>
              <div className="col-md-12 row">
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem02 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Trabalho totalmente autônomo. Sem chefes e com seus próprios
                    horários
                  </p>
                </div>
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem03 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Fácil processo para ser contratado (a). Basta se cadastrar e
                    aguardar um cliente.
                  </p>
                </div>
              </div>
              <div className="col-md-12 row mt-5 mb-5">
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem04 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Raio de localização acessível e escolhido pelo próprio
                    prestador de serviço.
                  </p>
                </div>
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem05 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Custo do trabalho é decidido pelo funcionário para que o
                    próprio adeque o dinheiro da condução.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="skew negative bg-blue">
            <h2
              className="text-center pl-2 lead text-subtitle pt-1 text-white 
                text-capitalize"
            >
              Para o cliente
            </h2>
          </div>

          <div className="container text-gray">
            <div className="row">
              <div className="col-md-12 row mt-5">
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem06 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Em apenas alguns cliques você encontra profissionais
                    capacitados à poucos metros de distância da sua casa.
                  </p>
                </div>
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem07 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Na nossa plataforma existe um sistema de avaliação, onde
                    você pode verificar a confiabilidade de nossos
                    colaboradores.
                  </p>
                </div>
              </div>

              <div className="col-md-12 row mt-5">
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem08 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Onde você escolhe o dia e a hora que deseja que o serviço
                    seja realizado.
                  </p>
                </div>
                <div className="col-md-6">
                  <div
                    className="ml-auto mr-auto icon-vantagem 
                    icon-vantagem09 mb-3"
                  ></div>
                  <p className="offset-md-1 col-md-10">
                    Com preços acessíveis a Clean House satifaz os seus
                    clientes.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="separador-de-sessao-small mt-5"></div>
        </section>

        <section>
          <div
            className="container text-gray pb-5 background-gray"
            id="section-regioes"
          >
            <h1
              className="text-center lead text-title text-capitalize mt-5
              text-blue-dark mb-3"
            >
              quais regiões nós atendemos?
            </h1>
            <div className="row mt-5">
              <div className="offset-md-2 col-md-4 img-regioes"></div>
              <div className="col-md-6 row">
                <div className="col-md-8 pl-3 mt-4 pt-1">
                  <p>
                    Atualmente os nossjos serviços estão disponíveis apenas para
                    a região metropolitana de São Paulo.
                  </p>
                  <a
                    href="https://emplasa.sp.gov.br/RMSP"
                    className="btn btn-primary btn-radius"
                    target="blank"
                  >
                    Veja o mapa
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="separador-de-sessao-small"></div>
        </section>

        <section>
          <div
            className="container lead background-gray"
            id="section-depoimentos"
          >
            <div className="row lead d-flex">
              <div className="col-12">
                <h1
                  className="text-center text-title lead mt-3 text-primary 
              text-capitalize mb-3"
                >
                  Depoimentos de alguns clientes
                </h1>
              </div>
              <div className="col-lg-4 col-md-6 align-self-center">
                <div
                  className="card card-depoimentos-clientes border border-primary
                  text-gray mb-5 mt-5"
                >
                  <div className="card-body">
                    <div
                      className="img-depoimentos img-cli1 ml-auto mr-auto mb-1"
                      id="img-depoimentos-01"
                    ></div>
                    <blockquote className="blockquote">
                      <p className="card-text">
                        “Melhor coisa que eu fiz esse ano foi ter me cadastrado,
                        agora a minha casa está sempre impecável. Para mim, que
                        trabalho o dia todo fora é uma maravilha, hoje mesmo vai
                        uma cozinheira lá em casa preparar o almoço de domingo.”
                      </p>
                      <footer className="blockquote-footer text-right">
                        por
                        <cite> Vitória Nunes</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 align-self-center pb-3">
                <div className="card card-depoimentos-clientes bg-primary text-white mb-5">
                  <div className="card-body">
                    <div
                      className="img-depoimentos img-cli2 ml-auto mr-auto mb-1"
                      id="img-depoimentos-01"
                    ></div>
                    <blockquote className="blockquote">
                      <p className="card-text">
                        “No começo tive desconfiança em relação a deixar um
                        desconhecido entrar na minha casa, mas o vídeo de
                        apresentação dos profissionais fez esse medo passar.
                        Hoje adoro os serviços e só vivo contratando. Parabéns
                        aos envolvidos”
                      </p>
                      <footer className="blockquote-footer text-white text-right">
                        por
                        <cite> Gustavo Ganabara</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 ml-md-auto mr-md-auto col-md-6 align-self-center">
                <div
                  className="card card-depoimentos-clientes border border-primary 
                  text-gray mb-5 mt-lg-5 mt-md-3"
                >
                  <div className="card-body">
                    <div
                      className="img-depoimentos img-cli3 ml-auto mr-auto mb-1"
                      id="img-depoimentos-01"
                    ></div>
                    <blockquote className="blockquote">
                      <p className="card-text">
                        “Serviços maravilhosos e a última profissional que
                        contratei me surpreendeu, por se tratar de algo online e
                        novo no mercado pensei que ela iria se atrasar e não
                        cumprir o combinado, pelo contrário, ela foi maravilhosa
                        super indico.“
                      </p>
                      <footer className="blockquote-footer text-right">
                        por
                        <cite> Gabriela Ferraz</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <h1
                  className="text-center mt-3 text-title lead text-blue-dark 
              text-capitalize mb-3"
                >
                  Depoimentos de alguns profissionais
                </h1>
              </div>
              <div className="col-lg-4 col-md-6 align-self-center">
                <div className="card bg-white text-gray border-blue-card mb-5 mt-5">
                  <div className="card-body">
                    <div
                      className="img-depoimentos img-pro1 ml-auto mr-auto mb-1"
                      id="img-depoimentos-01"
                    ></div>
                    <blockquote className="blockquote">
                      <p className="card-text">
                        “Simplesmente ameiiiii, melhor plataforma que já
                        utilizei para oferecer meus serviços, parabéns a toda
                        equipe!!!!”
                      </p>
                      <footer className="blockquote-footer text-right">
                        por
                        <cite> Maria Clara</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 align-self-center">
                <div className="card bg-blue-card text-white mb-5">
                  <div className="card-body">
                    <div
                      className="img-depoimentos img-pro2 ml-auto mr-auto mb-1"
                      id="img-depoimentos-01"
                    ></div>
                    <blockquote className="blockquote">
                      <p className="card-text">
                        “Eu estava há muito tempo fora do mercado de trabalho e
                        por ter mais de 40 anos encontrava várias portas
                        fechadas, a CleanHouse me ajudou muito. Muito obrigada
                        mesmo!!!”
                      </p>
                      <footer className="blockquote-footer text-white text-right">
                        por
                        <cite> Rúbia Mel</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 ml-md-auto mr-md-auto align-self-center">
                <div className="card bg-white text-gray mb-5 border-blue-card mt-lg-5 mt-md-3">
                  <div className="card-body">
                    <div
                      className="img-depoimentos img-pro3 ml-auto mr-auto mb-1"
                      id="img-depoimentos-01"
                    ></div>
                    <blockquote className="blockquote">
                      <p className="card-text">
                        “Aplicativo super confiável, fiz o meu primeiro serviço
                        ontem e não vejo a hora de ser contratado de novo, estou
                        muito feliz :D”
                      </p>
                      <footer className="blockquote-footer text-right">
                        por
                        <cite> Lucas Souza</cite>
                      </footer>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="bg-blue-dark">
          <div className="container text-white ">
            <div className="row">
              <div className="col-md-4">
                <div className="offset-md-1">
                  <p className="text-uppercase mt-5 mb-4">
                    Siga as nossas redes sociais
                  </p>
                  <div className="row">
                    <div className="col-md-8 d-flex justify-content-around">
                      <a className="redes-sociais" id="facebook"></a>
                      <a className="redes-sociais" id="instagram"></a>
                      <a className="redes-sociais" id="twitter"></a>
                    </div>
                    <div className="col-md-4"></div>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="d-flex flex-column align-items-center mt-5">
                  <a className="rodape-link mb-2">Fale Conosco</a>
                  <a className="rodape-link mb-2"> Termos de Uso </a>
                  <div>
                    <a
                      className="rodape-link"
                      onClick={() => {
                        props.history.push("/login");
                      }}
                    >
                      Entre
                    </a>{" "}
                    ou{" "}
                    <a
                      className="rodape-link"
                      onClick={() => {
                        props.history.push("/cadastro");
                      }}
                    >
                      Cadastre-se
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <p className="text-uppercase mt-5 mb-2 text-center">
                  baixe o nosso app
                </p>
                <div className="d-flex justify-content-center">
                  <button id="android" className="btn"></button>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
