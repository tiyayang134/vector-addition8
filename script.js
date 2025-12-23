const modeRadios = document.querySelectorAll('input[name="mode"]');
const zInputs = document.querySelectorAll('.z-input');

modeRadios.forEach(radio => {
    radio.addEventListener('change', toggleZInputs);
});

function toggleZInputs() {
    const mode = document.querySelector('input[name="mode"]:checked').value;

    zInputs.forEach(input => {
        if (mode === "3D") {
            input.style.display = "inline-block";
        } else {
            input.style.display = "none";
            input.value = "";
        }
    });
}

// Run once on page load
toggleZInputs();

function calculate() {
    const mode = document.querySelector('input[name="mode"]:checked').value;

    const x1 = Number(document.getElementById("x1").value);
    const y1 = Number(document.getElementById("y1").value);
    const x2 = Number(document.getElementById("x2").value);
    const y2 = Number(document.getElementById("y2").value);

    let resultText = "";

    if (mode === "2D") {
        const Rx = x1 + x2;
        const Ry = y1 + y2;

        resultText =
`✨ 2D VECTOR ADDITION ✨

Vector A = (${x1}, ${y1})
Vector B = (${x2}, ${y2})

Step 1: Add x-components
Rx = ${x1} + ${x2} = ${Rx}

Step 2: Add y-components
Ry = ${y1} + ${y2} = ${Ry}

✅ Resultant Vector:
R = (${Rx}, ${Ry})`;

    } else {
        const z1 = Number(document.getElementById("z1").value);
        const z2 = Number(document.getElementById("z2").value);

        const Rx = x1 + x2;
        const Ry = y1 + y2;
        const Rz = z1 + z2;

        resultText =
`✨ 3D VECTOR ADDITION ✨

Vector A = (${x1}, ${y1}, ${z1})
Vector B = (${x2}, ${y2}, ${z2})

Step 1: Add x-components
Rx = ${x1} + ${x2} = ${Rx}

Step 2: Add y-components
Ry = ${y1} + ${y2} = ${Ry}

Step 3: Add z-components
Rz = ${z1} + ${z2} = ${Rz}

✅ Resultant Vector:
R = (${Rx}, ${Ry}, ${Rz})`;
    }

    document.getElementById("result").textContent = resultText;
}
