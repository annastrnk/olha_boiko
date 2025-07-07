import "./consultationSection.scss";

export default function ConsultationSection({
  title,
  blocks,
  summary,
  duration,
  price,
  formLink,
}) {
  return (
    <section className="consultation container">
      <div className="consultation-wrapper">
        {blocks.map((block, index) => (
          <div className="consultation-block" key={index}>
            <h4 className="consultation-title">{block.title}</h4>
            <ul className="consultation-text">
              {block.items.map((item, i) =>
                Array.isArray(item) ? (
                  <ol key={i}>
                    {item.map((subItem, j) => (
                      <li key={j}>{subItem}</li>
                    ))}
                  </ol>
                ) : (
                  <li key={i}>{item}</li>
                )
              )}
            </ul>
          </div>
        ))}
      </div>

      {summary && (
        <div className="consultation-result">
          <div className="consultation-result-text">
            {summary.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      )}
  <div className="consultation-details accent-block">
     <div className="consultation-details-price">
      {duration && <p>Тривалість: {duration}</p>}
   
        {price && <span>{price}</span>}
  </div>
        {formLink && (
          <div className="consultation-details-btn">
          <button className="btn-main">
            <a href={formLink} target="_blank" rel="noopener noreferrer">
              Записатися на консультацію
            </a>
          </button>
          </div>
        )}
      
      </div>
    </section>
  );
}
