import React from 'react'
import Preloader from '../Components/Preloader'
import Menu from '../Components/Menu'
import Hero from '../Components/Hero'
import Testimonial from '../Components/Testimonial'
import Footer from '../Components/Footer'

export default function Home() {
    return (
        <div>

            <Menu />
            <Hero />

            <div className="fancy-text-block-twentyOne mt-170 md-mt-100" id="about">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-6 col-md-7 m-auto" data-aos="fade-right" data-aos-duration="1200">
                            <div className="img-meta">
                                <img src="assets/images/media/img_72.png" alt="" className="m-auto" />
                                <img src="assets/images/shape/138.svg" alt="" className="shapes shape-one" />
                            </div>
                        </div>
                        <div className="col-xl-5 col-lg-6 ml-auto" data-aos="fade-left" data-aos-duration="1200">
                            <div className="text-wrapper md-pt-50">
                                <a className="fancybox" data-fancybox="" href="https://www.youtube.com/embed/aXFSJTjVjw0">
                                    <img src="assets/images/icon/71.svg" alt="" className="icon" />
                                </a>
                                <div className="client-info">Over <span>150,000+ client</span></div>
                                <p>We created over <span>27,000+</span> stunning and quality products over last 5 years with satisfaction.</p>
                                <div className="name">Carl Henderson</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="counter-style-two mt-150 md-mt-60">
                <div className="border-bottom">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200">
                                <div className="counter-box-four">
                                    <h2 className="number"><span className="timer" data-from="0" data-to="3" data-speed="1500" data-refresh-interval="5">0</span>k</h2>
                                    <p>Job done successfully</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="100">
                                <div className="counter-box-four">
                                    <h2 className="number"><span className="timer" data-from="0" data-to="20" data-speed="1200" data-refresh-interval="5">0</span>million</h2>
                                    <p>3,280 avg rating</p>
                                </div>
                            </div>
                            <div className="col-lg-4 col-sm-6" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="200">
                                <div className="counter-box-four">
                                    <h2 className="number"><span className="timer" data-from="0" data-to="3000" data-speed="1200" data-refresh-interval="5">0</span>+</h2>
                                    <p>Using Deski</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fancy-feature-eleven mt-130 md-mt-80" id="product">
                <div className="inner-container">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-8 col-lg-10 col-md-9 m-auto">
                                <div className="title-style-six text-center">
                                    <h6>Our Product</h6>
                                    <h2>We’ve  helping <span>customer</span> globally now.</h2>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="block-style-sixteen" style={{ background: "#EBF3F1" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6" data-aos="fade-right" data-aos-duration="1200">
                                    <div className="icon d-flex align-items-center justify-content-center" style={{ background: "#DEEAE7" }}><img src="assets/images/icon/73.svg" alt="" /></div>
                                    <h3 className="title">Mobile Application Design.</h3>
                                    <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.</p>
                                    <a href="#"><img src="assets/images/icon/72.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <img src="assets/images/assets/screen_02.png" alt="" className="shapes screen-one" />
                    </div>

                    <div className="block-style-sixteen" style={{ background: "#EDF3F9" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6 ml-auto" data-aos="fade-left" data-aos-duration="1200">
                                    <div className="icon d-flex align-items-center justify-content-center" style={{ background: "#E1E7ED" }}><img src="assets/images/icon/74.svg" alt="" /></div>
                                    <h3 className="title">Branding & Design system.</h3>
                                    <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.</p>
                                    <a href="#"><img src="assets/images/icon/72.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <img src="assets/images/assets/screen_03.png" alt="" className="shapes screen-two" />
                    </div>

                    <div className="block-style-sixteen" style={{ background: "#F9F1EF" }}>
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-5 col-lg-6" data-aos="fade-right" data-aos-duration="1200">
                                    <div className="icon d-flex align-items-center justify-content-center" style={{ background: "#EDE5E3" }}><img src="assets/images/icon/75.svg" alt="" /></div>
                                    <h3 className="title">Custome & Plugin Development.</h3>
                                    <p>Commonly used in the graphic, print & publishing industris for previewing visual layout and mockups.</p>
                                    <a href="#"><img src="assets/images/icon/72.svg" alt="" /></a>
                                </div>
                            </div>
                        </div>
                        <img src="assets/images/assets/screen_04.png" alt="" className="shapes screen-three" />
                    </div >
                </div >
                <img src="assets/images/shape/139.svg" alt="" className="shapes shape-one" />
                <img src="assets/images/shape/140.svg" alt="" className="shapes shape-two" />
            </div >
            <Testimonial />

            <Footer />
            <div className="modal fade modal-contact-popup-one" id="contactModal" tabIndex="-1" role="dialog" aria-labelledby="contactModalTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <main className="main-body modal-content clearfix">
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <img src="assets/images/icon/close.svg" alt="" />
                        </button>
                        <div className="left-side">
                            <div className="d-flex flex-column justify-content-between h-100">
                                <div className="row">
                                    <div className="col-xl-10 col-lg-8 m-auto">
                                        <blockquote>“I never dreamed about success. I worked for it.”</blockquote>
                                        <span className="bio">—Estée Lauder</span>
                                    </div>
                                </div>
                                <img src="assets/images/assets/ils_18.svg" alt="" className="illustration mt-auto" />
                            </div>
                        </div>
                        <div className="right-side">
                            <h2 className="form-title">Contact us</h2>
                            <form action="#" id="contact-form" data-toggle="validator">
                                <div className="messages"></div>
                                <div className="row controls">
                                    <div className="col-12">
                                        <div className="input-group-meta form-group mb-15">
                                            <label>Name</label>
                                            <input type="text" placeholder="Your Name" name="Fname"
                                                required="required" data-error="Name is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta form-group mb-35">
                                            <label>Email*</label>
                                            <input type="email" placeholder="Email Address" name="email"
                                                required="required" data-error="Valid email is required." />
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-12">
                                        <div className="input-group-meta form-group mb-25">
                                            <textarea placeholder="Your message" name="message" required="required" data-error="Please,leave us a message."></textarea>
                                            <div className="help-block with-errors"></div>
                                        </div>
                                    </div>
                                    <div className="col-12"><button className="theme-btn-seven w-100">Send Message</button></div>
                                </div>
                            </form>
                        </div>
                    </main>
                </div>

                <button className="scroll-top">
                    <i className="fa fa-angle-up" aria-hidden="true"></i>
                </button>



            </div>
        </div >
    )
}
