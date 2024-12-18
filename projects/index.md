---
layout: default
title: "Projects"
---

# Projects

{% for category in site.categories %}
## {{ category[0] }}  
<ul>
    {% for project in category[1] %}
    <li>
        <a href="{{ project.url }}">{{ project.title }}</a> - {{ project.description }}
    </li>
    {% endfor %}
</ul>
{% endfor %}
