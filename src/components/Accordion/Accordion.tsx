import React, { useEffect, useRef, useState, type FC } from "react";
import "./Accordion.scss";
import { ChevronDown } from "lucide-react";
interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState("0px");

  const colorChange=isOpen ? 'white': 'black'
const bacgroundChange= !isOpen? 'white' : '#FFC925'
  useEffect(() => {
    if (isOpen && contentRef.current) {
      setHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setHeight("0px");
    }
  }, [isOpen]);
  return (
    <>
      <div className="accordion">
        <button
          className={`accordion-header ${isOpen ? "active" : ""}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{background: bacgroundChange}}
        >
          <span style={{color: colorChange}}>
            <svg
              width="14"
              height="12"
              viewBox="0 0 14 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M13.6696 2.4465C13.8363 2.61316 13.9196 2.81555 13.9196 3.05364C13.9196 3.29174 13.8363 3.49412 13.6696 3.66078L7.20532 10.1251L5.99104 11.3394C5.82437 11.506 5.62199 11.5894 5.38389 11.5894C5.1458 11.5894 4.94342 11.506 4.77675 11.3394L3.56247 10.1251L0.330322 6.89293C0.163656 6.72626 0.0803223 6.52388 0.0803223 6.28578C0.0803223 6.04769 0.163656 5.84531 0.330322 5.67864L1.54461 4.46435C1.71127 4.29769 1.91366 4.21435 2.15175 4.21435C2.38985 4.21435 2.59223 4.29769 2.75889 4.46435L5.38389 7.09828L11.241 1.23221C11.4077 1.06555 11.6101 0.982212 11.8482 0.982212C12.0863 0.982212 12.2887 1.06555 12.4553 1.23221L13.6696 2.4465Z"
                fill={colorChange}
              />
            </svg>
            {title}
          </span>
          <ChevronDown className={`icon ${isOpen ? "rotate" : ""}`} color={colorChange} size={20} />
        </button>
        <div
          ref={contentRef}
          className="accordion-content"
          style={{ maxHeight: height }}
        >
          <p>{content}</p>
        </div>
      </div>
    </>
  );
};

export default Accordion;
