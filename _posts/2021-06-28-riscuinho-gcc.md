---
redirect_from: /gcc
title: Riscuinho GCC
date: 2021-06-28 18:40:00 -0300
author: Carlos Delfino
categories: [gcc]
tags: [gcc, binutils, as, gdb]     # TAG names should always be lowercase
math: false
comments: true
toc: true
mermaid: true
image:
  src: /assets/images/logos/riscv_gcc.jpg
  alt: RISCuinho
---

Gcc e Binutils para o RISCuinho foram compilados multi-lib para **rv32i** com **ilp32**; **rv32im** com **ilp32** and **rv32imc** with **ilp32** que reusará este conjunto multi-lib. 

./configure --prefix=/opt/riscuinho --host=i686-riscuinho-linux-gnu  --program-prefix="riscuinho-" --with-multilib-generator="rv32ic-ilp32--m*v" --with-pkgversion="RISCuinho-GCC" --with-bugurl="https://riscuinho.github.io/gcc" --with-documentation-root-url="https://riscuinho.github.io/gcc" --with-changes-root-url="https://riscuinho.github.io/gcc"

 - version: 11.1.0

 - multilib: . !march=rv32ic !march=rv32icv !march=rv32imc !march=rv32imcv !mabi=ilp32;rv32ic/ilp32 march=rv32ic !march=rv32icv !march=rv32imc !march=rv32imcv mabi=ilp32;

 - *multilib_defaults: march=rv64imafdc mabi=lp64d

 - *multilib_matches: march=rv32ic march=rv32ic;march=rv32icv march=rv32icv;march=rv32imc march=rv32imc;march=rv32imcv march=rv32imcv;mabi=ilp32 mabi=ilp32;


## Issues

Caso esteja tendo algum problemas com esta versão especifica do GCC, há duas opções, deixar detalhes do problemas no comentário abaixo, ou usar a versão oficial.

## Referências

- https://github.com/RISCuinho/riscv-gnu-toolchain
- https://gcc.gnu.org/install/configure.html
