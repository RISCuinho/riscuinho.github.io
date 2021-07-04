---
title: Exemplo Instruções Branch
date: 2021-06-26 13:00:00 -0300
categories: [exemplos]
tags: [assembly, codigos, exemplos, addi, bne, beq, meneumonico, b-type]
math: false
pin: true
comments: true
toc: true
mermaid: false
image:
  src: /assets/images/header_assembly.png
  alt: RISCuinho
---

Instruções do tipo Branch no Assembly Risc-V, ou qualquer outro Assembly são usadas para construir algortimos similares a "If"

O Exemplo abaixo foi criado abaixo foi criado pelo professor Fearghal Morgan da univeridade Nacional de Ireland em Galway e foi disponibilizada no curso de RISC-V no site https://vicilogic.com.

```assembly
bne rs2, rs1, imm   
``` 

Esta instrução faz uma ramificação relativa do código (quanto ao PC corrente), se `rs2` não for igual a `rs1`.

Decomposição da instrução `bne x1, x0, decrAndBNELoop`, veja que neste exemplo o endereço destino é representado por um label, assim ele é substituido pelo endereço relativo ao `PC`, o código para esta instrução gerado neste exemplo é: `0xfe009ee3`

|B-type   |imm(12¦10:5)|   rs2  |   rs1  |funct3 | imm(4:1¦11) |  opcode  |  
| :---:   |   :---:    |  :---: |  :---: | :---: |    :---:    |   :---:  |       
|hex (0x):|            | 0   0  |  0   1 |       |             |  6    3  |
|bin (ob):|(1 111  111)|(0 0000)|(0000 1)| (001) | (1110    1) |(110 0011)|



No caso das instruções do tipo B (B-Type) a composição do valor Imediato (Imm) é um pouco mais complexa, como pode ver ele está espalhado pelo código da instrução, assim ele precisa ser montado, veja abaixo:

| 12  | 11  |   10:5  |  4:1 |
|:---:|:---:|  :---:  | :---:|
|  1  |  1  | 111 111 | 1110 |

O bit 0 do imediato é sempre o valor 0, já que não é preciso ser informado, o bit 2 não seria importante, porém temos a extensão compacta RV32C, neste caso o contador de endereço contabiliza a cada 2 bytes, mas quando RV32I e outras a contagem é feita a cada 4 bytes.

imm(12:1) = 1 1 111 111 1110
imm(0) = 0
imm(12:0) = 1 1 111 111 1110 0 = 1 1111 1111 1100 = 0x1ffc

**extImm**    = 0xfffffffc 

```assembly
# assembly program            # Notes  (default imm format is decimal 0d)
start:
addi x1, x0, 3
loop1: 
 addi x1, x1, -1
 bne x1, x0, loop1
beq x0,x0, start
```
Depois que você faz o assembly do programa acima no [Venus](https://riscuinho.github.io/venus/), você obtem a seguinte listagem:

|PC  | Machine Code | Basic Code    | Original Code    |
|:---:| :---        | :---          | :---             |
|0x0 | 0x00300093   | addi x1 x0 3  | addi x1, x0, 3   |
|0x4 | 0xFFF08093   | addi x1 x1 -1 | addi x1, x1, -1  |
|0x8 | 0xFE009EE3   | bne x1 x0 -4  | bne x1, x0, loop1|
|0xc | 0xFE000AE3   | beq x0 x0 -12 | beq x0,x0, start |

O Dump do mesmo assembly gera o seguinte programa binário com 4 instruções.
00300093
fff08093
fe009ee3
fe000ae3

