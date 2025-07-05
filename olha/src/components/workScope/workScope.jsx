import "./workScope.scss";

export default function WorkScope() {
  return (
    <div className="work-scope container">
      <div className="work-scope-text">
        <h3 className="title">З чим я працюю</h3>
        <ul className="work-scope-list">
          <li>Нетриманням сечі</li>
          <li>Опущенням матки (пролапсами)</li>
          <li>Хронічним болем</li>
          <li>Тазовим болем</li>
          <li>Болем під час сексу</li>
          <li>Тренувала вагітних</li>
          <li>Допомагала відновитись після пологів</li>
          <li>
            Ввести в життя силові тренування для жіночого здоров’я й при цьому
            безпечно для тазового дна
          </li>
        </ul>
      </div>
      <img
        className="work-scope-img"
        src="..//../../public/images/work-scope.jpg"
        alt="work-scope-img"
      />
    </div>
  );
}
