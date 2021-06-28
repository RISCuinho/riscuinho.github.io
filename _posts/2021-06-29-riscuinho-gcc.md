---
redirect_from: /gcc
title: Riscuinho GCC
date: 2021-06-18 18:40:00 -0300
categories: [gcc]
tags: [gcc, binutils, as, gdb]     # TAG names should always be lowercase
math: false
comments: true
toc: true
mermaid: true
image:
  src: /assets/images/logos/RISCuinho-Logo.png
  alt: RISCuinho
---

Gcc e Binutils para o RISCuinho foram compilados multi-lib para **rv32i** com **ilp32**; **rv32im** com **ilp32** and **rv32icmv** with **ilp32** que reusará este conjunto multi-lib. 

./configure --with-multilib-generator="rv32i-ilp32-rv32im-cmv" --with-arch=rv32imcv --with-abi=ilp32

## Issues

Caso esteja tendo algum problemas com esta versão especifica do GCC, há duas opções, deixar detalhes do problemas no comentário abaixo, ou usar a versão oficial.
