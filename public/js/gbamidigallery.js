var i = 1;
var baseurl = "/public/images/gbamidi/"

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
        image.alt = "GBA MIDI Synth with link cable and TRS adapter";
        text.innerHTML = "1/4";
        break;

      case 2:
        image.src = baseurl + '2.jpg';
        image.alt = "Heat shrink for protection"
        text.innerHTML = "2/4";
        break;

      case 3:
        image.src = baseurl + '3.jpg';
        image.alt = "MIDI TRS port";
        text.innerHTML = "3/4";
        break;

      case 4:
        image.src = baseurl + '4.jpg';;
        image.alt = "PCB link port connector"
        text.innerHTML = "4/4";
        break;
    }

    subtitle.innerHTML = image.alt;
}
