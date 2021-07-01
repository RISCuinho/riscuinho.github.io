---
title: Teste Chocopy
layout: chocopy
date: 2021-06-27 20:00:01 -0300
update: 2021-07-01 16:40:00 -0300
categories: [chocopy]
tags: [exemplos, python, chocopy, assembly, venus]
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

Exemplo para teste.

Infelizmente os scripts em JavaScript estão funcionando perfeitamente no servidor local, mas quando envio para o GitHub não aparece o Botão de compilação, não consigo achar o problema, apesar de ver um erro através do inspetor do navegador, este erro está impedindo que o script continue. Infelizmente ainda não sei como resolver este erro e porque ele só ocorre quando se usa o código pelo servidor do GitHub. ode ser algo com a versão do Jquery.

De qualquer forma o ChocoPy pode ser testado no link: [https://riscuinho.github.io/venus](https://riscuinho.github.io/venus), neste novo simulador você tem uma aba chamada chocopy, onde você pode digitar códigos em Python simples (um subset do Python ou seja o Chocopy) e compilar para gerar assembly Risc-V, este código em breve poderá ser testado no RISCuinho, assim que eu implementar a extensão RV32M (Multiplicação e divisão de inteiros)

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

