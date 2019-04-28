import constants from './constants';

const table = constants.table;
const iconsPanel = table.querySelector(`.table__item--icons`);

const iconsPanelChangeHandler = (evt) => {
  const target = evt.target;

  if (target.className !== `checkbox__input`) {
    return;
  }

  const contentCheckboxes = table.querySelectorAll(`.table__item--title .checkbox__input`);

  contentCheckboxes.forEach((item) => {
    item.checked = (target.checked) ? true : false;
  });
};

iconsPanel.addEventListener(`change`, iconsPanelChangeHandler);
