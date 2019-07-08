---
layout: default
title: Arduinoboy Lite
description: A USB MIDI teensy microcontroller arduinoboy for use with the Nintendo Gameboy to make chiptunes and sync with LSDJ and Nanoloop
price: 25
image: /public/images/aboy_lite/2.JPG
pos: 0.6
new: false
featured: false
product_id: 3937957969998
---
# Arduinoboy Lite

<div class="gallery">
	<img src="{{ site.baseurl }}public/images/aboy_lite/1.JPG" alt="Arduinoboy Lite" id="gallery_image" onclick="cycle(1); return false;">
	<p id="gallery_subtitle">Arduinoboy Lite</p>
	<p id="gallery_pos_text">1/3</p>
	<div id="gallery_nav">
		<p id="gallery_nav_left" onclick="cycle(0); return false;">←</p>
		<p id="gallery_nav_right" onclick="cycle(1); return false;">→</p>
	</div>
</div>

## $25.00

{% include shopify_markup.html %}

## Details:

{% include shipping_estimate.html %}

Arduinoboy Lite is a special fork of the arduinoboy project. It is designed to improve LSDJ's MIDI out mode in reliability and add features such as MIDI clock and on-the-fly channel switching. However, it **only does MIDI out** in LSDJ. If you want to use MIDI in or mGB, grabe the <a href="https://catskullelectronics.com/teensyboypro">Teensyboy Pro</a> instead!

For a full list of differences, <a href="https://github.com/ledfyr/ab-midiout-lite">view the readme</a>.

Like all of my arduinoboy offerings, Arduinoboy Lite is fully compatible with all Gameboy models except the micro. If a Gameboy Pocket/Color link cable is used, power is supplied via link cable. If a classic Gameboy (DMG) is used, a micro-usb connector should be used to supply power. Do not use the micro-usb connection if connected to a Pocket, Color, or Advance!

To use this product you need a copy of LSDJ and a flash cartridge capable of running it. This product is shipped fully assembled and tested.

{% include arduinoboy_comparison.html %}

Credits to trash80 for original Arduinoboy design and coding, and ledfyr for the aboy-midiout-lite software.

{% include product_footer.md %}

<script src="{{ site.baseurl }}public/js/aboylitegallery.js"></script>
