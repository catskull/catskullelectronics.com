var i = 1;
var baseurl = "/public/images/usbmidiinterface/"

function cycle(direction) {
    image = document.getElementById('gallery_image');
    text = document.getElementById('gallery_pos_text');
    subtitle = document.getElementById('gallery_subtitle');

    if (direction) {
      if (i == 4){
        i = 1;
      }
      else {
        i = i + 1;
      }
    }
    else {
      if (i == 1){
        i = 4;
      }
      else {
        i = i - 1;
      }
    }

    switch (i) {
      case 1:
        image.src = baseurl + '1.jpg';
        image.alt = "3x In/Out MIDI Ports";
        text.innerHTML = "1/4";
        break;

      case 2:
        image.src = baseurl + '2.jpg';
        image.alt = "Virtual MIDI Thru"
        text.innerHTML = "2/4";
        break;

      case 3:
        image.src = baseurl + '3.jpg';
        image.alt = "All MIDI inputs are optically isolated";
        text.innerHTML = "3/4";
        break;

      case 4:
        image.src = baseurl + '4.jpg';
        image.alt = "Micro USB for computer connection";
        text.innerHTML = "4/4";
        break;
    }

    subtitle.innerHTML = image.alt;
}
