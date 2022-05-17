function update() {
  let element = document.getElementById("progressBar");
  let width = 1;
  let number = setInterval(maj, 10);
  function maj() {
    if (width >= 100) {
      clearInterval(number);
    } else {
      width++;
      element.style.width = width + "%";
      element.innerHTML = width * 1 + "%";
    }
  }
}
