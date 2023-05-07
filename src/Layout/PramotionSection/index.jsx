import "./pramotionSection.css";
import DisscountIcon from "src/components/icons/DisscountIcon";
import TracingIcon from "src/components/icons/TracingIcon";
import DeliveryIcon from "src/components/icons/DeliveryIcon";
import iphone from "src/Assets/Images/PramotionSection/Image.png";
import PlayStoreIcon from "src/components/icons/PlayStoreIcon";
import AppleStoreIcon from "src/components/icons/AppleStoreIcon";

const PramotionSection = () => {
   return (
      <div className="pramotionSection">
         <div className=" pramotionSectionMain container">
            <div className="pramotionCard">
               <div className="pramotionCardBox">
                  <div className="pramotionSectionDisscount pramotionIconSetup">
                     <DisscountIcon />
                     <h3>
                        Daily <br />
                        Disscount
                     </h3>
                     <div className="divider"></div>
                  </div>
                  <div className="pramotionSectionTracing pramotionIconSetup">
                     <TracingIcon />
                     <h3>
                        Live <br /> Tracing
                     </h3>
                     <div className="divider"></div>
                  </div>
                  <div className="pramotionSectionDelivery pramotionIconSetup ">
                     <DeliveryIcon />
                     <h3>
                        Quick <br /> Delivery
                     </h3>
                  </div>
               </div>
            </div>
            <div className="pramotionCardContent">
               <div className="pramotionCardContentLeft">
                  <img src={iphone} alt="" />
               </div>
               <div className="pramotionCardContentRight">
                  <div className="pramotionCardContentRightHead">
                     <h1>Install the app</h1>
                     <p>
                        It's never been easier to order food. Look for the
                        finest discounts and you'll be lost in a world of
                        delectable food.
                     </p>
                  </div>
                  <div className="pramotionCardContentRightStore">
                     <div className="pramotionCardContentRightApp">
                        <a href="#">
                           <PlayStoreIcon />
                           <div className="storeText">
                              <p>GET IT ON</p>
                              <h4>Google Play</h4>
                           </div>
                        </a>
                     </div>
                     <div className="pramotionCardContentRightApp">
                        <a href="#">
                           <AppleStoreIcon />
                           <div className="storeText">
                              <p>Download on the </p>
                              <h4>App Store</h4>
                           </div>
                        </a>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default PramotionSection;
