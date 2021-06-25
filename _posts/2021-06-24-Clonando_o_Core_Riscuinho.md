---
title: Clonando o Core RISCuinho
date: 2021-06-24 23:40:00 -0300
categories: [core]
tags: [core, risc-v, clone, git, github, analise, verilog]
math: false
comments: false
toc: true
mermaid: true
image:
 src: /assets/images/github/header_github_clone_riscuinho.png

---

Para obter uma cópia do projeto RISCuinho você deve começar pelo Core do processador, assim você deve clonar o repositore que se encontra no endereço https://github.com/RISCuinho/core, caso não tenha conhecimento do Git ou do GitHub sugiro começar pelo estudo do GIT no próprio site, não precisa dominar 100% a ferramenta, apenas os comandos básicos:

* clone
* pull
* diff

Conhecendo estes comandos, você já poderá se manter atualizado e ver as novidades sem ter que ficar visitando o site do GitHub, mas para contribuir com o projeto você precisa conhecer mais 3 comandos:

* push
* add
* commit

## Clonando o projeto

Para clonar o projeto basta vocẽ criar uma pasta de trabalho e nela digitar o seguinte comando:

```
git clone https://github.com/RISCuinho/core
```

Este comando irá fazer o download de uma copia integral de todo o trabalho publicado no GitHub, apenas do código claro, as informações como issues, foruns, wiki e outros detalhes somente pelo site mesmo.

Com este comando será criado uma pasta de nome `core`, esta pasta pode ter seu nome alterado, ou ao fazer o clone você pode informar um novo nome como abaixo:

```
git clone https://github.com/RISCuinho/core riscuinho_core
```

Assim será criado uma pasta `riscuinho_core` que conterá o clone do repositório.

## Mantendo seu clone atualizado.

Depois de clonar seu repositório, você pode mante-lo sempre atualizado, para isso basta sempre que quiser entrar na pasta "core" ou "riscuinho_core" ou o nome que escolheu usar, e digitar o comando:

```
git pull
``` 

Lembre-se apartir de agora os demais comando devem ser digitado dentro da pasta criada que contem o clone de repositório.


## Referências

* [Manual do Git](http://git-scm.com/docs)
* [Manuais do GitHub](https://guides.github.com/)
