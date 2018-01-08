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
	<option value="Kit + Arduino">Kit + Arduino $21.00 USD</option>
	<option value="Kit (w/ PS2 jack) + Arduino">Kit (w/ PS2 jack) + Arduino $22.00 USD</option>
	<option value="Assembled Kit">Assembled Kit $29.00 USD</option>
	<option value="Assembled Kit (w/ PS2 jack)">Assembled Kit (w/ PS2 jack) $31.00 USD</option>
	<option value="Assembled Kit + Arduino">Assembled Kit + Arduino $35.00 USD</option>
	<option selected="selected" value="Assembled Kit (w/ PS2 jack) + Arduino">Assembled Kit (w/ PS2 jack) + Arduino $36.00 USD</option>
</select> </td></tr>
</table>
<input type="hidden" name="currency_code" value="USD">
</form>
</table>

<div class="addToCart noselect" onclick="addToCart()">
  Add to cart
</div>

### PS/2 Mode is now integrated into the regular LSDJ keyboard mode. Because of this, the mode button has moved to another pin. I've also eliminated one resistor, so assembly should be easier than ever! You can download the code [here](https://github.com/catskull/Arduinoboy/archive/master.zip).

### [Assembly Instructions (pdf)]({{ site.baseurl }}public/arduinoboy-assembly.pdf)

## Details:

Unassembled kits ship within **5** business days.

Assembled kits ship within **10** business days.

Shipping is flat rate $5 in the US. International shipping is flat rate $10.

It is important to understand that you're buying a kit. That means it's a PCB with unsoldered components. For assembly,  you'll need a soldering iron and decent soldering skills. All the components are through-hole, so it should be easy enough for beginners. That said, I take no responsibility for any damage you cause to your kit during assembly. **There is strictly no warranty whatsoever included with the kit. No returns or refunds will be accepted.**

For assembled Arduinoboys, I will test it to ensure functionality before I ship it. That being said, I don't have every midi device under the sun, so I can't guarantee it will work with your equipment. Returns are accepted, but you have to cover return shipping and the initial shipping cost will not be refunded. Refunds will be issued upon arrival and inspection. I also can't provide any kind of warranty.

I will ship to the address entered on the PayPal checkout page, so please double check to make sure it's correct.

There are known issues with Arduino Duemilanove 168 and Arduino Mega 2560. Please use an Arduino UNO with this kit.

The Arduinos I sell are clones of the Arduino Uno. I have tested them and can verify they work. That being said, they're cheap Chinese knockoffs and you get what you pay for. I'm selling them here as a convenience to you, but I'd really recommend you buy an official Arduino. That way, some of the money will go back to the Arduino guys (though I do donate some of the proceeds to the Arduino guys). You will need a different driver than the official Arduino Uno uses. [You can download the needed files here.](https://drive.google.com/open?id=0B2JWZbiqagfDcjQ5MjBuZllXWjQ) I will pre flash your arduino with the arduinoboy code as a convenience to you, but it's important to know that you're not paying for the Arduinoboy software. The arduino comes with a ~1.5ft USB cable.

You'll need a good link cable to use this. I have tested these and they seem to be great: [http://www.ebay.com/itm/400690419424](http://www.ebay.com/itm/400690419424)

By purchasing from me, you are agreeing to these terms and conditions.

<script src="{{ site.baseurl }}public/js/scripts.js"></script>
