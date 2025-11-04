import React from 'react'
import './css/about.css'
import Banner from './Banner'
import Footer from './Footer'
export default function About() {
  return (
    <div>
        <Banner />
        <div className="aboutMain">
            <div className="search">
                <a href="/">Home</a>
                <img
                    src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5baf79eb570913b9781a96f2_arrow-right-mini-icon.svg"
                    alt=""
                    className="breadcrumbs-arrow"
                />
                <a href="/about">About</a>
            
            </div>
            <div className="about-words">
                <p className='words-text'>All You Need is Fun!</p>
                <h1>Introducing ToyStore</h1>
                <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action.</p>
                <a href="#" class="link">More About Us</a>
               
            </div>
            <div className='imgs'>
                <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77fe7ca6c69b821cffc_about-image-p-2000.jpeg" alt=""  />
            </div> 
            <div className="about-words ab1">
                <p className='words-text'>Made for Webflow</p>
                <h1>Simple & Colorful Ecommerce Template for Your Business</h1>
            </div>  
            <div className="about-list">
                <div className="about-list1">
                    <div className="about-le">
                        <h2>Beautifully Designed</h2>
                        <div className="lines"></div>
                        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                        <a href="/">Get It for FREE!</a>
                    </div>
                    <div className="about-ri">
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77ee73150e2021b0db4_side-image-01-p-1080.jpeg" alt="" />
                    </div>
                </div>
                <div className="about-list1 mar-t">
                    
                    <div className="about-ri">
                        <img src="https://assets.website-files.com/5badda2935e11303a89a461e/5bb5c77f0b5b7843138dc3c3_side-image-02-p-1080.jpeg" alt="" />
                    </div>
                    <div className="about-le">
                        <h2>100% Responsive</h2>
                        <div className="lines"></div>
                        <p>A successful marketing plan relies heavily on the pulling-power of advertising copy. Writing result-oriented ad copy is difficult, as it must appeal to, entice, and convince consumers to take action. There is no magic formula to write perfect ad copy</p>
                        <a href="/" class="button w-button">Explore Our Toys</a>
                    </div>
                </div>
            </div> 
            <div className="xsphoto">
                <div className="xsmain">
                    <p>About The Shop</p>
                    <h2>Watch Our Story</h2>
                    <h4>There is no magic formula to write perfect ad copy. It is based on a number of factors, including ad placement, demographic, even the consumer’s mood.</h4>
                    <a href="#" class="play-button w-inline-block w-lightbox"><img src="https://cdn.prod.website-files.com/5badda2935e11303a89a461e/5bae5eec4b504f1c4031af32_play-icon-white.svg" alt="/catalog"/></a>
                </div>
            </div>       
        </div>
        <Footer />
    </div>
  )
}
