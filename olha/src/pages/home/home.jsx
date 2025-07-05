import "./home.scss";


export default function Home() {


  return (
    <section className="container">


<img className="main-photo" src="../../../public/images/main-photo.png" alt="main-photo" />
      {/* <div className="main-home" >
        <div className="main-photo">
          <div className="main-photo_text">
            <h3>Live a Healthy Life. Learn From Experts</h3>
            <p>
              Get healthier by following lorem Ipsum. Proin gravida nibh vel
              velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum
              auctor, nisi elit consequat.
            </p>
          </div>
          <img src="../../../public/images/Фото152.jpg" alt="" />
        </div>
        <div className="main-numbers">
          <div className="main-numbers_desc">
            <img src="../../../public/images/icons8-gym-20.png" alt="" />
            <p>5 років тренер</p>
          </div>
          <div className="main-numbers_desc">
            <p>100 років танцюю хтиві танці</p>
          </div>
          <div className="main-numbers_desc">
            <p>106 років п'ю вино</p>
          </div>
          <div className="main-numbers_desc">
            <p>666 років щось ще роблю</p>
          </div>
        </div>
        <div className="main-info">
          <img src="../../../public/images/Фото59.jpg" alt="" />
          <div className="main-text">
            <p>
              Мене звати Ольга Бойко, і я — фізична терапевтка, яка
              спеціалізується на здоров'ї тазового дна
            </p>
            <p>
              {" "}
              <span>Моя мета</span> — допомагати жінкам та чоловікам
              відновлювати функції м'язів тазового дна, забезпечуючи їм комфорт
              і якість життя після пологів, операцій або при інших проблемах у
              цій зоні.{" "}
            </p>
            <p>
              Я заснувала реабілітаційний центр{" "}
              <a href="https://www.razomrehab.com.ua/links">Разом Rehab</a>, де
              ми надаємо комплексний підхід до фізичної реабілітації.
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
              , де ділюся корисними порадами, вправами та рекомендаціями для
              тих, хто прагне піклуватися про своє здоров’я.
            </p>
            <p>
              Вірю, що кожен заслуговує жити без болю та дискомфорту, і моя
              місія — зробити це реальністю для всіх, хто звертається по
              допомогу.
            </p>
          </div>
        </div>
        <div className="services-wrapper">
          {!fetchData
            ? "Loading"
            : fetchData.map((info) => (
                <div className="services-item">
                  <h3>{info.title}</h3>
                  <p>{info.discription}</p>
                </div>
              ))}
        </div>
      </div> */}
    </section>
  );
}
