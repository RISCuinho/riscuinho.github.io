---
title: RISCuinho EABI
date: 2021-07-01 08:40:00 -0300
categories: [EABI]
tags: [Assembly, C, C++, ABI, EABI, GCC]
math: false
comments: false
toc: true
mermaid: false
image:
  src: /assets/images/logos/RISCuinho-Logo.png
  alt: RISCuinho
---

A proposta para RISCuinho Embedded ABI (EABI) é um espelho da proposta RISC-V Embedded ABI (EABI) Version 20190525

Será traduziada aos poucos.
{: .notice}

## EABI

This is a proposal for a new ABI for RISC-V embedded systems.  The new
ABI will be called the embedded ABI, aka EABI, and is intended for
embedded targets only.  It will not be used for Linux, which will
continue to use the existing Unix ABI (UABI).

NOTE: The UABI might provide higher performance or lower code size for
some embedded applications, and will continue to be available for
embedded use.

Contributors (please suggest corrections): Krste Asanovic, Palmer
Dabbelt, Bruce Hoult, Liviu Ionescu, Andrew Waterman, Jim Wilson

## Goals

. The EABI is designed to reduce interrupt latency by reducing the
number of caller-saved registers.

. The EABI calling convention is designed to work the same on all
RISC-V embedded targets with the same XLEN (i.e., for 32-bit systems,
RV32I, RV32E, with or without the Zfinx option).

. The EABI is designed to reduce library code size by reducing the
size of the largest floating-point data type from 128 bits to 64 bits.

## EABI Overview

The EABI is based on the existing Unix ABI with the following
changes:

. The number of argument registers is reduced from 8 to 4.

. The upper 16 `x` registers (`x16`-`x31`), where present, are all
callee-saved.  (In UABI, 2 are argument registers and 4 are
temporaries.)

. The number of temporary registers is reduced from 3 to 2.

. The `long double` type size will be reduced from 128-bits to
64-bits.

NOTE: Reducing the number of argument registers means 4 fewer
registers need to be saved in an interrupt handler, which gives faster
interrupt response time.

NOTE: Making the upper 16 registers all callee-saved means that we can
use the same calling convention for RV32I and RV32E.  Also, it means 4
fewer registers need to be saved in an interrupt handler, on top of
the reduction from above.

NOTE: Reducing the number of temporary registers means one less
register to save in an interrupt handler.

NOTE: Optimizing EABI for interrupt latency with fewer caller-save
registers might have negative effects on performance and/or code size
relative to UABI.

NOTE: Reducing the size of `long double` helps reduce code size when
printf is linked in.  Currently, for a soft-float target, we need to
link in the 32-bit `float`, 64-bit `double`, and 128-bit `long double`
soft-float libraries.  With the change, we only need to link in the
first two libraries.  Similarly, on a hard-float target, we reduce
from one soft-float library to zero linked in with a `printf` call.

## Register Usage and Symbolic Names

The RISC-V base ISA assumes `x1` and `x5` are used as link registers
to hint any return address predictors in the machine, while the RISC-V
C compressed extension effectively mandates `x1` is the return address
register and that `x2` is the stack pointer.


|        | EABI Name | Description                    | Saver |
| :----: | :-------: | :----------------------------- | :---: |
|   x0   |    zero   | Hard-wired zero value          | - |
|   x1   |    ra     | Return address                 | Caller |
|   x2   |    sp     | Stack pointer                  | Callee |
|   x3   |    gp     | Global pointer                 | - |
|   x4   |    tp     | Thread pointer                 | - |
|   x5   |    t0     | Temporary/link register        | Caller |
|   x6   |    s3     | Saved register                 | Callee |
|   x7   |    s4     | Saved register                 | Callee |
|   x8   |    s0/fp  | Saved register/frame pointer   | Callee |
|   x9   |    s1     | Saved register                 | Callee |
|   x10  |    a0     | Argument/return value          | Caller |
|   x11  |    a1     | Argument/return value          | Caller |
|   x12  |    a2     | Argument                       | Caller |
|   x13  |    a3     | Argument                       | Caller |
|   x14  |    s2     | Saved register                 | Callee |
|   x15    |  t1     | Temporary                      | Caller |
|   x16-x31|  s5-s20 | Saved registers                | Callee |

NOTE: If an entire embedded application and its libraries make no use
of thread-local storage, the `tp` register becomes available as a global
register or as a temporary register, at the application's discretion.
If the `__global_pointer$` symbol is not defined, the `gp` register
becomes available in the same fashion.  Using the `tp` and `gp` registers
in this alternate way is a nonstandard extension to the EABI and might
not compose with some EABI libraries.

## EABI Stack Alignment

The stack alignment for XLEN=32 systems is 8 bytes.

NOTE: Stack alignment is not reduced below 8 bytes for RV32 systems in
case of hardware support of double-precision floating-point (RV32D).

The stack alignment for XLEN=64 systems is 16 bytes.

NOTE: Maintaining stack alignment of 2*XLEN can help optimized
microarchitectures save/restore multiple registers per cycle.

## EABI Interrupt Handler Context Save

An interrupt scheme wishing to provide a standard EABI interface for
interrupt handlers needs to save the following registers before
entering an EABI interrupt handler:

|||
|:---:|:---:|
  ra| x1
  t0| x5
  a0| x10
  a1| x11
  a2| x12
  a3| x13
  t1| x15

In addition, `sp` (`x2`) will need to be adjusted and might need to be
switched to a different interrupt stack; `gp` (`x3`) might need to be
switched to a different small-data section; and `tp` (`x4`) might need
to be switched to a different thread-local storage region.

## Floating-Point Registers and Argument Passing

Floating-point arguments are always passed in the integer registers
`a0`-`a3` or on the stack.

Where the separate `f` floating-point registers are present, they are
treated as all callee-save, so there is no increase in interrupt
latency.  Systems with separate `f` registers will have to move
floating-point arguments to the floating-point registers to use
hardware floating-point instructions, after first creating a
stack frame and storing some callee-saved floating-point registers.

NOTE: A separate hard-float EABI could add a few caller-saved
floating-point argument and temporary registers to improve performance
and code size, but at the expense of supporting another incompatible
ABI with increased interrupt latency.

Systems implementing Zfinx have no additional `f` registers and
provide hardware floating-point instructions operating directly on the
`x` registers.

## GCC Changes

The `gcc` inline expanded `memcpy` will be changed to copy 4 registers
at a time instead of 12, since we have eliminated 9 temporary
registers.

The `gcc` `REG_ALLOC_ORDER` macro is ABI-dependent.  This can be fixed
by defining the `ADJUST_REG_ALLOC_ORDER` macro to point at a function
that then modifies the register allocation order depending on the ABI.


## Referẽncia

- https://github.com/riscv/riscv-eabi-spec/edit/master/EABI.adoc
