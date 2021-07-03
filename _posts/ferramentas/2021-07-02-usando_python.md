---
title: Usando o Python como ferramenta de apoio 
date: 2021-06-18 18:40:00 -0300
categories: [ferramentas]
tags: [ferramenta, python, python3, chocopy, debug, dump, vcd, venv]     
math: false
comments: false
toc: true
mermaid: true
image:
  src: /assets/images/logos/RISCuinho-Logo.png
  alt: RISCuinho
---

O Python é usado no RISCuinho como ferramenta para ajudar nos testes, e também para ajudar a ensinar a programação assembler, mas neste post iremos falar da instalação de forma geral e em seguida com o foco para uso nos testes.

Primeiro instale o **Python3** e o **pip3** em seu ambiente de trabalho como sugere os melhores artigos na internet, não irei entrar neste detalhe aqui pois há muitos artigos bons sobre isso e é uma tarefa muito simples.

Em seguida crie um ambiente virtual para ele, onde irá instalar as bibliotecas especificas para uso no RISCuinho, por padrão convencionei que este ambiente virtual se chamará `python_riscuin`. Portanto basta digitar o comando abaixo na pasta "core" do projeto do RISCuinho. Você pode fazer isso também no Workspace onde trabalha nos projetos do RISCuinho se preferir.

```bash
python3 -m venv python_riscuin
```

Agora você deve ativar este ambiente para que os passos das seções a seguir sejam executados adequadamente e não interfiram na sua intalação Python de seus ambiente geral.

```bash
. ./python_riscuin/activate
```

com este comando executado, sua linha de comando fica prefixada: 

```
(python_riscuin) ~/workspace/RISCuinho/core$ 
```


## Instalando ferramentas para trabalhar com o VCD

O VCD é um tipo de arquivo muito importante na depuração de projetos de design de hardware, ele é gerado pelas ferramentas de simulação Verilog, como o iVerilog e com o python podemos processa-los e analisar se tudo está correto como desejamos.

Iremos usar em nossos testes o VCDVCD, para instala-lo é preciso também a biblioteca **importlib_resources**, use o comando a seguir:

```bash
(python_riscuin) ~/workspace/RISCuinho/core$ pip install importlib_resources vcdvcd
```

Considerando que você já andou fazendo testes com o RISCuinho é bem certo que vocẽ tem um arquivo de extensão `.vcd` dentro da pasta `core` onde clonou o projeto de mesmo nome, se não tiver entre nesta pasta, se não estiver nela, e execute o comando `make` ele irá executar o `iverilog` e gerar um novo arquivo `RISCuin.vcd`.

Agora para testar se tudo está ok, basta digitar o comando:

```bash
(python_riscuin) ~/workspace/RISCuinho/core$ vcdcat RISCuin.vcd |less
```

Veja nesta primeira interação usei o less, para facilitar, pois o riscuinho nesta versão tem mais de 170 sinais disponivéis (gerando linhas com 800 colunas), além de ter pelo menos 300 linhas só no exemplo com 3 instruções `addi`, então escolhi alguns sinais e vou apresenta-los de uma forma diferentte, com o comando a seguir apenas quando eles se alteram:

```bash
(python_riscuin) ~/workspace/RISCuinho/core$  vcdcat -x RISCuin.vcd time RISCuin_tb.finish_rst RISCuin_tb.start_rst RISCuin_tb.rst RISCuin_tb.pc_end RISCuin_tb.cpu.pc_enable -d
```

o comando acima lista expecificamente os sinais indicados `-x` e apenas os apresenta quando váriam de valor `-d` (delta), experimente o comando sem o  *delta*.

Mais tarde trago mais informações sobre o uso do VCDVCD.
{: .notice} 
