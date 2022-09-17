import React from 'react'

function Header() {
    return <>

        <header>
            <section className="container main-hero-container">
                <div className="row">
                    <div className="col-12 col-lg-6 header-left-side d-flex justify-content-center flex-column align-items-start">
                        <h1 className="display-2"> MOCK Test</h1>
                        <p className="mian-hero-para">
                            These is for MCA Students....jhfdakdbsfvbnuafdhyfgkhunracd
                            jdfykbcnraafdsfvrbafduihgntvdyfbgfirKADSNGYVIRVHFADSNGVADFHUXNVAJ
                            DSANFUIYVDFBXHGNDBKJGVDHF
                            FYBAVYFDGVBNGFDBKGVNJAJ
                            daafjbcadfbhacnvafdbvhaahfdbvknbviakbf dhvfbc
                        </p>
                        <h3> Get easrly access</h3>
                        <div className="input-group mt-3">
                            <input  type="text" 
                                    className="rounded-pill w-50 w-lg-75 me-3 p-2 form-control-text" 
                                    placeholder="Enter Your Email"
                            />
                            <div className="input-group-button">Get it Now</div>
                        </div>
                    </div>

                    {/* ------------------------ main header right side ------------------------ */}
                    <div className="col-12 col-lg-6 header-right-side d-flex justify-content-center align-items-center main-herosectionn-images">
                        <img src='./Images/hero1.jpg' alt='heroimg' className='img-fluid' />
                        <img src='./Images/hero4.jpg' alt='heroimg' className='img-fluid main-hero-img2' />
                    </div>

                </div>
            </section>
        </header>
    </>

}

export default Header