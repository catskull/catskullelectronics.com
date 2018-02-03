var i = 1;
var baseurl = "/public/images/teensyboy_pro/"

function cycle(direction) {
    image = document.getElementById('gallery_image');
    text = document.getElementById('gallery_pos_text');
    subtitle = document.getElementById('gallery_subtitle');

    if (direction) {
      if (i == 3){
        i = 1;
      }
      else {
        i = i + 1;
      }
    }
    else {
      if (i == 1){
        i = 3;
      }
      else {
        i = i - 1;
      }
    }

    switch (i) {
      case 1:
        image.src = baseurl + '1.JPG';
        image.alt = "Teensyboy Pro";
        text.innerHTML = "1/3";
        break;

      case 2:
        image.src = baseurl + '2.JPG';
        image.alt = "Teensyboy Pro"
        text.innerHTML = "2/3";
        break;

      case 3:
        image.src = baseurl + '3.JPG';
        image.alt = "Teensyboy Pro Quickstart Bundle";
        text.innerHTML = "3/3";
        break;
    }

    subtitle.innerHTML = image.alt;
}
