function getJSONData(file, callback) {
  let rawFile = new XMLHttpRequest();
  rawFile.open('GET', file);
  rawFile.send();
  rawFile.onload = function () {
    callback(rawFile.responseText);
  };
}

function goodsOut(data) {
  let container = document.createElement("section");
  let topContainer = document.createElement("section");
  let out = "";
  let topOut = "";

  for (var key in data) {
    out += '<article class="bouquets_list_item">';
    out +=
      '<img src="/' +
      data[key].img +
      '" alt="' +
      data[key].name +
      '" id="' +
      data[key].name +
      '" loading="lazy"/>';
    out += '<span class="item_name">' + data[key].name + "</span>";
    out += "</article>";
  }

  for (var key in data) {
    if (data[key].label) {
      topOut += '<article class="bouquets_list_item bouquets_list_item-top">';
      topOut +=
        '<img src="/' +
        data[key].img +
        '" alt="' +
        data[key].name +
        '" onclick="document.getElementById(`' +
        data[key].name +
        "`).scrollIntoView({block: `center`, behavior: `smooth`});setTimeout(() => {document.getElementById(`" +
        data[key].name +
        "`).style.opacity = 0.5}, 100);setTimeout(() => {document.getElementById(`" +
        data[key].name +
        '`).style.opacity = 1}, 2000)" loading="lazy"/>';
      topOut += '<span class="item_name">' + data[key].name + "</span>";
      topOut += "</article>";
    }
  }

  container.classList.add("main_bouquets_list");
  container.innerHTML = out.trim();
  topContainer.classList.add("header_cont_best_images");
  topContainer.innerHTML = topOut.trim();

  bouquets.appendChild(container);
  topBouquets.appendChild(topContainer);
}

window.addEventListener(
  "load",
  getJSONData("../../goods.json", function (response) {
    let data = JSON.parse(response);
    goodsOut(data);
  })
);

window.addEventListener("scroll", function () {
  var elements = document.querySelectorAll("#bouquets .bouquets_list_item");

  elements.forEach(element => {
    var position = element.getBoundingClientRect();
    if (position.top < window.innerHeight && position.bottom >= 0) {
      element.style.opacity = 1;
      element.style.top = 0;
    }
  });
});
