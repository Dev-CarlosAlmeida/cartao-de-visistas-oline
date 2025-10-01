function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
  //se tiver ligt mode, adicionar a imagem light
  img.setAttribute("src", "./assets/foto1.png")
} else {
  // se tiver sem ligth mode, manter a imagem normal
  img.setAttribute("src", "./assets/foto2.png")
}
}
