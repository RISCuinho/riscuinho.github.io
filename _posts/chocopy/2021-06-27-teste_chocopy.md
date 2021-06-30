---
title: Teste Chocopy
layout: chocopy
date: 2021-06-27 20:00:01 -0300
categories: [chocopy]
tags: [exemplos, python, chocopy, assembly]
math: false
comments: true
toc: true
mermaid: false
image:
  src: /assets/images/logos/RISCuinho-Logo.png
  alt: RISCuinho
chocopy:
   enable: true
   button:
      text: Compilar RISC-V
   containerClass: example
---

Exemplo de teste

<pre class="example">
# Search in a list
def contains(items:[int], x:int) -> bool:
    i:int = 0
    while i < len(items):
        if items[i] == x:
            return True
        i = i + 1
    return False

if contains([4, 8, 15, 16, 23], 15):
  print("Item found!")    # Prints this
else:
  print("Item not found.")
</pre>

