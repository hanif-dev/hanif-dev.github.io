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
        {% if project.url and project.title %}
        <a href="{{ project.url }}">{{ project.title }}</a>
        {% endif %}
        {% if project.description %}
        - {{ project.description }}
        {% endif %}
    </li>
    {% endfor %}
</ul>
{% endfor %}

