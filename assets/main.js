
// Botões da navbar
let navbar = document.querySelector(".navbar")
let navIni = document.querySelector(".nav-inicio")
let navProj = document.querySelector(".nav-projetos")
let navSobre = document.querySelector(".nav-sobre-mim")
let navCont = document.querySelector(".nav-contatos")

// Sections 
let heroSection = document.querySelector(".hero")
let projetosSection = document.querySelector(".projetos")
let sobremimSection = document.querySelector(".sobre-mim")
let contatosSection = document.querySelector(".contatos-e-redes")

// Ao clicar, faz o scroll descer ao valor dado pelo Offset em relação a posição inicial Y das determinadas seções 
navIni.addEventListener("click", function(){window.scrollTo(0,heroSection.offsetTop)})
navProj.addEventListener("click", function(){window.scrollTo(0,projetosSection.offsetTop)})
navSobre.addEventListener("click", function(){window.scrollTo(0,sobremimSection.offsetTop)})
navCont.addEventListener("click", function(){window.scrollTo(0,contatosSection.offsetTop)})

// Função que colocará os elementos entre show e hidden de acordo com a interseção de cada um deles
const fotoEsq = document.querySelector(".foto-projeto-esq")
const descEsq = document.querySelector(".conteudo-esq")
const fotoDir = document.querySelector(".foto-projeto-dir")
const descDir = document.querySelector(".conteudo-dir")
const minhaFoto = document.querySelector(".minha-foto")
const descMe = document.querySelector(".apresentacao")
const cards = document.querySelector(".linguagens-de-programacao")
const forms = document.querySelector(".formulario-mensagem")
const redes = document.querySelector(".redes-sociais")

let arguments = [fotoEsq,fotoDir,descEsq,descDir, minhaFoto, descMe, cards, forms, redes]

document.addEventListener("load",function(){ 
    if (window.matchMedia("(max-width: 768px)").matches) {
        const observer = new IntersectionObserver(function(entries, observer){
            entries.forEach(entry => {
                // se entry está na interseção, então remova a classe hidden, se não, adicione a classe.
                entry.isIntersecting ? entry.target.classList.remove("hidden") : entry.target.classList.add('hidden')
            })
        })
        arguments.forEach(argument => {
            observer.observe(argument)
        })        
    }
})




// Função do botão de retorno ao topo

const retornoBtn = document.querySelector(".retornoTopo-btn")
retornoBtn.addEventListener("click", heroSection =>{window.scrollTo(0,heroSection.offsetTop)})

// Função para validar o email e esvaziar o forms assim que a função terminar
const nome = document.querySelector("#input-nome")
const email = document.querySelector("#input-email")
const assunto = document.querySelector("#input-assunto")
const mensagem = document.querySelector("#input-mensagem")
const submit = document.querySelector("#input-submit")
const modal = document.querySelector(".validacao-email")

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
