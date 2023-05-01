import React from "react";
import "./style.css";
import { Row, Col } from "reactstrap";
import PropTypes from "prop-types";

const OfferCard = ({ data }) => {
   const { offer, img, cardHead, offerRemainingTime } = data;
   return (
      <div className="parent">
         <div ClassName="productOfferCard">
            <div className="offerTop">
               <div className="offerProduct">
                  <img src={img} alt="Card Pic" />
               </div>
               <div className="offer">
                  <Row>
                     <Col xs={6} sm={6} md={6} lg={6}>
                        <h1>{offer}</h1>
                     </Col>
                     <Col xs={6} sm={6} md={6} lg={6} className="offerUnit">
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

OfferCard.propTypes = {
   data: PropTypes.shape({
      offer: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      cardHead: PropTypes.string.isRequired,
      offerRemainingTime: PropTypes.string.isRequired,
   }).isRequired,
};

export default OfferCard;
