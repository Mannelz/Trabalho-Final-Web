let capas = ["apex.jpg", "blasphemous.jpg", "cyberpunk.jpg", "dark-souls-3.jpg", "god-of-war.jpg", "spider-man.jpg", "Among.jpg", "r6.jpg", "CS.jpg"]

let capasAtual = []

let pos = 0

let caminho = "/upload/produtos/"

function selectDestaque(capasAtual)
{
    for (let i = 0; i < 3; i++) 
    {
        pos = Math.floor(Math.random() * capasAtual.length);
    
        finalImg = caminho + capasAtual[pos]

        img = document.createElement('img')

        img.src = finalImg

        document.getElementById("destaques").appendChild(img)

        capasAtual.splice(pos, 1)
    }
}

window.onload = (event) => 
{
    capasAtual = capas
    selectDestaque(capasAtual)
};
  