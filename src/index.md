---
layout: layouts/base
---

# Kyle Gach

Rhymes with scratch.

_I'm rebuilding and redesigning this website in the open. [Follow along if you wish](https://github.com/kylegach/kylegach.com)._

Here are the related posts to that effort:

{% if collections.v2.length %}
  {% assign items = collections.v2 | reverse %}
  {% for item in items %}
1. [{{ item.data.title }}]({{ item.url }}) ({{ item.date | date: '%Y-%m-%d' }})
  {% endfor %}
{% endif %}