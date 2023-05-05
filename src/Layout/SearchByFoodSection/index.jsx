import { useRef } from "react";
import "./SearchByFoodSection.css";
import SectionHeader from "src/components/SectionHeader";
import { ArrowButton } from "src/components";
import { FaAngleRight } from "react-icons/fa";
import RightArrow from "src/Assets/Images/Icons/IconRightArrow.svg";
import LeftArrow from "src/Assets/Images/Icons/IconLeftArraow.svg";
import searchFoodSectionData from "src/data/searchFood-section.data";
import SearchByFood from "src/components/SearchByFood";

const SearchByFoodSection = () => {
  const scrollContainerSearchRef = useRef(null);
  const handleLeftButtonClick = () => {
    scrollContainerSearchRef.current.scrollLeft -= 300;
  };
  const handleRightButtonClick = () => {
    scrollContainerSearchRef.current.scrollLeft += 300;
  };

  return (
    <div className=" searchMain">
      <div className="container">
        <div className="searchSub ">
          <header>
            <SectionHeader Text="Search By Food" />
          </header>
          <div className="searchView">
            <p>
              View All <FaAngleRight />
            </p>
            <div className="arrowView">
              <ArrowButton
                img={LeftArrow}
                customClass="sliderButton"
                onClick={handleLeftButtonClick}
              />
              <ArrowButton
                img={RightArrow}
                customClass="sliderButton"
                onClick={handleRightButtonClick}
              />
            </div>
          </div>
        </div>
        <div className="searchFoodMain">
          <div className="scroll-container" ref={scrollContainerSearchRef}>
            <div className="searchContent scroll_content">
              {searchFoodSectionData.map((item) => (
                <SearchByFood data={item} key={item.searchItems} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchByFoodSection;
