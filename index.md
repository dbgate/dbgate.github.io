---
title: DbGate
headTitle: DbGate | Open Source SQL+noSQL Database Client
subtitle: The Smartest SQL+noSQL Database Client
layout: page
callouts: home_callouts
download_button: true
---

{% include carousel.html %}

{% include features.html %}

# Works with Databases
{% include databases.html %}

# Latest News
{% for post in site.posts limit:3 %}
<div class="column is-12">
  {% include post-card.html %}
</div>
{% endfor %}


{% include sponsor.html %}