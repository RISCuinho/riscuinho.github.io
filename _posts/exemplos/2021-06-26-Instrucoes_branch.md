---
title: Exemplo Instruções Branch
date: 2021-06-26 13:00:00 -0300
categories: [exemplos]
tags: [assembly, codigos, exemplos, addi, bne, beq, meneumonico]
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



Branch assembly instruction: 
  bne rs2, rs1, imm   i.e, relative branch (from current PC) if rs2 is not equal to rs1

Uses B-type format, e.g, branch instruction at PC = 08
  bne x1, x0, decrAndBNELoop
  instruction(31:0) = 0xfe009ee3

B-type  imm(12¦10:5)  rs2   rs1   funct3  imm(4:1¦11)  opcode  
hex (0x):    f      e     0       0     9        e         e      3
bin (ob): (1 111  111)(0 0000) (0000 1)(001)   (1110    1) (110 0011)

imm(12:1) = 1 1 111 111 1110
imm(0) = 0
imm(12:0) = 1 1 111 111 1110 0 = 1 1111 1111 1100 = 0x1ffc
extImm    = 0xfffffffc 

#==============================
# RISC-V instruction formats/examples (instruction generator https://www.vicilogic.com/vicilearn/run_step/?s_id=960)

# Copy/modify/paste this assembly program to Venus online assembler / simulator (Editor Window TAB) 
# https://www.kvakil.me/venus/
# Video tutorial: reference [8], vicilogic RISC-V Architecture and Applications 

# Convert Venus program dump (column of 32-bit instrs) to vicilogic instruction memory format (rows of 8x32-bit instrs)
# https://www.vicilogic.com/static/ext/RISCV/programExamples/convert_VenusProgramDump_to_vicilogicInstructionMemoryFormat.pdf
#============================

# assembly program            # Notes  (default imm format is decimal 0d)
start:
addi x1, x0, 3
loop1: 
 addi x1, x1, -1
 bne x1, x0, loop1
beq x0,x0, start

============================
Post-assembly program listing
PC instruction  basic assembly   original assembly    Notes
      (31:0)        code              code 
00 0x00300093  addi x1 x0 3   addi x1, x0, 3
04 0xfff08093  addi x1 x1 -1  addi x1, x1, -1
08 0xfe009ee3  bne x1 x0 -4   bne x1, x0, loop1
0c 0xfe000ae3  beq x0 x0 -12  beq x0,x0, start

==============================
Venus 'dump' program binary. No of instructions n = 11
00300093
fff08093
fe009ee3
fe000ae3

