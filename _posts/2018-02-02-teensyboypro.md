---
layout: default
title: Teensyboy Pro
description: A USB MIDI teensy microcontroller arduinoboy for use with the Nintendo Gameboy to make chiptunes and sync with LSDJ and Nanoloop
price: 45
image: /public/images/teensyboy_pro/1.JPG
pos: 0.7
new: false
featured: false
product_id: 3937977401422
---
# Teensyboy Pro

<div class="gallery">
	<img src="{{ site.baseurl }}public/images/teensyboy_pro/1.JPG" alt="Teensyboy Pro" id="gallery_image" onclick="cycle(1); return false;">
	<p id="gallery_subtitle">Teensyboy Pro</p>
	<p id="gallery_pos_text">1/3</p>
	<div id="gallery_nav">
		<p id="gallery_nav_left" onclick="cycle(0); return false;">←</p>
		<p id="gallery_nav_right" onclick="cycle(1); return false;">→</p>
	</div>
</div>

## ${{ page.price }}.00

<table>
<tr><td>Options</td></tr>
<tr><td>
  <select id="options-selection">
    <option value="Teensyboy Pro only">Teensyboy Pro only $45.00 USD</option>
    <option selected="selected" value="Teensyboy Pro Quickstart Bundle">Teensyboy Pro Quickstart Bundle $60.00 USD</option>
  </select>
</td></tr>
</table>

{% include shopify_markup.html %}

## Details:

{% include shipping_estimate.html %}

Teensyboy Pro is a MIDI interface for the Nintendo Gameboy. It features a variety of modes to accommodate LSDJ, Nanoloop, and mGB. The Teensyboy Pro is intended to replace my Arduinoboy. It is functionally compatible with Arduinoboy, but has USB MIDI in addition to traditional DIN MIDI. For more information, see the Arduinoboy [readme](https://github.com/trash80/Arduinoboy/blob/master/README.md). For power and connectivity, you'll need a standard micro USB cable (not included).

The Quickstart bundle includes a cartridge with mGB and a dual link cable for a Gameboy Classic/Pocket/Color/Advance. It contains everything you need to rock out with your Gameboy!

{% include arduinoboy_comparison.html %}

Credits to trash80 for design and coding.

{% include product_footer.md %}

<script src="{{ site.baseurl }}public/js/teensyboyprogallery.js"></script>
