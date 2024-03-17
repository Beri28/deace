import './Hero.css'
const Hero = () => {
    return ( 
        <div>
            <div className="container hero d-lg-flex d-none">
                <div className="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg h-100 position-relative">
                    <div className="col-lg-7 p-3 p-lg-5 pt-lg-3">
                        <img src="/assets/img/img-12.png" className='position-absolute img-fluid custom-sticker shadow rounded-3' style={{top:"1em",left:"15em",transform:"rotate(20deg)"}} alt="deco-1" />
                        <img src="/assets/img/img-10.png" className='position-absolute img-fluid custom-sticker ct-2 shadow rounded-3' style={{top:"8em",left:"35em",transform:"rotate(0deg)"}} alt="deco-1" />
                        <img src="/assets/img/img-11.png" className='position-absolute img-fluid custom-sticker ct-3 shadow rounded-3' style={{top:"20em",left:"45em",transform:"rotate(320deg)"}} alt="deco-1" />
                        <img src="/assets/img/img-10.png" className='position-absolute img-fluid custom-sticker shadow rounded-3' style={{top:"20em",left:"5em",transform:"rotate(0deg)"}} alt="deco-1" />
                        <h1 className="display-4 fw-bold lh-1">Bringing to life unique elegant designs</h1>
                        <p className="lead"></p>
                    </div>
                    <div className="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg h-100">
                        <img className="rounded-lg-3 img-fluid hero-img" src="assets/img/img-8.jpg" alt="" width="720" />
                    </div>
                </div>
            </div>
            <div className="hero-mobile d-lg-none shadow border rounded-3">
                    <div className="hero-overlay d-flex align-items-center position-relative">
                        <img src="/assets/img/img-12.png" className='position-absolute img-fluid custom-sticker shadow rounded-3' style={{top:"-4em",left:"8em",transform:"rotate(20deg)"}} alt="deco-1" />
                        <img src="/assets/img/img-10.png" className='position-absolute img-fluid custom-sticker ct-3 shadow rounded-3' style={{top:"36em",left:"9em",transform:"rotate(320deg)"}} alt="deco-1" />
                        <div className="col p-3 hero-mobile-content">
                            <h1 className="display-4 fw-bold lh-1 hhm">Bringing to life unique elegant designs</h1>
                            <p className="lead text-light">
                                Start your new fashion journey at <span><i className='fas fa-dove px-1'></i> DEACE. 
                                Discover our collection of outfits. Whether casual,elegant or classic, we got you!</span>
                            </p>
                        </div>
                    </div>
            </div>
        </div>
     );
}
 
export default Hero;