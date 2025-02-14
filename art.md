---
layout: home
title: Art Portfolio
permalink: /art
include_in_nav: true
---

{% assign art_portfolio_items = site.pages | where_exp:"item", "item.path contains 'art/'" | sort: "display_order" %}


<div class="portfolio_gallery center">
    {%- for item in art_portfolio_items -%}
	     <div class="gallery_card">
	      	<a href="{{ item.permalink }}" data-fancybox="gallery" data-caption="Thumbnail image for {{ item.title }}">
		      	<div class="gallery_card_top">
		      		<img class="thumbnail" src="{{ item.thumbnail_image }}"/>
		      	</div>
		      	<div class="gallery_card_bottom">
		      		<div class="page_title"> {{ item.title }} </div>
		      	</div>
	      	</a>
	      </div>
    {%- endfor -%}
</div>

{% comment %}
<script src="../assets/portfolio_card_sort.js"></script>
{% endcomment %}