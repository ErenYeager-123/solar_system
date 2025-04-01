document.addEventListener("DOMContentLoaded", () => {
    const planets = document.querySelectorAll(".sun, .mercury, .venus, .earth, .moon, .mars, .jupiter");

    planets.forEach((planet) => {
        const core = planet.querySelector(".planet-core"); // Lõi hành tinh
        const nameTag = document.createElement("div");
        nameTag.classList.add("planet-name");
        nameTag.innerText = planet.dataset.name;
        document.body.appendChild(nameTag);

        core.addEventListener("mouseenter", () => {
            nameTag.style.display = "block";
        });

        core.addEventListener("mouseleave", () => {
            nameTag.style.display = "none";
        });

        function updatePosition() {
            const rect = core.getBoundingClientRect(); // Vị trí chính xác
            nameTag.style.left = `${rect.left + rect.width / 2}px`;
            nameTag.style.top = `${rect.top - 20}px`;
            requestAnimationFrame(updatePosition);
        }

        updatePosition();
    });
});
