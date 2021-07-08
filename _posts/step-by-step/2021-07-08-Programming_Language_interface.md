---
title: Programming Language Interface (PLI)
categories: [programacao, verilog]
tags: [pli, verilog, programacao]
date: 2021-07-08 08:40:00 -0300
author: Carlos Delfino
math: false
comments: true
toc: true
mermaid: true
share: true
tagcloud: true
---

programming Lanaguage Interface (PLI) é um mecanismo qe fornece uma interface de programa com a aplicação (Application Program Interface - API) para o Verilog. Em essência ele é um mecanismo para invocar funções escritas em linguagem C a partir do código escrito em Verilog. A construção que invoca a rotina PLI no código Verilog é normalmente chamado de uma *"system call"* (Chamada de Sistema), se for definida internamente no simulador, e *"user-defined task"* ou *"function"*, se ela é escrita pelo usuário. 

Tanto para o *System Call* quanto para *User-defined task* o mecanismo básico de funcionamento permanece o mesmo para o PLI, ortanto sempre usarei o termo *System Call* para fazer referẽncia a tal recurso de chamda.

Chamadas como `$display`, `$monitor`, `$finish` são *System Calls* internas de qualquer simulador. Podemos vir a encontrar outras especificas o que é raro. 

O PLI é usado para fazer tarefas que normalmente o Verilog não faria, como caregar um arquivo para um registrador, ou gravar noutro arquivo a situação de sinais especificos para depuração. Podemos também descrever modelos funcionais, calcular atrasos e obter informações de designer como a hierarquia de instãnciação dos dos módulos.

