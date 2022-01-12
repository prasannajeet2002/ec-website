
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.links');

    burger.addEventListener('click' , () => {
        burger.classList.toggle('active');
        nav.classList.toggle('active');
    })
document.querySelectorAll(".list_items a").forEach(n=> n.addEventListener('click', () =>{
    burger.classList.remove('active');
    nav.classList.remove('active');
}))

