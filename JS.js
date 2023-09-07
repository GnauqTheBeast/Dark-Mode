const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const tabs = $$(".tab-item");
const panes = $$(".tab-pane");

const tabActive = $(".tab-item.active");
const line = $(".tabs .line");

line.style.width = tabActive.offsetWidth + "px";
line.style.left = tabActive.offsetLeft + "px";

// console.log([tabActive]);
// console.log(tabActive.offsetWidth);

tabs.forEach((tab, index) => {
  const pane = panes[index];
  tab.onclick = function () {
    $(".tab-item.active").classList.remove("active");
    $(".tab-pane.active").classList.remove("active");

    pane.classList.add("active");
    this.classList.add("active");

    line.style.left = this.offsetLeft + "px";
    line.style.width = this.offsetWidth + "px";

    if (index === 1) {
      document.body.classList.add("dark-theme");
      line.style.backgroundColor = "#fff";
    } else {
      document.body.classList.remove("dark-theme");
      line.style.backgroundColor = "#000";
    }
  };
});
