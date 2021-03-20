let skillBackend = [{
    val: 75,
    text: "PHP",
  },
  {
    val: 65,
    text: "NodeJS",
  },
  {
    val: 70,
    text: "MySQL",
  },
  {
    val: 70,
    text: "MongoDB",
  },
  {
    val: 65,
    text: "Linux",
  }
];

const backend_divs = document.getElementsByClassName("backend")[0];

skillBackend.forEach(function (arrayItem) {
    var values = arrayItem.val;
    var text = arrayItem.text;

    // create element h4
    let div = document.createElement('h4');
    div.innerHTML = text;

    // create div class="progress"
    let div_progress = document.createElement('div');
    div_progress.classList.add('progress');

    // create div class="value-bar", add css style and append as .progress child 
    let div_value_bar = document.createElement('div');
    div_value_bar.classList.add('value-bar');
    div_value_bar.style.width = values + "%";
    div_progress.appendChild(div_value_bar);

    // append div to class .backend
    backend_divs.appendChild(div);
    backend_divs.appendChild(div_progress)
});


let skillFrontend = [{
    val: 80,
    text: "HTML & CSS",
  },
  {
    val: 60,
    text: "ReactJS",
  },
  {
    val: 65,
    text: "React Native",
  },
  {
    val: 65,
    text: "Figma",
  },
  {
    val: 70,
    text: "Adobe Photoshop",
  }
];

const frontend_divs = document.getElementsByClassName("front-end")[0];

skillFrontend.forEach(function (arrayItem) {
    var values = arrayItem.val;
    var text = arrayItem.text;

    // create element h4
    let div = document.createElement('h4');
    div.innerHTML = text;

    // create div class="progress"
    let div_progress = document.createElement('div');
    div_progress.classList.add('progress');

    // create div class="value-bar", add css style and append as .progress child 
    let div_value_bar = document.createElement('div');
    div_value_bar.classList.add('value-bar');
    div_value_bar.style.width = values + "%";
    div_progress.appendChild(div_value_bar);

    // append div to class .front-end
    frontend_divs.appendChild(div);
    frontend_divs.appendChild(div_progress)
});