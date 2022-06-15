
// MENU
addEventListener('DOMContentLoaded',()=>{
    const btnMenu = document.querySelector('.btnMenu')
    if(btnMenu){
        btnMenu.addEventListener('click',()=>{
            const menuItems = document.querySelector('.menuItems')
            menuItems.classList.toggle('show')
        })
    }
})