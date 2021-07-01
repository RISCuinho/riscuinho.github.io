---
title: Configurando o GTKwave
date: 2021-06-24 23:40:00 -0300
categories: [gtkwave]
tags: [gtkwave, vcd, test, analise, verilog]
math: false
comments: false
toc: true
mermaid: true
image:
 src: /assets/images/gtkwave/header_post_riscuinho.png

---

Projetar hardware nos tempos atuais demandam simulações, não partimos apenas de calculos e ideias, sem dúvida estes são os primeiros passos, mas durante a simulação precisamos ter métodos para analisar os sinais gerados e a ferramenta GTKWave é a melhor e mais consagrada para tal tarefa, é capaz de carregar diversos formatos de arquivos, sendo o formato VCD (Value Change Dump) o mais comum.

## VCD (Value Change Dump)

Não irei entrar em detalhes do formato VCD nesta publicação, quem sabe no futuro escrevo algo sobre o assunto, fique de olho no site na [tag VCD](/tags/vcd), ou no [forum do RISCuinho na página de exemplos](https://github.com/RISCuinho/exemplos/discussions).

Um bom lugar para ler sobre este formato de arquivo, é no site  ZipCPU, no artigo ["Writing you own VCD file"](https://zipcpu.com/blog/2017/07/31/vcd.html).

## Usando o GTKWave com o RISCuinho.

Após [clonar o core do RISCuinho](/posts/Clonando_o_Core_Riscuinho/) você pode usar o GTKWave para ver os sinais, para isso mude para o branch `beta_0.x`, digite o comando `make` normalmente ele irá executar um teste de simulação padrão da situação corrente do core, então ele criara um arquivo `RISCuinho.vcd`, você pode editar este arquivo para se familiar com seu conteúdo. Em seguida basta executar o comando `make gtkwave`, execute este comando apenas uma vez, ele irá abrir o gtkwave para você já configurado corretamente, você poderá alterar as configurações e sinais que deseja visulizar arrastando os sinais para a caixa da direita, depois você pode ir no menu: `File > Write Save File` ou pode usar a combinação [CTRL + S] assim irá salvar um arquivo de nome RISCuinho.gtkw na raiz do projeto, e quando chamar novamente o comando `make gtkwave` o gtkwave irá ser carregado novamente com as configurações salvas e o arquivo vcd do RISCuinho.

Veja cada vez que chamar `make gtkwave` ele irá abrir uma nova instância do GTKwave.

Conforme forem postando dúvidas no [Forum do RISCuinho]((https://github.com/RISCuinho/exemplos/discussions) ou nos [Issues]((https://github.com/RISCuinho/core/issues) amplio os artigos e tutoriais.

## Formatação de Tela do GTWave

O GTKwave foi formatado para grandes monitores, e pode ser um pouco desconfortável em telas pequenas, ao meu modo de ver considero qualquer tela menor que 21 olegadas uma tela pequena, portanto segue uma sugestão para melhorar a visualização dos sinais em monitores de 15 polegadas com baixa resolução.

Abaixo apresento os parametros que uso em minha estação Linux de trabalho, como ela usa a resolução de 1028x800 em um monitor de 15.4" reduzir o tamanho da fonte para 8 pixels e optei pela fonte Monospace que me permite uma visualização mais estruturada dos valores.

```
splash_disable on
use_nonprop_fonts 1
use_big_fonts 0
use_pango_fonts on
fontname_signals Monospace 8
fontname_waves Monospace 8
fontname_logfile Screen 8
editor "subl3 %s"
enable_horiz_grid 0
use_fat_lines 1
```
