document.getElementsByClassName("vc_single_image-img")[0].addEventListener("mousemove", function zoomIn(event) {
    var element = document.getElementById("overlay");
    element.style.display = "inline-block";
    element.style.height = "400px";
    var img = document.getElementsByClassName("vc_single_image-img")[0];
    var y = "url('" + img.src + "')";
    element.style.backgroundImage = y;
    var posX = event.offsetX ? (event.offsetX) : event.pageX - img.offsetLeft;
    var posY = event.offsetY ? (event.offsetY) : event.pageY - img.offsetTop;
    element.style.backgroundPosition = (-posX * 4) + "px " + (-posY * 4) + "px";
    
  });
  document.getElementsByClassName("vc_single_image-img")[0].addEventListener("mouseout", function zoomOut() {
    var element = document.getElementById("overlay");
    var img = document.getElementsByClassName("vc_single_image-img")[0];
    element.style.display = "none";
  });
  const inputs = document.querySelectorAll('.controls input');

  function handleUpdate() {
    const suffix = this.dataset.sizing || '';
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
  }

  inputs.forEach(input => input.addEventListener('change', handleUpdate));
  inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));