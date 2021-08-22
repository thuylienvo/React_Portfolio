import React from 'react';
import Footer from '../components/Footer';
import mimiImg from '../assets/imgs/mimi.jpeg'
import misoImg from '../assets/imgs/miso.png'
import movieImg from '../assets/imgs/moviemixer.png'
import beyondImg from '../assets/imgs/beyond.png'

function Home () {
    return (
        <>
        {/* HOME */}
            <div className="mb-5"> 
                <div className="container jumbo-container">
                    <div className="row homeImg mb-3">
                        <h3 className="text-center">M I M I | V O </h3>
                        <img src={mimiImg} style={{height: '40rem'}} alt="me" className="img-fluid" />
                    </div>
                    <div className="hide text-center">
                        <p className="sneakPeek text-center my-3">Sneak Peek</p>
                        <a href="#designSneakPeek"><i className="fas fa-arrow-circle-down text-center socialMedia fa-3x" /></a>
                    </div>
                </div>
            </div>
 
            <div className="container pb-4 pt-4">
            <h4 className="text-center sneakHeader"> P R O J E C T S </h4>
            </div>
            <div className="container homeSneak">
                <div className="row ">
                    <div className="col-2" />
                    <div className="col-3">
                        <div className="card justify-content-end" style={{width: '18rem'}}>
                            <img src={movieImg} className="card-img-top round" alt="moviemixer" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={misoImg} className="card-img-top round" alt="miso" />
                        </div>
                    </div>
                    <div className="col-3">
                        <div className="card" style={{width: '18rem'}}>
                            <img src={beyondImg} className="card-img-top round" alt="beyond" />
                        </div>
                    </div>
                    {/* <div className="col-1" /> */}
                </div>
            </div>
        <Footer></Footer>
      </>
    );
  };

export default Home;