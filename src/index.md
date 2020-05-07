---
layout: layouts/base
---

<p style="background:lightyellow; font-size:smaller; margin:0; padding:0.5rem">I’m rebuilding and redesigning this website in the open. Follow along, if you wish.</p>

{% if collections.v2.length %}
  {% assign items = collections.v2 | reverse %}
  {% for item in items %}
1. [{{ item.data.title }}]({{ item.url }}) ({{ item.date | date: '%Y-%m-%d' }})
  {% endfor %}
{% endif %}