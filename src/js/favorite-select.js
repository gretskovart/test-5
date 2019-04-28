import constants from './constants';

const table = constants.table;
const favoriteClassname = `table__item__favorite`;
const favoriteActiveClassname = `table__item__favorite--active`;

const favoriteClickHandler = (evt) => {
  const target = evt.target;

  if (!target.classList.contains(favoriteClassname)) {
    return;
  }

  target.classList.toggle(favoriteActiveClassname);
};

table.addEventListener(`click`, favoriteClickHandler);
