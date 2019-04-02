---
layout: default
title: USB MIDI Interface
description: A 3x USB to DIN MIDI interface
price: 80
image: /public/images/usbmidiinterface/1.jpg
pos: 0.2
new: true
featured: true
hidden: true
---
# USB MIDI Interface

<div class="gallery">
	<img src="{{ site.baseurl }}public/images/usbmidiinterface/1.jpg" alt="Interface, Cartridge, and Cable" id="gallery_image" onclick="cycle(1); return false;">
	<p id="gallery_subtitle">3x In/Out MIDI Ports</p>
	<p id="gallery_pos_text">1/4</p>
	<div id="gallery_nav">
		<p id="gallery_nav_left" onclick="cycle(0); return false;">←</p>
		<p id="gallery_nav_right" onclick="cycle(1); return false;">→</p>
	</div>
</div>

## $80

<table>
  <form id="paypal" target="paypal" action="https://www.paypal.com/cgi-bin/webscr" method="post">
  <input type="hidden" name="cmd" value="_s-xclick">
  <input type="hidden" name="hosted_button_id" value="9X4WCX3GBFJ8Y">
  <input type="hidden" name="currency_code" value="USD">
  </form>
</table>

<div class="addToCart noselect" onclick="addToCart()">
  Add to cart
</div>

## Details:

Shipping is flat rate $5 in the US. International shipping is flat rate $15.

I was frustrated by the lack of a good USB MIDI interface, so I buillt this to scratch my own itch! Along the way, I came up with a few cool little ideas. When plugged into a computer, this appears as 4 MIDI devices. Devices 1-3 map directly to the 3 in/out ports of the interface. The 4th port acts as a virtual MIDI thru, so any data sent to it will be output on all 3 of the physical ports.

Additionally, there's a physical MIDI thru switch. It has 3 postions: off, single, and all. Off disables all MIDI thru capabilites. Single will echo MIDI data out on the same physical port that data is input. All outpus MIDI data on all 3 physical ports. The intent is so you can use it as a standalone MIDI thru even if you don't have it connected to a computer.

Possibly the most exciting thing about this is that the code is all open source! Discover a bug? Want to add a new feature? Download the code and customize it to your needs! This is a great option as a USB MIDI development platform so hack away! Grab the code on github: [https://github.com/catskull/USBMIDIInterface](https://github.com/catskull/USBMIDIInterface)

I will ship to the address entered on the PayPal checkout page, so please double check to make sure it’s correct.

By purchasing, you are acknowledging that you've read and understand this page as well as my [FAQ](/faq) page.

<script src="{{ site.baseurl }}public/js/usbmidiinterfacegallery.js"></script>
