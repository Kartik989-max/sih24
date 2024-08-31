import './Hero2.css'
function Hero2(){
    return(
    <div>
        <div className="Hero2_main flex text-left">
            <div className="Hero2_cards flex-1">
                <div className="cards">
                    <div className="cards1 flex">
                    <div className="card card11">
                        <div className="card_txt">
                            <h1 className='text-2xl pb-2'>Bank Account</h1>
                        <p className='text-ls'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    <div className="card card12">
                    <div className="card_txt">
                            <h1 className='text-2xl pb-2'>Easy Payment</h1>
                        <p className='text-ls'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    </div>
                    <div className="cards2 flex">
                    <div className="card card21">
                    <div className="card_txt">
                            <h1 className='text-2xl pb-2'>Secure Transaction</h1>
                        <p className='text-ls'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>  <div className="card card22">
                    <div className="card_txt">
                            <h1 className='text-2xl pb-2'>Bank Transfer</h1>
                        <p className='text-ls'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="Hero2_txt flex-1">
              
                <div className="inner2"></div>
                <h1 className='z-10 pt-3 pb-3'>Your money, Your way, <br /> <span className='gradient_txt'>Our guarantee</span> </h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec</p>
                <button>Get Started</button>
            </div>  
        </div>
    </div>
    )
}

export default Hero2;