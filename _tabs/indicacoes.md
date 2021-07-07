---
title: Indicações
icon: fas fa-info
order: 3
---
<!--
 Lista de Indicação - tab
-->
<style>
// https://jekyllcodex.org/without-plugin/randomize/#
.randomize > * {display: none;}
.randomize > *:nth-child(1), .randomize > *:nth-child(50) {display: block;}
</style>
<!-- The total size of related posts  -->

{%assign indico_list = site.data.indico | sample: site.data.indico.size %}
  <div id="indico" class="mt-2 mb-2 mb-sm-2">
    <h3>Indicação de Compras - Ajude a Manter este Projeto</h3>
    <div class="card-columns mb-1 randomize ">
    {% for indico in indico_list %}
      <div class="card ">
        <a href="{{ indico.href }}" class="card-img-top">
         <img class="card-img-top" src="{{ indico.img }}" alt="{{ indico.description.text | markdownify | strip_html | truncate: 200 }}" />
        </a>
         <h5 class="card-title"> {{ indico.title | strip_html }}</h5>
      </div>
    {% endfor %}
    </div> <!-- .card-deck -->
  </div> <!-- #related-posts -->
<script>

function isvisible(obj) {
  return obj.offsetWidth > 0 && obj.offsetHeight > 0;
}
var shuffle = function() {
      elements = document.querySelectorAll('.randomize');
      Array.prototype.forEach.call(elements, function(parentel, i){
        var children = parentel.children;
        children = Array.prototype.slice.call(children, 0);
        children = Array.prototype.sort.call(children, function(a, b) {
            return Math.random() - 0.5;
        });
        for(var i = 0, l = children.length; i < l; i++) parentel.append(children[i]);
      });
};
shuffle();

elements = document.querySelectorAll('.randomize');
Array.prototype.forEach.call(elements, function(parentel, i){
    children = parentel.children;
    Array.prototype.forEach.call(children, function(el, j){
        if(isvisible(el)) {
            if(el.getAttribute('data-src')) el.setAttribute('src',el.getAttribute('data-src'));
            if(el.querySelector('img')) {
                Array.prototype.forEach.call(el.querySelectorAll('img'), function(imgel, j){
                    imgel.setAttribute('src',imgel.getAttribute('data-src'));
                });
            }
            if(el.querySelector('*')) {
                Array.prototype.forEach.call(el.querySelectorAll('*'), function(subel, j){
                    subel.setAttribute('style',imgel.getAttribute('data-style'));
                });
            }
        }
    });
});

</script>

