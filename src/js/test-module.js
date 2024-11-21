export const Tabs = (() => {
  console.log("Tabs");
  /*
   *   DOM refs
   *
   * */
  let $tabContainer;
  let $tabsNavElements;
  let $tabsContentElements;

  let currentTabIndex = 0;

  const init = (tabContainer) => {
    console.log("Init Tabs app");
    console.log(`outtertabcontainer: ${tabContainer}`);
    $tabContainer = tabContainer;
    $tabsNavElements = $tabContainer.querySelectorAll(".tabs-list-element");
    $tabsContentElements = $tabContainer.querySelectorAll(".tab-content");
    if ($tabsContentElements) eventHandlers();
  };

  const eventHandlers = () => {
    $tabsNavElements.forEach((element, index) => {
      element.dataset.index = index;
      element.addEventListener("click", (e) => {
        const liElment = e.target;
        currentTabIndex = liElment.dataset.index;
        $tabsNavElements.forEach((element) => {
          element.classList.remove("active");
        });
        liElment.classList.add("active");
        showTabContent(currentTabIndex); // Show the content for the clicked tab
      });
    });
  };

  const showTabContent = (index) => {
    $tabsContentElements.forEach((content, contentIndex) => {
      if (contentIndex == index) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });
  };

  return {
    init,
  };
})();
