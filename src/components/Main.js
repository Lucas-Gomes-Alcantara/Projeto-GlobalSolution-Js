import React from 'react';
import './css/main.css'

const Main = () => {
    return (
        <section className="container">
            <h1 class="title">VacTrack</h1>
            <div className="first-section gray-background">
                <div className="images-container">
                    <img src="./imgs/paisagem.jpg" alt="Imagem 1" className="main-image"/>
                </div>
                <div className="text-blocks-right">
                    <h2>O que é a solução</h2>
                    <p>Desenvolver um aplicativo de rastreamento de vacinas que forneça aos
                        usuários um meio conveniente e eficiente de monitorar seu histórico de vacinação. O
                        objetivo é promover a conscientização sobre as vacinas necessárias, oferecer
                        lembretes personalizados e facilitar o acesso às informações de vacinação,
                        contribuindo assim para a prevenção de doenças.</p>
                    <h2>O que ela fará</h2>
                    <p>Histórico de vacinação digital: Os usuários podem inserir e manter um registro
                        digital de suas vacinas ao longo do tempo.</p>
                    <p>Lembretes personalizados: O aplicativo enviará alertas para lembrar os
                        usuários sobre vacinas necessárias com base em seu histórico e calendário
                        de vacinação.</p>
                    <p>Detalhes da vacina: Fornece informações educacionais sobre cada vacina,
                        incluindo benefícios, efeitos colaterais e datas recomendadas.</p>
                    <p>Integração de calendário: Permite a sincronização do calendário de vacinação
                        com a agenda pessoal do usuário.</p>
                    <p>Notificações em tempo real: Informar sobre campanhas de vacinação, novas
                        recomendações e atualizações importantes.</p>
                    <p>Acesso compartilhado: Possibilitar o compartilhamento seguro do histórico de
                        vacinação com profissionais de saúde, familiares ou cuidadores.</p>
                    <h2>Como funcionará</h2>
                    <p>Um aplicativo de rastreamento de vacinas intuitivo e eficaz, oferecendo uma
                        solução abrangente para o gerenciamento do histórico de vacinação dos usuários. Os
                        usuários devem ter acesso fácil às informações, receber lembretes personalizados e
                        contribuir ativamente para a promoção da saúde pública através da prevenção de
                        doenças evitáveis.</p>
                </div>
                <div className="text-blocks">
                    <h2 className="small-title">Qual a ideia?</h2>
                    <div className="text-block">
                        Desenvolver um aplicativo de rastreamento de vacinas para facilitar o acesso ao histórico, oferecer lembretes e promover a prevenção de doenças, visando uma gestão eficaz da imunização.</div>
                    <button className="info-button">Mais Informações</button>
                </div>
            </div>

            <div className="advantages-section">
                <h2>Vantagens</h2>
                <div className="advantage-container">
                    <div className="advantage">
                        <img src="./imgs/pexels-cottonbro-studio-3952236.jpg" alt="Vantagem 1"/>
                            <div className="advantage-text">
                                <h3>Histórico Digital de Vacinação</h3>
                                <p>Registre digitalmente suas vacinas ao longo do tempo para um acompanhamento fácil.</p>
                            </div>
                    </div>
                    <div className="advantage">
                        <img src="./imgs/pexels-karolina-grabowska-4047148.jpg" alt="Vantagem 2"/>
                            <div className="advantage-text">
                                <h3>Lembretes Personalizados</h3>
                                <p>Receba alertas para lembrar das vacinas necessárias com base no seu histórico.</p>
                            </div>
                    </div>
                    <div class="advantage">
                        <img src="./imgs/pexels-karolina-grabowska-4047184.jpg" alt="Vantagem 3"/>
                            <div class="advantage-text">
                                <h3>Informações Detalhadas</h3>
                                <p>Acesse informações educacionais sobre cada vacina, incluindo benefícios e efeitos colaterais.</p>
                            </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Main;
