import "./footer.css";
import InstaIcon from "src/components/icons/InstaIcon";
import FacebookIcon from "src/components/icons/FacebookIcon";
import TwitterIcon from "src/components/icons/TwitterIcon";
import IconButton from "src/components/Button";

const Footer = () => {
   return (
      <div className="footerSection">
         <div className="footerSectionMain container">
            <div className="footerSectionMainContent">
               <div className="footerSectionMainContentTop">
                  <div className="footerSectionMainContentCities">
                     <div className="cities">
                        <ul>
                           <h6>Our top cities</h6>
                           <li>Kanpur</li>
                           <li>Lucknow </li>
                           <li>Ghaziabad</li>
                           <li>Agra</li>
                           <li>Meerut</li>
                        </ul>
                        <ul>
                           <li>Kanpur</li>
                           <li>Lucknow </li>
                           <li>Ghaziabad</li>
                           <li>Agra</li>
                           <li>Meerut</li>
                        </ul>
                        <ul>
                           <li>Kanpur</li>
                           <li>Lucknow </li>
                           <li>Ghaziabad</li>
                           <li>Agra</li>
                           <li>Meerut</li>
                        </ul>
                        <ul>
                           <li>Kanpur</li>
                           <li>Lucknow </li>
                           <li>Ghaziabad</li>
                           <li>Agra</li>
                           <li>Meerut</li>
                        </ul>
                        <ul>
                           <li>Kanpur</li>
                           <li>Lucknow </li>
                           <li>Ghaziabad</li>
                           <li>Agra</li>
                           <li>Meerut</li>
                        </ul>
                     </div>
                  </div>
               </div>
               <div className="footerSectionMainContentBottom">
                  <div className="footerInfo">
                     <div className="footerCompany">
                        <ul>
                           <h6>Company</h6>
                           <li>About us</li>
                           <li>Team</li>
                           <li>Careers</li>
                           <li>Blog</li>
                        </ul>
                     </div>
                     <div className="contact">
                        <ul>
                           <h6>Contact</h6>
                           <li>Help & Support</li>
                           <li>Partner with us </li>
                           <li>Ride with us</li>
                        </ul>
                     </div>
                     <div className="legal">
                        <ul>
                           <h6>Lagal</h6>
                           <li>Terms & Conditions</li>
                           <li>Refund & Cancellation</li>
                           <li>Privacy Policy</li>
                           <li>Cookie Policy</li>
                        </ul>
                     </div>
                  </div>
                  <div className="footerSocial">
                     <div className="follows">
                        <h6>FOLLOW US</h6>
                        <div className="fotterSocialIcon">
                           <div>
                              <InstaIcon />
                           </div>
                           <div>
                              <FacebookIcon />
                           </div>
                           <div>
                              {" "}
                              <TwitterIcon />
                           </div>
                        </div>
                     </div>
                     <div className="footerSocialForm">
                        <p>Receive exclusive offers in your mailbox</p>
                        <div className="inputAndBtn">
                           <input type="text" placeholder="Enter your mail" />
                           <IconButton label="Subscribe" color="footerBtn" />
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Footer;
