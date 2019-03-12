var i = 1;
var baseurl = "/public/images/famimimidi/"

function cycle(direction) {
    image = document.getElementById('gallery_image');
    text = document.getElementById('gallery_pos_text');
    subtitle = document.getElementById('gallery_subtitle');

    if (direction) {
      if (i == 2){
        i = 1;
      }
      else {
        i = i + 1;
      }
    }
    else {
      if (i == 1){
        i = 2;
      }
      else {
        i = i - 1;
      }
    }

    switch (i) {
      case 1:
        image.src = baseurl + '1.jpg';
        image.alt = "Famimimidi Front";
        text.innerHTML = "1/2";
        break;

      case 2:
        image.src = baseurl + '2.jpg';
        image.alt = "Famimimidi Rear"
        text.innerHTML = "2/2";
        break;
    }

    subtitle.innerHTML = image.alt;
}
