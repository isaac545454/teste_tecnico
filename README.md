> ## 📄 como rodar

```bash
npm i
npm run json-server
npm run dev
```

> ## 📁 arquitetura do projeto
```shell

src/
|-- pages/(paginas_da_aplicão)
|   |-- home/
|   |-- Cart/
|   |-- PurchaseMade/
|   |   |-- index (view)
|   |   |-- model (hook)
|   |   |-- style (styles)
|-- Service/(camada_de_acesso)
|   |-- api/ (intancia)
|   |-- http/ (request)
|   |-- query/ (query-do-react-query)
|   |-- mutate/ (mutate-do-react-query)
|-- main/(camada_de_entrada_da_aplicão)
|   |-- main
|   |-- index.css
|-- components/(componentes_da_UI)
|   |-- button/
|   |-- CardProduct/
|   |   |-- CardProduct.stories(doc_do_componente)
|   |   |-- index.tsx(view)
|   |   |-- styles(estilos)
|-- models/(interfaces_do_sistema)
|   |-- Product(interfaces)
|-- routes/(rotas_da_aplicão)
|   |-- index(rotas)
|   |-- path(enderecos_das_rotas)
|-- layout/(componentes_que_ficam_ao_redor_como_header)
|   |-- index
|-- context/(criando_contexto_para_o_carrinho)
|   |-- index
|-- Theme/(detalhes_sobre_estilos)
|   |-- color(cores_da_aplicão)
|   |-- devices(tamanho_dos_dispositivos)
 
```


## imagens do projeto
![Empty State](./imagens_do_projeto/empity.png)
![home](./imagens_do_projeto/home.png)
![pesquisa](./imagens_do_projeto/pesquisa.png)
![selecionado](./imagens_do_projeto/selecionado.png)
