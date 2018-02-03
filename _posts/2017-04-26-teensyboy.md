---
layout: default
title: Teensyboy
description: A USB MIDI teensy microcontroller arduinoboy for use with the Nintendo Gameboy to make chiptunes and sync with LSDJ and Nanoloop
price: 33
image: /public/images/teensyboy/1.jpg
pos: 1
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

<table>
<form id="paypal" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="UXX2MLFL25J74">
<table>
<tr><td><input type="hidden" name="on0" value="Option">Options</td></tr><tr><td><select name="os0">
	<option value="Teensyboy only">Teensyboy Only $33.00 USD</option>
	<option selected="selected" value="Teensyboy Quickstart Bundle">Teensyboy Quickstart Bundle $47.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
</form>
</table>

<div class="addToCart noselect" onclick="addToCart()">
  Add to cart
</div>

## Details:

Units ship within **10** business days.

Shipping is flat rate $4 in the US. International shipping is flat rate $15.

The Teensyboy Quickstart Bundle includes the Teensyboy, a [32k Gameboy Cartridge](/32kcart) with mGB flashed on it, and a GBC style link cable.

The Teensyboy is identical to an [Arduinoboy](/arduinoboy), but instead of DIN MIDI connectors, it uses USB MIDI. Put simply it's a USB MIDI adapter for your Nintendo Gameboy. When plugged into a computer with a micro-USB cable (not included), it will populate as a MIDI input/output device for use with your favorite DAW! It offers all the same functionality as an Arduinoboy.

Here's a table showing the different models:

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
		<td>Arduinoboy Lite</td>
		<td>~$20 (TBD)</td>
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

It includes a Gameboy Color/Pocket style link connector. It is compatible with the classic DMG by using a dual ended link cable. <a href="http://www.ebay.com/itm/400690419424" target="_blank">This one</a> has been tested and works perfectly.

This Teensyboy is wrapped in clear heat shrink tubing for protection and durability.

Other Teensy based arduinoboys exist, but they use a forked version of the arduinoboy software. This is based on the latest official code release (1.3.0a) which added Teensy support. It can be easily updated for future releases as well.

I will ship to the address entered on the PayPal checkout page, so please double check to make sure it’s correct.

By purchasing, you are acknowledging that you've read and understand this page as well as my [FAQ](/faq) page.

<script src="{{ site.baseurl }}public/js/teensyboygallery.js"></script>
