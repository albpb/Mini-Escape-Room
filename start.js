
const input = document.getElementById("inputozark")

input.addEventListener("input", (e) =>
    {
        const valour = e.target.value.trim();

        if (valour.toLowerCase() == "ozark")
        {
            lanzarConfeti();

            transicion();
        }
        
    }
);


function lanzarConfeti() {
      for (let i = 0; i < 50; i++) {
        const confeti = document.createElement("div");
        confeti.classList.add("confeti");

        // colores random
        confeti.style.backgroundColor = 
          `hsl(${Math.random() * 360}, 100%, 50%)`;

        // posición horizontal random
        confeti.style.left = Math.random() * 100 + "vw";

        // tamaño random
        confeti.style.width = confeti.style.height = 
          Math.random() * 8 + 4 + "px";

        // duración random
        confeti.style.animationDuration = (Math.random() * 3 + 2) + "s";

        document.body.appendChild(confeti);

        // eliminar después de la animación
        setTimeout(() => {
          confeti.remove();
        }, 5000);
      }
    }

function transicion() {
    document.body.classList.add("fade-out");

      // Esperamos la duración de la animación (0.8s) y luego redirigimos
      setTimeout(() => {
        window.location.href = "menu.html"; // aquí pones el archivo destino
      }, 800);
}