---
layout: default
description: Where you can find DIY Gameboy Chipmusic kits and accessories
---

<div class="tiles">
  {%  assign sorted_posts = site.posts | sort: 'pos' %}
  {% for post in sorted_posts %}
    <div class="tile">
    	<a href="{{ post.url }}">
    		<img src="{{ post.image }}"/>
    		<p>{{ post.title }}</p>
  	  	{% if post.new %}
  	  		<div class="after">
      			<p>New!</p>
      		</div>
      	{% endif %}
    		<div class="price">
    		  <p>${{ post.price }}0</p>
    		</div>
    	</a>
  	</div>
  {% endfor %}
</div>
