---
title: Global Offset Table
date: 2021-06-18 18:40:00 -0300
categories: [assembly]
tags: [assembly, got, pic, pie]     # TAG names should always be lowercase
math: false
comments: false
toc: true
mermaid: true
image:
  src: /assets/images/logos/RISCuinho-Logo.png
  alt: RISCuinho
---

A **"Global Offset Table"**, ou **GOT**, é uma seção da memória do programa (executável ou biblioteca compartilhada) usada para abilitar o programa compilado como **ELF** para que seja executado corretamente, independente do endereço de memória que o programa ou dado foi carregado no runtime.

Seu mapa de símbolos no código de programa, corresponde ao endereço absoluto de memória para facilitar o **Position Independent Code** (PIC)  e **Position Independent Executables** (PIE) que são carregados para diferentes endereços de memória cada vez que o programa é iniciado. O endereço de runtime de memória, também conhecido como endereço absoluto de memória de variaves e funções é conhecido antes do programa ser inciado quando PIC ou PIE do codigo é executado para não ser hardcoded durante a compilação pelo compilador.

O **Global Offset Table** é representado pelas seções `.got` e `.got.plt` nos arquivos "ELF" que são carregados na memória de programa na inicialização. O ***dynamic linker*** do sistema operacinal é usado para atualizar a realocação do "global offset table"  (simbolos para endereços de memória absoluta) quando o programa é inicializado ou os simbolos são acessados. É um mecanismo que permite bibliotecas compartilhadas (.so) ser realocadas para diferntes endereços de memória no inicio do programa evitar conflitos de endreços do programa principal ou outras bibliotecas compartilhadas, e evitar técnicas de invasão como "exploits".
