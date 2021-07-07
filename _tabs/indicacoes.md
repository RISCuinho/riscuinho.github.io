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
.randomize > *:nth-child(1), .randomize > *:nth-child({{site.data.indico.size}}) {display: block;}
</style>
<!-- The total size of related posts  -->

  <h1>Indicação de Compras - Ajude a Manter este Projeto</h1>
<p>Abaixo seleciono no Aliexpress alguns itens que podem ser úteis para sua bancada de laboratório, contribuindo assim com suas pesquisas e integração de seu ambiente computacional.</p>
<p>Os itens selecionados vão desde hubs USBs, adaptadores JTAGs para programação, extensores, ferramentas em geral da eletrônica, microcontroladores diversos, curiosidades, medidores como multimetros e até ociloscópios.</p>
<p>Os links geram comissões para que eu possa reverter para compras, assim eu posso manter também meu laborátorio atualizado e com a economia que faço eu posso investir escrevendo mais para o site e melhorando as publicações, as comissões são bem pequenas não mudam no valor que você compra, portanto você usando meu link você me ajuda muito.<p>
  <div id="indico" class="mt-2 mb-2 mb-sm-2">
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
  </div>

  <script src="/assets/js/randomize.js" type="text/javascript" charset="utf-8"></script>

