# Tutorial Básico de Git

Antes de mais nada, o que é o git? Basicamente, é um sistema de controle de versão de projetos de desenvolvimento - embora sirva para outros tipos de projetos também. 

Tem um livro bastante completo, para quem manja de inglês, que é o Pro Git Book (https://git-scm.com/book/en/v2)

Começando do começo, para instalar o git é só você acessar o site https://git-scm.com e baixar. A parte de preparação do ambiente (terminal, bash, etc.), vou tratar em outro texto.

Uma vez tudo certo com o ambiente de trabalho, podemos tratar de alguns dos principais comandos. Assim, principais digo para iniciantes como eu, ou seja, fazem as tarefas básicas necessárias para colocar um projeto no ar.


- `git init` (começar a seguir as pastas e arquivos de um projeto)

Esse comando nós utilizamos para começar um projeto com o Git. Chamaos a pasta do projeto de repositório ou só repo. Para usar ele só entrar na pasta de seu projeto e executar assim:

```
git init
```

- `git status` (informa o status do repositório)

Usando o comando acima, você terá como resultado informações de como está o estado dos arquivos e pastas. Na verdade, você receberá informações apenas dos arquivos e pastas novos, removidos ou alterados.

- `git add` (segue os arquivos ou pastas no momento atual)

Com o comando `git add`, você guarda o momento do status atual dos arquivos e pastas para, em seguida, realizar o commit.

Se você quer guardar o momento de todos os arquivos e pastas, só executar o seguinte comando:

```
git add .
```

Se você quer pegar apenas alguns arquivos, você pode deixar o comando mais direto, dessa forma:

```
git add pasta/arquivo
```

- `git commit` (guarda os arquivos e pastas no momento atual)

Com o `commit`, não é mais necessário ficar criando pastas old ou com datas bizarras. Este comando guarda o momento do seu repo. A parte legal é que você pode e deve informar uma mensagem junto com o momento atual. Isso facilita encontrar o estado se um dia precisar voltar nele.

```
git commit -m "anotações do git até o commit"
```

- `git log` (listas dos estados que guardamos `commit`)

Com este comando conseguimos ver todos os `commit` que já fizemos na vida do repo que você estiver.