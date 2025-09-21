document.addEventListener("DOMContentLoaded", () => {
    if (document.body.classList.contains("flowers-bg")) {
        const container = document.getElementById("falling-container");

        function createFallingElement() {
            console.log("🌼 Creando flor/estrella...");
            const el = document.createElement("div");
            el.classList.add("falling");

            // Alterna entre flor amarilla 🌻 y estrella ✨
            el.innerHTML = Math.random() > 0.5 ? "🌻" : "✨";

            // Posición horizontal aleatoria
            el.style.left = Math.random() * 100 + "vw";

            // Duración aleatoria de la caída
            el.style.animationDuration = (3 + Math.random() * 5) + "s";

            // Tamaño aleatorio
            el.style.fontSize = (1 + Math.random() * 1.5) + "rem";

            container.appendChild(el);

            // Eliminar después de caer
            setTimeout(() => el.remove(), 8000);
        }

        // Cada medio segundo aparece una nueva
        setInterval(createFallingElement, 500);
    }
});
