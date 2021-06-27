---
title: Extensões Padrão
date: 2021-06-26 10:00:00 -0300
categories: [extensoes]
tags: [rv32i, rv64i, rv128i, rv32e, rv32m, rv32a, rv32f, rv32d, rv32g, rv32q, rv32c, rv32b, rv32j, rv32t, rv32p, rv32h, rv32s, rv32n,  extensoes, risc-v, isa, 32bits, 64bits, 128bits]
math: false
comments: false
toc: true
mermaid: false
image:
  src: "/assets/images/header_assembly.png"
  alt: RISCuinho
---

|Nome   |Descrição                                                  |Versão  |Status  |Total de Instruções|
| :---: | :---                                                      | :---:  | :---:  | :---: |
|RV32I  |[Base Integer Instruction Set - 32-bit](/posts/base_integer_instruction_set_-_32bit/)                      |2.1     |Frozen  |49 |
|RV32E  |Base Integer Instruction Set (embedded) - 32-bit, 16 registers  |1.9|Open    |Same as RV32I|
|RV64I  |Base Integer Instruction Set - 64-bit                      |2.0     |Frozen  |14 |
|RV128I |Base Integer Instruction Set - 128-bit                     |1.7     |Open    |14 |
|M      |[Standard Extension for Integer Multiplication and Division](/posts/extensao_padrao_multiplicacao_divisao_de_inteiros) |2.0     |Frozen  |8  |
|A      |[Standard Extension for Atomic Instructions](/posts/extensao_padrao_instrucoes_atomicas)                 |2.0     |Frozen  |11 |
|F      |[Standard Extension for Single-Precision Floating-Point](/posts/extensao_padrao_single-precision_floating-point)     |2.0     |Frozen  |25 |
|D      |[Standard Extension for Double-Precision Floating-Point](/posts/extensao_padrao_double-precision_floating-point)     |2.0     |Frozen  |25 |
|G      |[Shorthand for the base and above extensions](/posts/extensao_de_agregacao)                |n/a     |n/a     |n/a|
|Q      |Standard Extension for Quad-Precision Floating-Point       |2.0     |Frozen  |27 |
|L      |Standard Extension for Decimal Floating-Point              |0.0     |Open    |Undefined Yet|
|C      |Standard Extension for Compressed Instructions             |2.0     |Frozen  |36 |
|B      |Standard Extension for Bit Manipulation                    |0.90    |Open    |42 |
|J      |Standard Extension for Dynamically Translated Languages    |0.0     |Open    |Undefined Yet|
|T      |Standard Extension for Transactional Memory                |0.0     |Open    |Undefined Yet|
|P      |Standard Extension for Packed-SIMD Instructions            |0.1     |Open    |Undefined Yet|
|V      |[Standard Extension for Vector Operations](/posts/extensao_padrao_operacoes_com_vetores) |0.7     |Open    |186|
|N      |Standard Extension for User-Level Interrupts               |1.1     |Open    |3  |
|H      |Standard Extension for Hypervisor                          |0.0     |Open    |2  |
|S      |Standard Extension for Supervisor-level Instructions       |1.12    |Open    |7  |
                                                                             
## Compondo multiplas extensões

As extensões acima podem ser compostas formando processadores especializados ou de uso especificos direcionados. O processador mais generico é a RV32G que é composto pelas extensões IMFAD, se for 64 bits é RV64G e se for 128 bits é RV128G.

As demais extensões devem ser referidas mantendo a mesma ordem que é listada na tabela acima, portando o correto é usar **RV32GJVN**, e não *RV32JNVG*.                                                                               
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
                                                                             
