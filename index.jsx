var Currículo = React.createClass({
  render: function() {
    return (
      <div>
        {/*Metadados*/}
        <meta charSet="utf-8" />
        <meta name="author" content="Desenvolvido por Daviid Henrique" />
        <meta name="description" content="Venham e conheçam um pouco sobre minha carreira e experiência. Currículo Vitae de David Henrique, apresentando seus projetos e aplicações e aplicações na área de informática." />
        <meta name="keyword" content="CV, curriculo, vitae, informática, web designer, desenvolvedor, david" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0" />
        {/*Links*/}
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css" />
        <link rel="stylesheet" href="css/fontes.css" />
        <link rel="stylesheet" href="css/larguras.css" />
        <link rel="shortcut icon" href="img/ico.jpg" />
        {/*Título da Página*/}
        <title>Currículo Vitae - David Henrique</title>
        {/*Container da página*/}
        <div className="w3-content w3-magin-top larg-pagina">
          {/*Grid da Pagina*/}
          <div className="w3-row-padding">
            {/*Coluna da esquerda*/}
            <div className="w3-third">
              {/*Bloco da Esquerda*/}
              <div className="w3-white text-grey w3-grid-4">
                {/*Bloco da Esquerda-*/}
                <div className="w3-container w3-content w3-card w3-white w3-margin-bottom">
                  {/*Display da Imagem*/}
                  <div className="w3-display-container">
                    {/*Imagem do Perfil*/}
                    <img src="img/perfil.jpg" alt="David Henrique" className="larg-img-perfil" />
                    {/*Nome do Peril*/}
                    <div className="w3-dsiplay-bottomleft w3-container w3-text-teal">
                      <h2>David Henrique</h2>
                    </div>
                  </div>
                  {/*Conteúdo da Esquerda*/}
                  <div className="w3-container">
                    {/*Profissão ou Estado de Formação*/}
                    <p><i className="fa fa-briefcase fa-fw w3-margin-right w3-large w3-text-teal" />Estudante de Informática</p>
                    {/*Residência*/}
                    <p><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Itu-SP, Brasil</p>
                    {/*Endereço de Email*/}
                    <p><i className="fa fa-envelope fa-fw w3-margin-right w3-large w3-text-teal" />Davidextremelock@gmail.com</p>
                    {/*Telefone*/}
                    <p><i className="fa fa-phone fa-fw w3-margin-right w3-large w3-text-teal" />(11) 94524-3671</p>
                    <hr />
                    {/*Subtítulo de Habilidades*/}
                    <p className="w3-large">
                      <b className="w3-text-grey"><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Habilidades</b>
                    </p>
                    {/*1ºHabilidade*/}
                    <p>Adobe Photoshop</p>
                    {/*Barrinha Cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal primeira-habilidade">70%</div>
                    </div>
                    {/*2ºHabilidade*/}
                    <p>Adobe Illustrator</p>
                    {/*Barrinha Cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal segunda-habilidade">80%</div>
                    </div>
                    {/*3ºHabilidade*/}
                    <p>Adobe Premiere</p>
                    {/*Barrinha Cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal terceira-habilidade">90%</div>
                    </div>
                    {/*4ºHabilidade*/}
                    <p>HTML e CSS</p>
                    {/*Barrinha Cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal quarta-habilidade">100%</div>
                    </div>
                    {/*Subtítulo de Habilidades*/}
                    <p className="w3-large">
                      <b className="w3-text-grey"><i className="fa fa-home fa-fw w3-margin-right w3-large w3-text-teal" />Idiomas</b>
                    </p>
                    {/*1ºIdioma*/}
                    <p>Inglês</p>
                    {/*Barrinha Cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal primeiro-idioma">75%</div>
                    </div>
                    {/*2ºidioma*/}
                    <p>Espanhol</p>
                    {/*Barrinha Cinza*/}
                    <div className="w3-light-grey w3-round-xlarge w3-small">
                      {/*Barrinha verde*/}
                      <div className="w3-container w3-center w3-round-xlarge w3-teal segudo-idioma">30%</div>
                    </div>
                    <br />
                  </div>
                  <br />
                </div>
              </div>
            </div>
            {/*Coluna da direita*/}
            <div className="w3-twothird">
              {/*Bloco da Experiência-*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                {/*Experiências*/}
                <h2 className="w3-container w3-text-grey w3-padding-16">
                  {/*Ícone Experiência*/}
                  <i className="fa fa-suitcase fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                  Experiências
                </h2>
                {/*Container das Experiências*/}
                <div className="w3-container">
                  <h5 className="w3-text-grey"><b>Aluno de Informática - Microcamp</b></h5>
                  <h6>
                    <i className="fa fa-calendar fa-fw w3-text-teal" />
                    Out-2017
                    {/*Box Verde*/}
                    <span className="w3-round w3-tag w3-teal">Atualmente</span>
                  </h6>
                  {/*Descrição da Experiência*/}
                  <p>Agora sendo Estudante no 2°ano do Ensino Médio e fazendo cursos de Inglês e Informática na escola Microcamp</p>
                </div>
                {/*Container das Experiências*/}
                <div className="w3-container">
                  <h5 className="w3-text-grey"><b>Aluno de Inglês - Microcamp</b></h5>
                  <h6>
                    <i className="fa fa-calendar fa-fw w3-text-teal" />
                    Out-2021 até 2023
                    {/*Box Verde*/}
                    <span className="w3-round w3-tag w3-teal">Atualmente</span>
                  </h6>
                  {/*Descrição da Experiência*/}
                  <p>Estudando Inglês na escola Microcamp</p>
                </div>
              </div>
              {/*Bloco Educação*/}
              <div className="w3-content w3-card w3-white w3-margin-bottom">
                <div>{/*Educação*/}
                  <h2 className="w3-container w3-text-grey w3-padding-16">
                    {/*Ícone Educação*/}
                    <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                    Educação
                  </h2>
                  {/*Container de Educação*/}
                  <div className="w3-container">
                    {/*Descrição da Formação*/}
                    <h5 className="w3-opacity"><b>Analista de Sistemas</b></h5>
                    {/*Data da Formação*/}
                    <h6 className="w3-text-teal">
                      <i className="fa fa-calendar fa-fw w3-text-teal">
                      </i>2021 - 2022
                    </h6>
                    {/*Resumo da formação*/}
                    <p>Faço a segurança de qualquer empresa, desenvolvo sistemas para proteger empresas no mundo inteiro - Microcamp</p>
                  </div>
                  {/*Bloco Educação*/}
                  <div className="w3-content w3-card w3-white w3-margin-bottom">
                    <div>{/*Educação*/}
                      <h2 className="w3-container w3-text-grey w3-padding-16">
                        {/*Ícone Educação*/}
                        <i className="fa fa-graduation-cap fa-fw w3-margin-right w3-xxlarge w3-text-teal" />
                        Educação
                      </h2>
                      {/*Container de Educação*/}
                      <div className="w3-container">
                        {/*Descrição da Formação*/}
                        <h5 className="w3-opacity"><b>Engenharia da computação</b></h5>
                        {/*Data da Formação*/}
                        <h6 className="w3-text-teal">
                          <i className="fa fa-calendar fa-fw w3-text-teal">
                          </i>2021 - 2022
                        </h6>
                        {/*Resumo da formação*/}
                        <p>Sou especialista em construção de Hardwares como teclado, mouse, monitor, etc.</p><br />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div></div></div></div>
    );
  }
});