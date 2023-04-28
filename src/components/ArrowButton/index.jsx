import "./arrowButton.css";

const ArrowButton = ({ img, customClass, onClick = () => {} }) => {
   return (
      <div>
         <button className={`scrollBtn ${customClass}`} onClick={onClick}>
            <img src={img} alt="" />
         </button>
      </div>
   );
};

export default ArrowButton;
