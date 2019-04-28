import constants from './constants';

const table = constants.table;
const spoilerShowClassname = `content-table__item--spoiler--show`;
const spoilerArrowShowClassname = `table__item__arrow-spoiler--show`;

const tableSpoilerToggle = (evt) => {
  const target = evt.target;

  if (!target.classList.contains(`table__item__arrow-spoiler`)) {
    return;
  }

  const spoilerNum = target.dataset.spoilerNumArrow;
  const spoilerElems = table.querySelectorAll(`.content-table__item--spoiler[data-spoiler-num="` + spoilerNum + `"]`);

  if (spoilerElems.length === 0) {
    return;
  }

  target.classList.toggle(spoilerArrowShowClassname);

  spoilerElems.forEach((item) => {
    item.classList.toggle(spoilerShowClassname);
  });
};

table.addEventListener(`click`, tableSpoilerToggle);
