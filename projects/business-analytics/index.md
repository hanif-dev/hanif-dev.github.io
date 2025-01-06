---
title: "Business Analytics Projects"
description: "List of business analytics projects"
layout: default
---

# 📊 Business Analytics Projects

Welcome to the **Business Analytics** page! Below is the list of projects in this category.

---

## 🔍 Debugging Output
<!-- Debugging untuk memeriksa apakah koleksi 'business-analytics' terdeteksi -->
{{ site.business-analytics | inspect }}

---

## 🚀 **Project List**

<ul>
{% for project in site.business-analytics %}
  <li>
    <h3><a href="{{ project.url }}">{{ project.title }}</a></h3>
    <p><strong>Description:</strong> {{ project.description }}</p>
    <p><strong>Tools:</strong> {{ project.tools | default: "Not specified" }}</p>
  </li>
{% endfor %}
</ul>

---

## 🛠 **Tools Used**
These projects utilize various tools and technologies:
- **Visualization**: Tableau.
- **Data Processing**: Excel, SQL.

---

Click on **View Details** for each project to see the full explanation, code, and analysis results.

🔗 Return to [Home Page](../index.html)
