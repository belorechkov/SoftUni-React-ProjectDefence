import { Link } from "react-router-dom";


export default function Footer() {
    return (
        <div className="footer_section layout_padding">
            <div className="container">
                {/* <div className="row">
                    <div className="col-md-12">
                        <div className="location_text">
                            <ul>
                                <li>
                                    <Link to="#"><i className="fa fa-map-marker" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-phone" aria-hidden="true"></i></Link>
                                </li>
                                <li>
                                    <Link to="#"><i className="fa fa-envelope" aria-hidden="true"></i></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="social_icon">
                        <ul>
                            <li><Link to="#"><i className="fa fa-facebook" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-twitter" aria-hidden="true"></i></Link></li>
                            <li><Link to="#"><i className="fa fa-linkedin" aria-hidden="true"></i></Link></li>
                        </ul>
                    </div>
                </div> */}
                <div className="row" >
                    <div className="col-md-4">
                        <h3 className="footer_text">About Us</h3>
                        <p className="lorem_text">
                            At Upside, we specialize in providing exceptional real estate services, helping clients buy, sell, and rent properties with ease and confidence.</p>
                    </div>
                    <div className="col-md-4">
                        <div className="image_main" style={{ paddingLeft: "60px" }}>
                            <Link className="navbar-brand" to="/">
                                <img src="/images/logo.png" />
                            </Link>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <h3 className="footer_text">Useful Links</h3>
                        <div className="footer_menu">
                            <ul>
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/blog">Book</Link></li>
                                <li><Link to="/properties">Properties</Link></li>
                                <li><Link to="contact-us">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}