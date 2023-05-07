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
                     <h1>
                        Daily <span>Disscount</span>
                     </h1>
                  </div>
                  <div className="pramotionSectionTracing pramotionIconSetup">
                     <TracingIcon />
                     <h1>
                        Live <span>Tracing</span>
                     </h1>
                  </div>
                  <div className="pramotionSectionDelivery pramotionIconSetup">
                     <DeliveryIcon />
                     <h1>
                        Quick<span> Delivery </span>
                     </h1>
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
                     <div className="pramotionCardContentRightPlayStore">
                        <a href="#">
                           <PlayStoreIcon />
                           <div className="playStoteText">
                              <p>GET IT ON</p>
                              <h5>Google Play</h5>
                           </div>
                        </a>
                     </div>
                     <div className="pramotionCardContentRightAppleStore">
                        <a href="#">
                           <AppleStoreIcon />
                           <p>Download on the </p>
                           <h5>App Store</h5>
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
