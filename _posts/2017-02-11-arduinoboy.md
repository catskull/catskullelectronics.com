---
layout: default
title: Arduinoboy
description: Buy a Gameboy Arduinoboy kit for LSDJ starting at $16
price: 16
image: /public/gallery/1.jpg
pos: 2
---
# Arduinoboy Shield

<div class="gallery">
	<img src="{{ site.baseurl }}public/gallery/1.jpg" alt="Arduinoboy front" id="gallery_image" onclick="cycle(1); return false;">
	<p id="gallery_subtitle">Arduinoboy front</p>
	<p id="gallery_pos_text">1/12</p>
	<div id="gallery_nav">
		<p id="gallery_nav_left" onclick="cycle(0); return false;">←</p>
		<p id="gallery_nav_right" onclick="cycle(1); return false;">→</p>
	</div>
</div>

<table>
<form id="paypal" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
<input type="hidden" name="cmd" value="_s-xclick">
<input type="hidden" name="hosted_button_id" value="WBS4S4LX4WLSW">
<table class="checkout-table">
<tr><td><input type="hidden" name="on0" value="Options">Options</td></tr><tr><td><select name="os0">
	<option value="Kit Only">Kit Only $16.00 USD</option>
	<option value="Kit Only (w/ PS2 jack)">Kit Only (w/ PS2 jack) $17.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
</form>
</table>

<div class="addToCart noselect" onclick="addToCart()">
  Add to cart
</div>

## This arduinoboy kit has been replaced by the [Teensyboy Pro](https://catskullelectronics.com/teensyboypro). I am no longer offering assembled kits. These are still for sale, but I can't offer any support.

## As of Feb. 11, 2019, I am no longer offering pre-flashed Arduino UNOs. You can buy them just as cheap as I can!

### PS/2 Mode is now integrated into the regular LSDJ keyboard mode. Because of this, the mode button has moved to another pin. I've also eliminated one resistor, so assembly should be easier than ever! You can download the code [here](https://github.com/catskull/Arduinoboy/archive/master.zip).

### [Assembly Instructions (pdf)]({{ site.baseurl }}public/arduinoboy-assembly.pdf)

## Details:

Unassembled kits ship within **5** business days.

Shipping is flat rate $5 in the US. International shipping is flat rate $15.

The Arduinoboy kit has been replaced by the Teensyboy Pro. It's better in every way! Here's a table showing the differences:

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

It is important to understand that you're buying a kit. That means it's a PCB with unsoldered components. For assembly,  you'll need a soldering iron and decent soldering skills. All the components are through-hole, so it should be easy enough for beginners. That said, I take no responsibility for any damage you cause to your kit during assembly. **There is strictly no warranty whatsoever included with the kit. No returns or refunds will be accepted.**

I will ship to the address entered on the PayPal checkout page, so please double check to make sure it's correct.

There are known issues with Arduino Duemilanove 168 and Arduino Mega 2560. Please use an Arduino UNO with this kit.

You'll need a good link cable to use this. I have tested these and they seem to be great: [http://www.ebay.com/itm/400690419424](http://www.ebay.com/itm/400690419424)

By purchasing from me, you are agreeing to these terms and conditions.

<script src="{{ site.baseurl }}public/js/scripts.js"></script>
