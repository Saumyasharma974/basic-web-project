let b = document.querySelector(".mybutton1");
let b1 = document.querySelector(".mybutton2");
let copydiv = document.querySelector(".copycode");
let rgb1="#4f8371";
let rgb2="#dbff30";
const handle = () => {
    let hexa = "0123456789abcdef";
    colors = "#";
    for (let i = 0; i <6; i++) {
        colors += hexa[Math.floor(Math.random() * 16)];
    }
    return colors;
}
const handlebtn1 = () => {
    rgb1 = handle();
    console.log(rgb1);
    b.innerText = rgb1;
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copydiv.innerHTML = ` background-image: linear-gradient(to right,${rgb1},${rgb2})`;
};
const handlebtn2 = () => {
    rgb2 = handle();
    console.log(rgb2);
    b1.innerText = rgb2;
    document.body.style.backgroundImage = `linear-gradient(to right,${rgb1},${rgb2})`;
    copydiv.innerHTML = ` background-image: linear-gradient(to right,${rgb1},${rgb2})`
}


b.addEventListener("click", handlebtn1);
b1.addEventListener("click", handlebtn2)

copydiv.addEventListener("click",()=>{
    navigator.clipboard.writeText(copydiv.innerHTML);
    alert("Copied to Clipboard!");
    });
