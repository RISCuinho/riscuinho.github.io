---
title: Registradores Risc-V
date: 2021-06-26 8:00:00 -0300
categories: [registradores]
tags: [assembly, registradores]
math: false
comments: false
toc: true
mermaid: false
image:
  src: "/assets/images/header_assembly.png"
  alt: RISCuinho
---

Um Risc-V possui 32 registradores que podem ser usados livremente, por são chamados de registradores de proposito geral, porém existe uma padronização atráves do ABI (Application Binary Interface) onde cada registrador recebe um nome e um uso, assim facilita uma maior integração no desenvolvimento de aplicações. Esta padronização facilita em muito o desenvolvimento em C.

## Registradores de Uso Geral

Na Tabela abaixo apresento os registradores de uso geral e seu nome padrão, o nome ABI, e sua descrição 

|Registrador|Nome ABI|Descrição                    |Quem Grava |
| :---:     | :---:  |:---                         |:---       |
|   x0      | zero   |Fisicamente conectado a zero |           |
|   x1      | ra     |Endereço de Retorno          |Origem chamada |
|   x2      | sp     |stack pointer                |Destino chamada|
|   x3      | gp     |Ponteiro Global              | -             |
|   x4      | tp     |Ponteiro Thread              | -             |
|   x5-7    | t0-2   |Registradores Temporários    |Origem Chamada |
|   x8      | s0 / fp|Registradore Preservado/Ponteiro de Frame|Destino Chamada|
|   x9      | s1     |Resitrador Preservado        |Destino Chamada|
|   x10-11  | a0-1   |Argumentos de Função/Valores de Retorno|Origem Chamada|
|   x12-17  | a2-7   |Argumentos de Função         |Origem Chamada |
|   x18-27  | s2-11  |Registradores Preservados    |Destino Chamada|
|   x28-31  | t3-6   |Registradores Temporarios    |Origem Chamada |

## Registradores Especificos

Na extenção padrão RV32I além dos 32 registradores de proposito geral, há mais um registrador de uso especifico para uso do Programa Counter, ele é de uso interno e contem o valor do `Program Counter`, para ter acesso ao seu valor veja instruções AUIPC, JAL, JALR e detalhes nos artigos de [exemplos](/tags/exemplos).
## Registradores e Extensões 

As extenções que alteram os comprimentos de bits do processador RISC-V de 32bits para 64 e 128, não alteram o número de registradores, apenas seu comprimento, portando o número de registradores neste tipo de extenção não alteara. Sendo assim os registradores sendo todos de 32bits, passam respectivamente a ser de 64 bits e 128 bits.

No caso da extenção RV32E que é para Embarcados, o número de registradores é reduzido para 16, mas o comprimento dos mesmo é mantido em 32 bits.

Algumas extensões podem adicionar novos registradores, não irei tratar aqui estes registradores, veja artigos relativos na [tag registradores](/tags/registradores).
