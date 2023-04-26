import React from "react";
import "./style.css";
import { Row, Col } from "reactstrap";

const OfferCard = ({
   offer = "Offer",
   img = "",
   cardHead = "Card Head",
   offerRemainingTime = "Offer Remaining Time ",
}) => {
   return (
      <div className="parent">
         <div ClassName="productOfferCard">
            <div className="offerTop">
               <div className="offerProduct">
                  <img src={img} alt="Card Pic" />
               </div>
               <div className="offer">
                  <Row>
                     <Col lg={6}>
                        <h1>{offer}</h1>
                     </Col>
                     <Col lg={6} className="offerUnit">
                        <span className="upper">%</span>
                        <span className="bottom">Off</span>
                     </Col>
                  </Row>
                  <div className="offerRight"></div>
               </div>
            </div>
            <div className="offerBottom">
               <p>{cardHead}</p>
               <div className="offerTimer">
                  <p>{offerRemainingTime}</p>
               </div>
            </div>
         </div>
      </div>
   );
};

export default OfferCard;
