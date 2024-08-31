import React from 'react'
import LottieAnimation2 from '../../assets/lottie/hero3Lottie'

function Hero3() {
    return (
        <div>
            <div className="Hero3 flex text-left p-4  pt-20  ">
                <div className="Hero3_txt flex-1 pl-16 pb-2">
                    <h1 className='pb-4'>You can send money on your <span className='gradient_txt'> finger tips </span></h1>
                    <p className='pb-5 text-base'>Lorem ipsum dolor sit amet consectetur. Scelerisque tincidunt nibh molestie nisi egestas nulla massa. Scelerisque ipsum sem sed nisi molestie tortor tincidunt. Lacus nisl eget egestas tempor consequat.Malesuada tincidunt quam quis phasellus dolor enim congue lacus. </p>

                    <div className="Hero_customer flex flex-row text-center">
                        <div className="Hero_customer1 ">
                            <h1  className='text-4xl'>100%</h1>
                            <p>Secured</p>
                        </div>
                        <div className="Hero_customer1 pl-8">
                            <h1 className='text-4xl'>4.9/5</h1>
                            <p>Client Rating</p>
                        </div>
                        <div className="Hero_customer1 pl-8">
                            <h1 className='text-4xl'>99%</h1>
                            <p>Payment</p>
                        </div>
                    </div>

                </div>
                <div className="img flex-1">
                    <LottieAnimation2/> 
                </div>
            </div>
        </div>
    )
}

export default Hero3
