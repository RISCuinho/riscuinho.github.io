---
title: Extensão padrão para operações com vetores
date: 2021-06-26 10:00:00 -0300
categories: [extensoes, rv32v]
tags: [rv32i, rv64i, rv128i, rv32e, rv32m, rv32a, rv32f, rv32d, rv32g, rv32q, rv32c, rv32b, rv32j, rv32t, rv32p, rv32h, rv32s, rv32n, rv32v,  extensoes, vetores, isa, 32bits, 64bits, 128bits, machine learning, criptografia, vector machine]
math: false
comments: false
toc: true
mermaid: false
image:
  src: "/assets/images/header_assembly.png"
  alt: RISCuinho
---

No dia de escrita deste artigo, a extensão para operações com vetores tinha o release estável [v1.0-rc] (https://github.com/riscv/riscv-v-spec/releases/tag/v1.0-rc1). Este release é candidato a se tornar a versão v1.0 (frozen spec) para revisão pública.

## Versão/Revisão

O Projeto RISCuinho está trablando focado na [revisão V1.0-rc1](https://github.com/riscv/riscv-v-spec/releases/tag/v1.0-rc1) que está aberta para revisão pública.

## Exemplo de codigo usando RV32V


```assembly
    .text
    .balign 4
    .global strcpy
  # char* strcpy(char *dst, const char* src)
strcpy:
      mv a2, a0             # Copy dst
      li t0, -1             # Infinite AVL
loop:
    vsetvli x0, t0, e8, m8, ta, ma  # Max length vectors of bytes
    vle8ff.v v8, (a1)        # Get src bytes
      csrr t1, vl           # Get number of bytes fetched
    vmseq.vi v1, v8, 0      # Flag zero bytes
    vfirst.m a3, v1         # Zero found?
      add a1, a1, t1        # Bump pointer
    vmsif.m v0, v1          # Set mask up to and including zero byte.
    vse8.v v8, (a2), v0.t    # Write out bytes
      add a2, a2, t1        # Bump pointer
      bltz a3, loop         # Zero byte not found, so loop

      ret
```
