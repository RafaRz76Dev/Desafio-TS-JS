# Tipagens que funcionam

Estamos construindo uma aplicação e precisamos que as tipagens que faltam definir estejam corretas para não gerar erros em nosso código.

## Avaliação e o que fazer:

Há cinco arquivos, chamados `desafio1`, `desafio2`, etc...

Em cada um desses arquivos, há tipagens mal configuradas que você precisará corrigir. Elas são (o número da lista indica o número do desafio)

1. A tipagem `IFullUser` deve possuir os campos de `IUserWorker` e também de `IUserStudent`.

2. Use a função TS `Omit` em `IExtendedWithoutFields` para fazer dele uma versão de `IExtendedUser` que seja igual a `ISiblingsUser`

3. A tipagem `myFunction` deve ser adequada para aceitar funções como a `duplicarNumero`.

4. Faça com que a tipagem `listType` , aplicada como array em `list_of_packs`, aceite valores numéricos e de texto.

5. Há a criação de um objeto - `userYouMader` - no código, utilizando a tipagem `IUserYouMade`. Ajuste essa tipagem para que os campos preenchidos no objeto sejam aceitos.

## Intalação do TypeScript

```
npm install -g typescript
```

## Verificar versão npm

```
npm -v
```

## Verificar versão node

```
node -v
```

## Instalar ts-node e @tsconfig/node16

```
npm install ts-node @tsconfig/node16
```

## Caso venha criar uma nova pasta do package-json sempre 1º tem que digitar para funcionar:

```
npm init
```

### Informações após digitar `npm init`:

- nome do pacote => "criar uma nova pasta com ts"

- version => da enter

- descrição do projeto => "De acordo com o planejamento do teu projeto"

- autor coloca teu nome

- licença autoriza MIT

- e as demais informações fica a teu critério

- finaliza com `yes`

### Após `npm init` vai digitar para instalação dos pacotes:

```
npm install -d typescript ts-node
```

### Só pra constar verifica novamente a versão node pois tem que estar acima de `14.7.0`

```
node -v
```

### Instalar os types nodes

```
npm i -D @types/node
```

## Ai sim vai rodar o código digitando:

```
npx ts-node index.ts
```

### Fazendo alteração para o JavaScript, no terminal do bash:

- 1º digita:

```
npm install -g typescript
```

- 2º Cada vez que realizar alteração nos arquivos.ts digita:

```
 tsc desafio.ts  index.ts
```

- Para o arquivo `java script`

### E para verificar a versão tsc e se deu certo, digita:

```
tsc -v
```

## Verificar novamente, versão node

```
node -v
```

## Ai roda em TS com:

```
npx ts-node index.ts
```

## No código JS vai com:

```
node index.js
```

## Se alterar no `package.json`

- Digita novamente a dependencia:

```
npm install
```

## Licença

- Esse projeto está sob a licença MIT.

---

<img src="https://media.giphy.com/media/ImmvDZ2c9xPR8gDvHV/giphy.gif" align="center" height="25" width="25"> Autor

<p>
    <img align=left margin=10 width=80 src="https://avatars.githubusercontent.com/u/87991807?v=4"/>
    <p>&nbsp&nbsp&nbspRafaRz76Dev<br>
    &nbsp&nbsp&nbsp<a href="https://api.whatsapp.com/send/?phone=47999327137">Whatsapp</a>&nbsp;|&nbsp;<a href="https://www.linkedin.com/in/rafael-raizer//">LinkedIn</a>&nbsp;|&nbsp;<a href="https://github.com/RafaRz76Dev">GitHub</a>|&nbsp;<a href="https://public.tableau.com/app/profile/rafael.raizer">Tableau</a>|&nbsp;<a href="https://portifolio-rafarz76dev.netlify.app/">Portfólio</a>&nbsp;</p>
</p>
