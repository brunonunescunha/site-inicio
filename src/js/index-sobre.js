const menus = document.querySelectorAll(".menu")

menus.forEach((menu) =>{
    menu.addEventListener("click", () => {
        const menuAtual = document.querySelector(".ativo")

        if(menuAtual){
            menuAtual.classList.remove("ativo")
        }
        menu.classList.add("ativo")
    })

    
})

const removeAtivoDoMenuNaAbaSobre = document.querySelector(".inicio-sobre") 
removeAtivoDoMenuNaAbaSobre.addEventListener("mouseenter", () => {

    const menuativo = document.querySelector(".menu-servicos")
    menuativo.classList.remove("ativo")
})

AOS.init();
