const handleselector = () => {
  document.querySelector(".fa-home").style.color = "#d8d8d8";
  document.querySelector(".fa-home").style.borderBottom = "none";
  document.querySelector(".fa-product-hunt").style.color = "blue";
  document.querySelector(".fa-product-hunt").style.borderBottom ="5px solid blue";
  document.querySelector(".fa-product-hunt").style.transition = "1s ease";
  document.querySelector(".fa-tools").style.color = "#d8d8d8";
  document.querySelector(".fa-tools").style.borderBottom = "none";
};

const handleselector2 = () => {
  document.querySelector(".fa-product-hunt").style.color = "#d8d8d8";
  document.querySelector(".fa-product-hunt").style.borderBottom = "none";
  document.querySelector(".fa-tools").style.color = "blue";
  document.querySelector(".fa-tools").style.borderBottom = "5px solid blue";
  document.querySelector(".fa-tools").style.transition = "1s ease";
  document.querySelector(".fa-home").style.color = "#d8d8d8";
  document.querySelector(".fa-home").style.borderBottom = "none";
};
const handleselector3 = () => {
  document.querySelector(".fa-tools").style.color = "#d8d8d8";
  document.querySelector(".fa-tools").style.borderBottom = "none";
  document.querySelector(".fa-home").style.color = "blue";
  document.querySelector(".fa-home").style.borderBottom = "5px solid blue";
  document.querySelector(".fa-home").style.transition = "1s ease";
  document.querySelector(".fa-product-hunt").style.color = "#d8d8d8";
  document.querySelector(".fa-product-hunt").style.borderBottom = "none";
};

const pagActiva = (item) => {
  if (item === "home") {
    handleselector3();
  } else if (item === "tools") {
    handleselector2();
  } else if (item === "productos") {
    handleselector();
  }
};

export { handleselector, handleselector2, handleselector3, pagActiva };
