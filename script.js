function toggleMode() {
  const html = document.documentElement

  //pegar a tag img
  const img = document.querySelector("#profile img")
  //substituir a imagem de perfil
  if (html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("img.alt", "Foto de perfil modo escuro")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("img.alt", "Foto de perfil modo claro")
  }

  html.classList.toggle("light")
}
