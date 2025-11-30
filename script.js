// Colorblind-safe palettes (Okabe–Ito + extensions)
const basePalettes = {
    3: ["#0072B2", "#E69F00", "#009E73"],
    4: ["#0072B2", "#E69F00", "#009E73", "#F0E442"],
    5: ["#0072B2", "#E69F00", "#009E73", "#F0E442", "#CC79A7"],
    6: ["#0072B2", "#E69F00", "#009E73", "#F0E442", "#CC79A7", "#D55E00"],
    7: ["#0072B2", "#E69F00", "#009E73", "#F0E442", "#CC79A7", "#D55E00", "#56B4E9"],
    8: ["#0072B2", "#E69F00", "#009E73", "#F0E442", "#CC79A7", "#D55E00", "#56B4E9", "#999999"]
};

function generatePalette() {
    const n = document.getElementById("colorCount").value;
    const colors = basePalettes[n];

    // Palette preview
    const preview = document.getElementById("palettePreview");
    preview.innerHTML = "";
    colors.forEach(c => {
        const div = document.createElement("div");
        div.className = "swatch";
        div.style.background = c;
        preview.appendChild(div);
    });

    // Light chart
    const light = document.getElementById("chartLight");
    light.innerHTML = "";
    colors.forEach(c => {
        const bar = document.createElement("div");
        bar.style.background = c;
        bar.style.flex = 1;
        light.appendChild(bar);
    });

    // Dark chart
    const dark = document.getElementById("chartDark");
    dark.innerHTML = "";
    colors.forEach(c => {
        const bar = document.createElement("div");
        bar.style.background = c;
        bar.style.flex = 1;
        dark.appendChild(bar);
    });

    // Export formats
    document.getElementById("hexOutput").textContent =
        JSON.stringify(colors, null, 2);

    document.getElementById("cssOutput").textContent =
        colors.map((c, i) => `--color-${i + 1}: ${c};`).join("\n");

    document.getElementById("mplOutput").textContent =
        `["${colors.join('", "')}"]`;

    document.getElementById("snsOutput").textContent =
        `sns.color_palette(${JSON.stringify(colors)})`;
}

function copyText(id) {
    const text = document.getElementById(id).textContent;
    navigator.clipboard.writeText(text);
    alert("Copied!");
}
