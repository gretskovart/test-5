import constants from './constants';

const table = constants.table;
const icons = table.querySelectorAll(`.spoiler-img`);
const hoveredClassname = `spoiler-img--hovered`;

const iconMouseenterHandler = (evt) => {
  const target = evt.target;
  const iconNum = target.dataset.imgType;
  const similarIcons = table.querySelectorAll(`.spoiler-img--` + iconNum);

  similarIcons.forEach((item, index, arr) => {
    item.classList.add(hoveredClassname);
    item.addEventListener(`mouseleave`, () => {
      iconMouseleaveHandler(arr);
    });
  });
};

const iconMouseleaveHandler = (arr) => {
  arr.forEach((item) => {
    item.classList.remove(hoveredClassname);
  });
};

icons.forEach((item) => {
  item.addEventListener(`mouseenter`, iconMouseenterHandler);
});
