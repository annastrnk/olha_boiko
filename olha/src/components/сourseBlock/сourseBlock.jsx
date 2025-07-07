import './courseBlock.scss';

export default function CourseBlock({ title, items, imgSrc, isReversed }) {
  return (
    <div className={`course-block ${isReversed ? "reversed" : "kjj"}`}>
      <div className="course-block-img">
        <img src={imgSrc} alt="" />
      </div>
      <div className="course-block-text">
        <h3 className="course-block-text-title">{title}</h3>
        <ul className="course-block-text-desc">
          {items.map((item, i) => <li key={i}>{item}</li>)}
        </ul>
      </div>
    </div>
  );
}
