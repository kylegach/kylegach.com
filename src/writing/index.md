---
title: Writing
permalink: /writing/
layout: layouts/page
---


I believe design is made with words, not just pixels and code. This is where I practice.

{% if collections.writing.length %}
  {% for item in collections.writing %}
1. ## [{{ item.data.title }}]({{ item.url }})
   
   {{ item.date | date: '%Y-%m-%d' }}
  {% endfor %}
{% endif %}
