import { FaMobileAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";
import { FaMapMarkerAlt } from "react-icons/fa";
import EdusionWhite from "../Assets/Images/EdusionWhite.png";
function Footer() {
  return (
    <div className="footerPadding">
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-xs-12">
            <div className="footerImage">
              <img src={EdusionWhite} alt="Home 2" />{" "}
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
                vitae risus nec dui venenatis dignissim.
              </p>
            </div>
          </div>

          <div className="col-lg-8 col-md-12 col-xs-12">
            <div className="row">
              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="single_footer">
                  <h4>Courses</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">Creative Writing</a>
                    </li>
                    <li>
                      <a href="#">Digital Marketing</a>
                    </li>
                    <li>
                      <a href="#">SEO Business</a>
                    </li>
                    <li>
                      <a href="#">Social Marketing</a>
                    </li>
                    <li>
                      <a href="#">Graphic Design</a>
                    </li>
                    <li>
                      <a href="#">Website Development</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="singleFooter">
                  <h4>Company</h4>
                  <ul className="menu">
                    <li>
                      <a href="#">About us</a>
                    </li>
                    <li>
                      <a href="#">Knowledge Base</a>
                    </li>
                    <li>
                      <a href="#">Affiliate Program</a>
                    </li>
                    <li>
                      <a href="#">Community</a>
                    </li>
                    <li>
                      <a href="#">Market API</a>
                    </li>
                    <li>
                      <a href="#">Support Team</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="col-lg-4 col-md-4 col-sm-6 col-12">
                <div className="singleFooter">
                  <h4>Contact Info</h4>
                  <div className="singleFooterContact">
                    <span className="miniMobile">
                      <h3>Phone Number</h3>
                      <p>
                        <FaMobileAlt style={{ marginRight: "8px" }} />
                        +88 457845 695
                      </p>
                    </span>
                  </div>
                  <div className="singleFooterContact">
                    <span className="miniEmail">
                      <h3>Email Address</h3>
                      <p>
                        {" "}
                        <FaEnvelope style={{ marginRight: "8px" }} />
                        example@yourmail.com
                      </p>
                    </span>
                  </div>
                  <div className="singleFooterContact">
                    <span className="miniMap">
                      <h3>Location</h3>
                      <p>
                        <FaMapMarkerAlt style={{ marginRight: "8px" }} />
                        California, USA
                      </p>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row footerBtm fc">
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footerCopyRight">
              <p>© 2025 Edusion. All Rights Reserved</p>
            </div>
          </div>
          <div className="col-lg-6 col-sm-6 col-xs-12">
            <div className="footerMenu">
              <ul>
                <li>
                  <a href="#">Terms & Conditions</a>
                </li>
                <li>
                  <a href="#">Special</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
