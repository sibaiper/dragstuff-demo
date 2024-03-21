const box_button = document.querySelector(".box button");
const circle_button = document.querySelector(".circle button");

const codeEl = document.querySelector(".code_container pre");

const demo = document.querySelector(".demo");

let state = "circular";


let item = document.querySelector(".item");
Drag.init(".item", {
  bounds: {
    element: ".container",
    type: "circle",
  },
  threshold: 5,
  onClick: () => {
    console.log("object");
    if (item.classList.contains("scaled")) {
      return;
    }
    item.classList.add("scaled");
    setTimeout(() => {
      item.classList.remove("scaled");
    }, 1000);
  },
  onDragStart: () => {
    if (item.classList.contains("scaled")) {
      item.classList.remove("scaled");
    }

    item.classList.add("noRound");
  },
  onDragEnd: () => {
    item.classList.remove("noRound");
  },
});

circle_button.addEventListener("click", () => {
  if (state === "circular") {
    return;
  }

  state = "circular";

  demo.innerHTML = `<div class="circular_demo">
                        <div class="container">
                            <div class="item"></div>
                        </div>
                    </div>`;

  codeEl.innerHTML = `<code class="language-javascript">
                        Drag.init(".item", {
                            bounds: {
                              element: ".container",
                              type: "circle",
                            },
                            threshold: 5,
                            onDrag: ...
                          });
                    </code>
    `;

  let item = document.querySelector(".item");
  Drag.init(".item", {
    bounds: {
      element: ".container",
      type: "circle",
    },
    threshold: 5,
    onClick: () => {
      console.log("object");
      if (item.classList.contains("scaled")) {
        return;
      }
      item.classList.add("scaled");
      setTimeout(() => {
        item.classList.remove("scaled");
      }, 1000);
    },
    onDragStart: () => {
      if (item.classList.contains("scaled")) {
        item.classList.remove("scaled");
      }

      item.classList.add("noRound");
    },
    onDragEnd: () => {
      item.classList.remove("noRound");
    },
  });
});

box_button.addEventListener("click", () => {
  if (state === "box") {
    return;
  }

  state = "box";

  demo.innerHTML = `<div class="box_demo">
                        <div class="container">
                            <div class="item"></div>
                        </div>
                    </div>`;

  codeEl.innerHTML = `<code class="language-javascript">
                        Drag.init(".item", {
                            bounds: ".container",
                            threshold: 5,
                            onDrag: ...
                        });
                </code>
                `;

  let item = document.querySelector(".item");
  Drag.init(".item", {
    bounds: ".container",
    threshold: 5,
    onClick: () => {
      if (item.classList.contains("scaled")) {
        return;
      }
      item.classList.add("scaled");
      setTimeout(() => {
        item.classList.remove("scaled");
      }, 1000);
    },
    onDragStart: () => {
      if (item.classList.contains("scaled")) {
        item.classList.remove("scaled");
      }

      item.classList.add("rounder");
    },
    onDragEnd: () => {
      item.classList.remove("rounder");
    },
  });
});
