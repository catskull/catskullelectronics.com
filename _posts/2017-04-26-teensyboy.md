---
layout: default
title: Teensyboy
description: A USB MIDI teensy microcontroller arduinoboy for use with the Nintendo Gameboy to make chiptunes and sync with LSDJ and Nanoloop
price: 33
image: /public/images/teensyboy/1.jpg
pos: 1
product_id: 3938013085774
---
# Teensyboy

<div class="gallery">
	<img src="{{ site.baseurl }}public/images/teensyboy/1.jpg" alt="Teensyboy Top" id="gallery_image" onclick="cycle(1); return false;">
	<p id="gallery_subtitle">Teensyboy Top</p>
	<p id="gallery_pos_text">1/5</p>
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
    <option value="Teensyboy only">Teensyboy Only $33.00 USD</option>
    <option selected="selected" value="Teensyboy Quickstart Bundle">Teensyboy Quickstart Bundle $47.00 USD</option>
  </select>
</td></tr>
</table>

{% include shopify_markup.html %}

## Details:

{% include shipping_estimate.html %}

The Teensyboy Quickstart Bundle includes the Teensyboy, a [32k Gameboy Cartridge](/32kcart) with mGB flashed on it, and a GBC style link cable.

The Teensyboy is identical to an [Arduinoboy](/arduinoboy), but instead of DIN MIDI connectors, it uses USB MIDI. Put simply it's a USB MIDI adapter for your Nintendo Gameboy. When plugged into a computer with a micro-USB cable (not included), it will populate as a MIDI input/output device for use with your favorite DAW! It offers all the same functionality as an Arduinoboy.

{% include arduinoboy_comparison.html %}

It includes a Gameboy Color/Pocket style link connector. It is compatible with the classic DMG by using a dual ended link cable. <a href="http://www.ebay.com/itm/400690419424" target="_blank">This one</a> has been tested and works perfectly.

This Teensyboy is wrapped in clear heat shrink tubing for protection and durability.

Other Teensy based arduinoboys exist, but they use a forked version of the arduinoboy software. This is based on the latest official code release (1.3.0a) which added Teensy support. It can be easily updated for future releases as well.

{% include product_footer.md %}

<script src="{{ site.baseurl }}public/js/teensyboygallery.js"></script>
