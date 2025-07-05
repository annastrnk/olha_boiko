import React, { useEffect, useRef, useState } from "react";

import "./consultationRuleItem.scss";

export default function ConsultationRuleItem(props) {
  const [active, setActive] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState("0px");

  useEffect(() => {
    setHeight(active ? `${contentRef.current.scrollHeight}px` : "0px");
  }, [active]);

  function toggleAccordion() {
    setActive(!active);
    setHeight(active ? "0px" : `${contentRef.current.scrollHeight}px`);
  }

  return (
    <div className="accordion">
      <div
        className={`accordion-item ${active ? "active" : ""}`}
        onClick={toggleAccordion}
      >
        <h3 className="accordion-title">{props.title}</h3>
        <span style={{ marginLeft: "20px" }}>{active ? "-" : "+"}</span>
      </div>
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}` }}
        className="accordion-content"
      >
        <div
          className="accordion-text"
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  );
}
