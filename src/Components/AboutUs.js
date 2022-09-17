import React from 'react'

const AboutUs = () => {
    return (
        <>
            <section className="common-section our-services">
                <div className="container mb-5">
                    <div className="row">
                        <div className="col-12 col-lg-5 text-center our-servce-leftside-img">
                            <img src="./images/hero3.jpg" alt="AboutUsIMG" /></div>
                        {/* section 1 right side Data */}
                        <div className="col-12 col-lg-7 our-services-list">
                        <h3 className="mini-title">
                        -- AVAILABLE @ GOOGLE AND IOS APP STORE ONLY
                        </h3>
                        <h1 className="main-heading">How to use the App?</h1>
                        <div className="row our-services-info">
                        <div className="col-1 our-services-number">1
                        </div>
                        <div className="col-10 our-services-data">
                        <h2>Sign In</h2>
                        <p className="main-hero-para">
                            iohfdsusdk ihgsiodfj uhsugi ufdshgi uifgs ungfi ungs nusfjvc 
                            hsdguhiu fdsvihksf bifsudgv uigfvbh fibvhs snfk bsf bvfshcssg kbjs
                            hvksbfhgnjkvsbgfv unsvgb gfrskj njvksbh hkfbv  jkhkbgs khb bfhbgsntuufdk?
                        </p>
                        </div>

                        </div>
                        <br/>
                        <button className="btn-style btn-style-border">Learn More</button>

                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default AboutUs