import { Tabs } from "./test-module";
import "../css/app.css";
import "../scss/style.scss";

const $tabContainer = document.querySelector(".tabs");
/********** Paste your code here! ************/

// window.onload = () => {
//   console.log("Paste your code here!");
//   Tabs.init($tabContainer);
// };

document.addEventListener("DOMContentLoaded", () => {
  Tabs.init($tabContainer);
});
