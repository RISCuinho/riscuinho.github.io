---
title: Desenvolvendo um Sistema Operaconal para o RISCuinho passo a Passo 
date: 2021-07-03 14:40:00 -0300
categories: [step-by-step]
tags: [step-by-step, os, operate system, bsd, linux, development, rv32m]     
math: false
comments: true
toc: true
mermaid: false
image:
  src: /assets/images/logos/RISCuinho-Logo.png
  alt: RISCuinho
---

Neste artigo vou anotar meus estudos de como desenvolver um Sistema Operacional para o RISCuinho, como no momento somente temos a extensão RV32I funcionando não poderemos fazer quase nada, mas isso será motivação para desenvolver outras extensões conforme ouver demanda de instruções, assim irei desenvolver as demais extensões conforme a demanda deste sistema operacional.

Este trabalho intercede e complementa outros trabalhos que tem a mesma caracteristicas, como o desenvolvimento da extensão [RV32V](/tags/rv32v) que demanda as extensões [RV32M](/tags/rv32m/), e o desenvolvimento do Chocopy que também demanda a extensão [RV32M](/tags/rv32m).

## Extensões que precisam ser desenvolvidas

Além do básico [RV32I](/tags/rv32i), há outras extensões que precisam ser desenvolvidas por completo ou parcialmente. Além de recursos de hardware que podem trazer grandes avanços quanto ao desempenho do RISCuinho, estas melhorias de hardware ainda não estão no meu foco principal, pois preciso me aprofundar melhor, principalmente, no desenvolvimento do pipeline, portanto de imediato já identifico que preciso finalizar a extensão [RV32M](/tags/rv32m), tabmém é provável que será necessário o desenvolvimento da extensão [RV32A](/tags/rv32a).


Aos poucos, conforme estudo irei ampliando as anotações desta seção.


## O que preciso para começar.

Vamos começar os estudos usando o QEMU, mas conforme o entendimento do desenvolvimento tomar corpo irei criar outro artigo usando o próprio RISCuinho simulado via iVerilog, ainda não sei como irei fazer para lidar com questões de comunicação externa, mas até lá, acredito que encontrarei soluções, use os comentários abaixo caso queira colaborar de alguma forma.


### Ferramentas para desenvolvimento

Bem para desenvolver você vai precisar:

* GIT e ferramentas de apoio para baixar códigos de exemplo dos repositórios de desenvolvedores
* build-essential, que possui o GCC e outras ferramentas como binutils para compilação de código
* libfdt-dev e libsdl2-dev
* VI, o melhor editor para se trabalhar no Linux, também é bom para o Windows, mas no Windows eu prefiro o NotePad++

```bash
sudo apt install build-essential git gitk vim libfdt-dev libsdl2-dev
``` 
