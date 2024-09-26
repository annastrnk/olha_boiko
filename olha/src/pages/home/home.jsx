import "./home.scss";
import image from "../../../public/images/IMG_9144.jpg";
import { useSelector } from "react-redux";
import Services from "../../components/services/services";

export default function Home() {
  const fetchData = useSelector((state) => state.data.data);

  return (
    <>
      <div className="main-info">
        <img src={image} alt="main-photo" />
        <div className="main-text">
          <p>
            Мене звати Ольга Бойко, і я — фізична терапевтка, яка
            спеціалізується на здоров'ї тазового дна
          </p>
          <p>
            {" "}
            <span>Моя мета</span> — допомагати жінкам та чоловікам відновлювати
            функції м'язів тазового дна, забезпечуючи їм комфорт і якість життя
            після пологів, операцій або при інших проблемах у цій зоні.{" "}
          </p>
          <p>
            Я заснувала реабілітаційний центр{" "}
            <a href="https://www.razomrehab.com.ua/links">Разом Rehab</a>, де ми
            надаємо комплексний підхід до фізичної реабілітації.
          </p>
          <p>
            Завдяки понад 5 рокам досвіду, я розробила індивідуальні програми,
            що включають, біологічний зворотний зв'язок та інші сучасні методи
            терапії. Моя робота спрямована на підтримку пацієнтів у досягненні
            найкращих результатів через грамотне зміцнення та реабілітацію
            м'язів тазового дна.
          </p>
          <p>
            Окрім індивідуальної роботи з пацієнтами, я активно веду блог у
            <a href="https://www.instagram.com/olha_boiko?igsh=azc4OG5wdWpwc3hk">
              Instagram
            </a>
            , де ділюся корисними порадами, вправами та рекомендаціями для тих,
            хто прагне піклуватися про своє здоров’я.
          </p>
          <p>
            Вірю, що кожен заслуговує жити без болю та дискомфорту, і моя місія
            — зробити це реальністю для всіх, хто звертається по допомогу.
          </p>
        </div>
      </div>
      <div className="services-wrapper">
        {!fetchData
          ? "Loading"
          : fetchData.map((info) => <Services key={info.id} info={info} />)}
      </div>
    </>
  );
}
