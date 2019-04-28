const btnsPanel = document.querySelector(`.header__btn-group`);
const activeBtnClassname = `btn-group__item--active`;

const btnsPanelClickHandler = (evt) => {
  const target = evt.target;

  if (target.classList.contains(activeBtnClassname)) {
    return;
  }

  btnsPanel.querySelector(`.` + activeBtnClassname).classList.remove(activeBtnClassname);
  target.classList.add(activeBtnClassname);
};

btnsPanel.addEventListener(`click`, btnsPanelClickHandler);
