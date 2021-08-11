---
title: ABI - Integer, Long, Pointer (ILP)
date: 2021-08-11 18:40:00 -0300
categories: [abi]
tags: [abi, ilp, ilp32, ilp32f, ilp32d, ilp64, ilp64f, ilp64d, application binary interface, integer, long, pointer, float, float point, soft float point, hard float point]    
math: false
comments: false
toc: true
mermaid: true
tagcloud: true
---

ILP é um termo que se refere a como o compilador trata os números Inteiros, Longos e os Ponteiros, qual seu comprimento e como são armazenados e manipulados internamente quando manipulados pelo Assembly, são arquiteturas ABI (Application Binary Interface), veremos aqui também que pontos flutuantes também são tratados neste ABI quando a são pós-sufixados com **f** ou **d**.

Conforme o [Guia Prático RISC-V](https://keybase.pub/carlosdelfino/mcu%20-%20cpu/risc-v/guia-pratico-risc-v-1.0.0.pdf), página 44 (69), "Os compiladores RISC-V suportam várias ABIs, dependendo se as extensões F e D estão presentes. Para o RV32, as ABIs são denominadas ilp32, ilp32f e ilp32d. ilp32 significa que os tipos de dados de linguagem C int, long e pointer são todos de 32 bits; o sufixo opcional indica como os argumentos de ponto flutuante são passados. No ilp32, argumentos de ponto flutuante são passados em registradores de inteiros. No ilp32f, argumentos de ponto flutuante de precisão simples são passados em registradores de ponto flutuante. No ilp32d, argumentos de ponto flutuante de precisão dupla também são passados em registradores de ponto flutuante.

Naturalmente, para passar um argumento de ponto flutuante em um registrador de ponto flutuante, é necessário a extensão de ponto flutuante F ou D da ISA (consulte o Capítulo 5).  Para compilar o código para o RV32I (GCC flag ‘-march=rv32i’), você deve usar o ABI ilp32 (GCC flag ‘-mabi=ilp32’). Por outro lado, ter instruções de ponto flutuante não significa que a convenção de chamada deva utilizá-las; Assim, por exemplo, o RV32IFD é compatível com todas as três ABIs: ilp32, ilp32f e ilp32d.

O linker verifica se a ABI do programa corresponde a todas as suas bibliotecas. Embora o compilador tenha suporte muitas combinações de extensões ISA e ABIs, apenas alguns conjuntos de bibliotecas podem ser instalados. Assim, um erro comum é vincular um programa sem ter as bibliotecas compatíveis instaladas. O linker não produzirá uma mensagem de diagnóstico útil nesse caso; ele tentará simplesmente vincular-se a uma biblioteca incompatível e, em seguida, informará a incompatibilidade. Esse erro geralmente ocorre apenas quando compila-se em um computador para um computador diferente (cross compiling)."
