var i = 1;
var baseurl = "/public/images/ym2149/"

function cycle(direction) {
    image = document.getElementById('gallery_image');
    text = document.getElementById('gallery_pos_text');
    subtitle = document.getElementById('gallery_subtitle');

    if (direction) {
      if (i == 5){
        i = 1;
      }
      else {
        i = i + 1;
      }
    }
    else {
      if (i == 1){
        i = 5;
      }
      else {
        i = i - 1;
      }
    }

    switch (i) {
      case 1:
        image.src = baseurl + '1.jpg';
        image.alt = "Top";
        text.innerHTML = "1/5";
        break;

      case 2:
        image.src = baseurl + '2.jpg';
        image.alt = "Top"
        text.innerHTML = "2/5";
        break;

      case 3:
        image.src = baseurl + '3.jpg';
        image.alt = "Bottom";
        text.innerHTML = "3/5";
        break;

      case 4:
        image.src = baseurl + '4.jpg';
        image.alt = "Bottom"
        text.innerHTML = "4/5";
        break;

      case 5:
        image.src = baseurl + '5.jpg';
        image.alt = "YM2149 Chip"
        text.innerHTML = "5/5";
        break;
    }

    subtitle.innerHTML = image.alt;
}
