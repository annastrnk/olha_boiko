import './courseCardGrid.scss'


export default function CourseCardGrid({ cards }) {
    return (
      <div className="course-goals">
        <div className="container">
          <div className="course-goals-wrapper">
            {cards.map((card, i) => (
              <div className="course-goals-item" key={i}>
                {/* <div className="course-goals-item-img"> */}
                  <img className="course-goals-item-img"  src={card.img || "#"} alt="" />
                {/* </div> */}
                <p className="course-goals-item-text">{card.text}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
  