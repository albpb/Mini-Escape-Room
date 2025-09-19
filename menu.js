
function tapir()
{
    transicion("tapir.html");
}

function vinculo()
{
    transicion("vinculo.html");
}

function tent()
{
    transicion("https://alb-pb.itch.io/tents-for-escape-room");
}

function transicion(ref) {
    document.body.classList.add("fade-out");

      // Esperamos la duración de la animación (0.8s) y luego redirigimos
      setTimeout(() => {
        window.location.href = ref; // aquí pones el archivo destino
      }, 800);
}