---
layout: page
title: Zines
permalink: /art/zines
display_order: 1
images:
thumbnail_image: ../img/zines/zines_thumbnail.png
---

{% assign zines = site.pages | where_exp:"item", "item.path contains 'zines/'" | sort: "display_order" %}


<div class="portfolio_gallery zine_gallery center">
    {%- for zine in zines -%}
    <div class="portfolio_item">
	     <div class="gallery_card">
	      	<a href="{{ zine.permalink }}" data-fancybox="gallery" data-caption="Thumbnail image for {{ zine.title }}">
		      	<div class="gallery_card_top">
		      		<img class="thumbnail" src="{{ zine.thumbnail_image }}"/>
		      	</div>
		      	<div class="gallery_card_bottom">
		      		<div class="page_title"> {{ zine.title }} </div>
		      	</div>
	      	</a>
	      </div>
		  </div>
    {%- endfor -%}
</div>