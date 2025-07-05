import './razomRehabBlock.scss'

export default function RazomRehabBlock(){


    return(
        <div className="razom-rehab accent-block">
        <div className="container">
          <div>
            <h2 className="razom-rehab-title">Разом Rehab</h2>
            <h4 className="razom-rehab-text">
              Навчання для фізичних терапевтів, реабілітологів, ерготерапевтів
              та лікарів
            </h4>
            <p>
              <span className="razom-rehab-accent">Основна мета</span> —
              організовувати доступні та корисні навчання для розвитку
              спеціалістів сфери здоров’я в Україні
            </p>
          </div>
          <div className="razom-rehab-btn">
            <button>
              <a href="https://www.razomrehab.com.ua/">дізнатися більше</a>
            </button>
          </div>
        </div>
      </div>
    )
}