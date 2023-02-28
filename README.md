# Resumo

Este é o repositório do meu portifólio pessoal! Uma aplicação de apresentação pessoal, feita com diversas camadas de estilizações e funções para tornar o site funcional, responsivo e acessível.

As linguagens utilizadas foram:
* HTML 5;
* CSS;
* Javascript;

----

# Objetivos do Projeto

Este projeto, fundalmentalmente, foi feito com o pilar de ser capaz de ser funcional mesmo que o Javascript fosse desativado, não perdendo sua principal função que é apresentar ao usuário meu trabalho e permitir meios de comunicação, como o formulário e acesso às redes sociais de maneira facilitada.

----

# Funções

No projeto, fiz questão de incluir o mínimo de funções possíveis para as funcionalidades do site, portanto, o código passou por diversas refatorações e novas mecânicas da linguagem que até então, não haviam sido incluídas em meu projeto anterior.

## Tipos de Funções

Dentre os tipos de funções utilizadas, estão:

* Funções _lambda_ ou _anônimas_: funções que não tem nomes de representação e recebem um parâmetro executando seu bloco interno. No projeto, utilizadas como _funções callback_;
* Funções nomeadas: estas que têm nome e recebendo um parâmetro, podem ser executadas em qualquer trecho do código assim que forem chamadas;
* _Arrow-Functions_: funções que são anônimas e tem a sintaxe reduzida para facilitar o uso em determinados trechos, sua principal característica é o uso da flecha: =>.

## Funções Presentes

Assim sendo, as funções presentes no projeto são as seguintes:
* Barra de Navegação: A barra de navegação deste portifólio funciona de acordo com o tamanho das respectivas seções que forem escolhidas pelo usuário para interação. O Javascript, por meio da DOM, pode identificar a interação do usuário com os botões presentes na barra de navegação, assim que essa interação acontece, por meio do evento definido como _"Click"_, a função callback anônima será ativada com o método *scrollTo* executando no elemento *window*, este recebe dois parâmetros, o primeiro é a posição horizontal a qual o scroll se movimentará, o segundo parâmetro é a posição horizontal, nesta função, sendo definido pelo método *offsetTop*, que retorna um valor _number_ do início da seção em relação ao topo do documento.

```Javascript
navIni.addEventListener("click", function(){window.scrollTo(0,heroSection.offsetTop)})
```

* Intersection Observer: O Intersection Observer é uma API nativa do Javascript que permite uma interação direta com os elementos HTML, a posição do que o usuário enxerga e o carregamento dinâmico destes elementos. Assim, é possível declarar um _observador_ que será responsável por visualizar os elementos, definindo através da propriedade _isIntersecting_ se está (true) ou não (false), na tela do usuário. Com isso, é possível definir uma função callback utilizando essa propriedade, neste caso, responsável por esconder ou mostrar os elementos para um efeito de animação interativo com o que quem faz o acesso enxerga.

```Javascript
// Elementos DOM
let arguments = [fotoEsq,fotoDir,descEsq,descDir, minhaFoto, descMe, cards, forms, redes]

const observer = new IntersectionObserver(function(entries, observer){
    entries.forEach(entry => {
        // se entry está na interseção, então remova a classe hidden, se não, adicione a classe.
        entry.isIntersecting ? entry.target.classList.remove("hidden") : entry.target.classList.add('hidden')
    })
})
arguments.forEach(argument => {
    observer.observe(argument)
})   
```

* Retornar ao Topo: É um botão simples que ao receber o evento de _"Click"_, retorna ao topo utilizando um comportamento semelhante aos botões de navegação. Utiliza o método _scrollTo_ para receber através do método _offsetTop_ o valor number para entrada no segundo parâmetro, que levará o usuário de volta ao topo da página.

```Javascript
const retornoBtn = document.querySelector(".retornoTopo-btn")
retornoBtn.addEventListener("click", heroSection =>{window.scrollTo(0,heroSection.offsetTop)})
```

* Validação de E-mail: Essa função recebe como parâmetro a entrada "E-Mail" do formulário HTML e valida se está dentro da _Expressão Regular (Regex)_ ou não, retornando um dado _*boolean*_. O objetivo é evitar que o usuário inclua um e-mail com caracteres inválidos, fazendo que, enquanto a entrada não seja válida, o botão estará indisponível para receber interações.
```Javascript
function validateEmail(email){
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (regex.test(email)){
        // fará com que o botão volte ao estilo inicial se o e-mail for válido
        submit.style.backgroundColor = '#92140c'
        submit.style.pointerEvents = 'auto'
        return true
    } else{
        // alterará os valores de estilo do botão para mostrar que o e-mail não é válido
        submit.style.backgroundColor = '#637074'
        submit.style.pointerEvents = 'none'
        submit.style.border = '0px solid #637074'
        return false
    }
}
// sempre que o foco for tirado da caixa e-mail, verificar o valor do input, se o e-mail for válido e retornar true, adicionará o hidden no modal, se retornar false, mostrará o modal
email.addEventListener("focusout",function(){
    validateEmail(email.value) ? modal.classList.add("hidden") : modal.classList.remove("hidden") 
})
```

----

# Conclusões Finais

Por fim, este foi um projeto divertido de se realizar, pois utilizou de métodos Javascript interessantes e que são constantemente usados em aplicações Web, além disso, abordou conceitos importantes e fundamentais da linguagem, como a _DOM_, _addEventListener_ e seleções por meio de _querySelector_, interações com a estilização dos elementos, formulários, navegação e responsividade dos elementos com CSS e Javascript.

&hearts; Obrigado por ler! &hearts;
