# Tutorial Básico de Git

Antes de mais nada, o que é o git? Basicamente, é um sistema de controle de versão de projetos de desenvolvimento - embora sirva para outros tipos de projetos também. 

Tem um livro bastante completo, para quem manja de inglês, que é o [Pro Git Book](https://git-scm.com/book/en/v2 "Link Pro Git Book"). O @woliveiras tem um excelente artigo publicado no [medium](https://medium.com/trainingcenter/plano-para-estudar-git-e-github-enquanto-aprende-programa%C3%A7%C3%A3o-f5d5f986f459 "Artigo woliveiras Medium"), dando um boa visão geral para quem está começando do zero.

Começando do começo, a parte de preparação do ambiente (terminal, bash, etc.), vou tratar em outro texto.

Uma vez tudo certo com o ambiente de trabalho, podemos tratar de alguns dos principais comandos. Estes são comandos bem tranquilos que vimos em aula, os quais fazem as tarefas básicas necessárias para colocar um projeto no ar.

## Alguns comandos básicos


- `git init` (começar a seguir as pastas e arquivos de um projeto)

Esse comando utilizamos para começar um projeto (repositório) com o Git. Para usar ele só entrar na pasta de seu projeto e executar assim:

```
git init
```

- `git status` (informa o status do repositório)

Usando o comando acima, você terá como resultado informações de como está o estado dos arquivos e pastas. Na verdade, você receberá informações apenas dos arquivos e pastas novos, removidos ou alterados.

```
git status
```

- `git add` (segue os arquivos ou pastas no momento atual)

Com o comando `git add`, você guarda o momento do status atual dos arquivos e pastas para, em seguida, realizar o commit.

Se você quer guardar o momento de todos os arquivos e pastas, só executar o seguinte comando:

```
git add .
```

Se você quer pegar apenas alguns arquivos, você pode deixar o comando mais direto, dessa forma:

```
git add <nomeDaPasta ou nomeDoArquivo>
```

- `git commit` (guarda os arquivos e pastas no momento atual)

Com o `commit`, não é mais necessário ficar criando diversas pastas a cada atualização do projeto. Este comando guarda o momento do seu repositório. A parte legal é que você pode e deve informar uma mensagem junto com o momento atual. Isso facilita encontrar o estado se um dia precisar voltar nele.

```
git commit -m "anotações do git até o commit"
```

- `git log` (listas dos estados que guardamos `commit`)

Com este comando conseguimos ver todos os `commit` que já fizemos na vida do repo que você estiver.

```
git log
```

- `git commit--amend` (modifica o último `commit`)

Comando que permite alterar o `commit` mais recente. Para alterar simplesmente a mensagem, digamos que você enviou com um algum erro de digitação, o comando é o seguinte:

```
git commit --amend -m "nova mensagem de commit"
```

## Cheat Sheets

As cheat sheets são nada mais que folhas com um resumo dos comandos mais utilizados. Tipo um resumão, me ajudou bastante a estudar e também serve de referência quando não lembro de algum comando quando estou trabalhando no projeto.

Se você der um Google, aparecem milhares de resultados. Acabei separando dois que achei mais interessantes para indicar. Primeiro, um material do próprio [GitHub](https://github.com/fpsaraiva/curso-do-front-ao-end/blob/master/aula%2001/git-cheat-sheet-01.pdf "Cheat Sheet GitHub"), mais oficioso digamos assim. Segundo, um material feito pelo Hylke Bons (@hbons), uma [folha](https://github.com/fpsaraiva/curso-do-front-ao-end/blob/master/aula%2001/git-cheat-sheet-02.pdf "Cheat Sheet hbons") com um workflow super didático. 

## Referências para estudo

Como falei acima, existe muito material (e bom)para aprender Git/GitHub, disponível na rede. Aqui, vou colar aqueles que favorito em alguma busca ou outra:

- [Tutorial](https://www.atlassian.com/git/tutorials/learn-git-with-bitbucket-cloud "Tutorial Atlassian") "Learn Git with Bitbucket Cloud", da Atlassian;

- [Curso](https://www.udemy.com/git-e-github-para-iniciantes/ "Curso Willian Justen") "Git e Github para iniciantes", do Willian Justen (@willianjusten);

- [Curso](https://www.udemy.com/git-e-github-ninja/ "Curso Fernando Daciuk") "Curso Git e Github Ninja", do Fernando Daciuk (@fdaciuk);

- [Artigo](https://woliveiras.com.br/posts/comandos-mais-utilizados-no-git/ "Artigo Comandos Git") "Comandos mais utilizados no Git", do William Oliveira (@woliveiras);

- [Artigo](https://medium.com/trainingcenter/utilizando-o-fluxo-git-flow-e63d5e0d5e04 "Artigo Fluxo Git Flow") "Utilizando o fluxo Git Flow", do Mikael Hadler;

- [Artigo](https://udacity.github.io/git-styleguide/ "Artigo Commit Style Guide") (em inglês) "Udacity Git Commit Message Style Guide", do Udacity;

- [Artigo](https://medium.freecodecamp.org/how-not-to-be-afraid-of-git-anymore-fe1da7415286 "Artigo nor afraid of git") (em inglês) "How not to be afraid of Git anymore", do Neil Kakkar;

- [Artigo](https://medium.freecodecamp.org/follow-these-simple-rules-and-youll-become-a-git-and-github-master-e1045057468f "Artigo follow simple rules to become git master") (em inglês) "Follow these simple rules and you'll become a Git and GitHub master", do Ariel Camus.