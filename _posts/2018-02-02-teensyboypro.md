---
layout: default
title: Teensyboy Pro
description: A USB MIDI teensy microcontroller arduinoboy for use with the Nintendo Gameboy to make chiptunes and sync with LSDJ and Nanoloop
price: 45
image: /public/images/teensyboy_pro/1.JPG
pos: 0.7
new: false
featured: false
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

## $45.00

<form id="paypal" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="DK48KPA9RQA9W">
<table>
<tr><td><input type="hidden" name="on0" value="Options">Options</td></tr><tr><td><select name="os0">
	<option value="Teensyboy Pro only">Teensyboy Pro only $45.00 USD</option>
	<option selected="selected" value="Teensyboy Pro Quickstart Bundle">Teensyboy Pro Quickstart Bundle $60.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
</form>

<div class="addToCart noselect" onclick="addToCart()">
  Add to cart
</div>

## Details:

Units ship within **10** business days.

Shipping is flat rate $5 in the US. International shipping is flat rate $15.

Teensyboy Pro is a MIDI interface for the Nintendo Gameboy. It features a variety of modes to accommodate LSDJ, Nanoloop, and mGB. The Teensyboy Pro is intended to replace my Arduinoboy. It is functionally compatible with Arduinoboy, but has USB MIDI in addition to traditional DIN MIDI. For more information, see the Arduinoboy [readme](https://github.com/trash80/Arduinoboy/blob/master/README.md). For power and connectivity, you'll need a standard micro USB cable (not included).

The Quickstart bundle includes a cartridge with mGB and a ~dual link cable for a Gameboy Classic/Pocket/Color/Advance~ *Due to supplier issues, quickstart bundles will include a single ended link cable that will only work with Gameboy Pocket, Color, and Advance. I am working witht he supplier and hope to have dual ended link cables available again at some point.~ It contains everything you need to rock out with your Gameboy!

Here is a table that explains the difference between various Arduinoboy models:

<table style="min-width:100%;">
	<tr>
		<th>Variant</th>
		<th>Price</th>
		<th>USB MIDI</th>
		<th>DIN MIDI</th>
		<th>Notes</th>
	</tr>
	<tr>
		<td><a href="https://catskullelectronics.com/arduinoboy">Arduinoboy</a></td>
		<td>$16-$22 (kit)</td>
		<td>✕</td>
		<td>✔</td>
		<td>DIY kit only.</td>
	</tr>
	<tr>
		<td><a href="https://catskullelectronics.com/arduinoboy-lite">Arduinoboy Lite</a></td>
		<td>$25</td>
		<td>✕</td>
		<td>✔ (out only)</td>
		<td>Uses special fork of Arduinoboy code the improves midi out, but only does midi out.</td>
	</tr>
	<tr>
		<td><a href="https://catskullelectronics.com/teensyboy">Teensyboy</a></td>
		<td>$33</td>
		<td>✔</td>
		<td>✕</td>
		<td>It's tiny! About the size as a thumb drive.</td>
	</tr>
	<tr>
		<td><a href="https://catskullelectronics.com/teensyboypro">Teensyboy Pro</a></td>
		<td>$45</td>
		<td>✔</td>
		<td>✔</td>
		<td>Functionaly identical to Arduinoboy, but smaller. Mounting holes for installing into a case.</td>
	</tr>
</table>

Credits to trash80 for design and coding.

I will ship to the address entered on the PayPal checkout page, so please double check to make sure it’s correct.

By purchasing, you are acknowledging that you've read and understand this page as well as my [FAQ](/faq) page.

<script src="{{ site.baseurl }}public/js/teensyboyprogallery.js"></script>
