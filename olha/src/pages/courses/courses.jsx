import "./courses.scss";

import CourseCardGrid from "../../components/courseCardGrid/courseCardGrid";
import "./courses.scss";
import CourseBlock from "../../components/сourseBlock/сourseBlock";

export default function Courses() {
  return (
    <section>
      <div className="course-main">
        <div className="container">
          <div className="course-main-wrapper">
            <h3 className="course-main-title">
              САМОСТІЙНА ДІАГНОСТИКА <br /> М'ЯЗІВ ТАЗОВОГО ДНА
            </h3>
            <p className="course-main-subtopic">
              ОНЛАЙН-КУРС, який допоможе <br /> тобі краще зрозуміти своє тіло
            </p>
            <p className="course-main-text">І дати йому саме те, що потрібно</p>
          </div>
        </div>
      </div>

      <div className="container">
        <CourseBlock
          title="ЩО ТИ ОТРИМАЄШ:"
          imgSrc="../../../public/images/course1.jpg"
          items={[
            "5 відеоуроків у записі",
            "PDF-конспекти до кожного уроку",
            "Покрокову інструкцію з самостійної зовнішньої та внутрішньої оцінки",
            "Бонус: запис живої Q&A-сесії з вправами і відповідями на поширені запитання",
          ]}
        />
      </div>

      <CourseCardGrid
        cards={[
          {
            text: "Визначати симптоми слабкості або перенапруги м'язів тазового дна",
            img: "#",
          },
          {
            text: "Розпізнавати сигнали дисбалансу",
            img: "#",
          },
          {
            text: "Розуміти, чи є потреба у зміцненні м'язів",
            img: "#",
          },
          {
            text: "Чітко бачити — коли варто звернутись до фахівця, а коли достатньо самодопомоги",
            img: "#",
          },
        ]}
      />

      <div className="container">
        <CourseBlock
          title="ДЛЯ КОГО ЦЕЙ КУРС"
          imgSrc="../../../public/images/course2.jpg"
          isReversed={true}
          items={[
            "Для жінок, які хочуть турбуватись про своє тіло усвідомлено",
            "Для тих, хто має сумніви, дискомфорт або хоче профілактично перевірити стан МТД",
            "Для тих, хто не хоче мовчки терпіти, а хоче знати й діяти",
          ]}
        />
      </div>

      <div className="container">
        <CourseBlock
          title="РЕЗУЛЬТАТ"
          isReversed={false}
          imgSrc="../../../public/images/course3.jpg"
          items={[
            "Розуміння свого тіла",
            "Чіткий план дій",
            "Менше тривоги — більше впевненості",
          ]}
        />
      </div>

      <div className="container">
        <div className="course-conclusion">
          <div className="course-conclusion-text">
            <p className="course-conclusion-text-accent">
              Уже понад 100 жінок пройшли цей курс
            </p>
            <p>
              Хтось знайшов спокій, інші — отримали чітке розуміння, з чим
              працювати
            </p>
            <p>Стань наступною — не відкладай турботу про себе</p>
            <p>
              Ти заслуговуєш знати, що відбувається з твоїм тілом. І мати
              інструменти, щоб діяти
            </p>
          </div>
        </div>
      </div>

      <div className="container btn-wrapper">
        
        <button className="btn-main btn-buy">
          <a href="https://secure.wayforpay.com/payment/s93463395fe8f?fbclid=PAQ0xDSwLY2fxleHRuA2FlbQIxMQABp_t2ZGFA_VtKXDnebNyEC64Oz92CsnBP6bsPaUCIUlsDmTKhiiYK6y4yvRNQ_aem_2aXuMFSGmv8vSiGaLu1JqQ" target="_blank">Придбати курс</a>
        </button>
      </div>
    </section>
  );
}
