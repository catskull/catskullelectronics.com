---
layout: default
title: Arduinoboy Lite
description: A USB MIDI teensy microcontroller arduinoboy for use with the Nintendo Gameboy to make chiptunes and sync with LSDJ and Nanoloop
price: 25
image: /public/images/aboy_lite/2.JPG
pos: 0.6
new: false
featured: false
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

<form id="paypal" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="9HVUU2S9CNU9A">
<input type="hidden" name="currency_code" value="USD">
</form>

<div class="addToCart noselect" onclick="addToCart()">
  Add to cart
</div>

## Details:

Units ship within **10** business days.

Shipping is flat rate $5 in the US. International shipping is flat rate $15.

Arduinoboy Lite is a special fork of the arduinoboy project. It is designed to improve LSDJ's MIDI out mode in reliability and add features such as MIDI clock and on-the-fly channel switching.

For a full list of differences, <a href="https://github.com/ledfyr/ab-midiout-lite">view the readme</a>.

Like all of my arduinoboy offerings, Arduinoboy Lite is fully compatible with all Gameboy models except the micro. If a Gameboy Pocket/Color link cable is used, power is supplied via link cable. If a classic Gameboy (DMG) is used, a micro-usb connector should be used to supply power. Do not use the micro-usb connection if connected to a Pocket, Color, or Advance!

To use this product you need a copy of LSDJ and a flash cartridge capable of running it. This product is shipped fully assembled and tested.

{% include arduinoboy_comparison.html %}

Credits to trash80 for original Arduinoboy design and coding, and ledfyr for the aboy-midiout-lite software.

I will ship to the address entered on the PayPal checkout page, so please double check to make sure it’s correct.

By purchasing, you are acknowledging that you've read and understand this page as well as my [FAQ](/faq) page.

<script src="{{ site.baseurl }}public/js/aboylitegallery.js"></script>
