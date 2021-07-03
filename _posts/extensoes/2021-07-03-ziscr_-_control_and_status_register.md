---
title: “Zicsr”, Control and Status Register (CSR) Instructions, Version 2.0
date: 2021-07-03 18:14:00 -0300
categories: [extensoes,rv32i,zicsr]
tags: [rv32i, rv64i, rv128i,  extensoes, 32bits, instrucoes, isa, zicsr, csr, control and status register, hart, timers, contadores, clock]
math: false
comments: false
toc: true
mermaid: false
image:
  src: "/assets/images/header_assembly.png"
  alt: RISCuinho
---
O RISC-V define um endereço separado de 4096 registradores de Status e Controle, associados com cada hart.  

CSRs são primáriamente utilizads pela arquitetura privilegiada, há vários usos no código não privilegiado incluindo para contadores e timers, e para status de ponto-flutuante.

Os contadores e timers não são considerados obrigatórios no ISA base, e para instruções CSR necessárias para acessa-las estão tratadas separadamente na especificação no capítulo 2. Sendo assim, também tratarei as instruções especificas separamente. 
