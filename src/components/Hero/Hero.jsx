import React from "react";
import './Hero.css';
import LottieAnimation from "../../assets/lottie/lottie";
function Hero() {
    return (
        <div className="Hero_main space-x-4">

            <div className="Hero_txt ml-10">
                <h1 className="text-left text-6xl">The Ultimate <br />
                    <span className="gradient_txt">
                        Online Payment
                    </span><br />
                    Solution
                </h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.</p>
                <button>Get Started</button>
            </div>

            <div className="main_inner">
            <div className="inner"></div>
            <LottieAnimation/>
            
            </div>


            <div className="Hero_customer">
                <div className="Hero_customer1">
                    <h1>100%</h1>
                    <p>Secured Transaction</p>
                </div>
                <div className="Hero_customer1">
                    <h1>4.9/5</h1>
                    <p>Client Rating</p>
                </div>
                <div className="Hero_customer1">
                    <h1>99%</h1>
                    <p>Secure Payment</p>
                </div>
            </div>


        </div>
    )
}
export default Hero;