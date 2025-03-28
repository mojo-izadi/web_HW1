
function updateFormulas() {
    const formulas = document.getElementsByTagName("formula")
    const valueDisplays = document.getElementsByClassName("formula-value");

    for (let i = 0; i < formulas.length; i++) {
        let evaluator = formulas[i].getAttribute("evaluator")
        const evaluation_result = evaluate(evaluator)
        valueDisplays[i].textContent = ` = ${evaluation_result}`;

        if (evaluation_result === "invalid formula") {
            valueDisplays[i].style.color = "red";
        } else {
            valueDisplays[i].style.color = "inherit";
        }
    }
}

function evaluate(expression) {
    try {
        let vars = expression.split(/\W+/)
        vars.forEach(e => {
            let value = document.getElementById(e).value
            if(!value) throw new Error();
            expression = expression.replace(e, value)
        });
        return eval(expression)
    } catch (error) {
        return "invalid formula"
    }
}

const inputs = document.getElementsByTagName("input")
for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", updateFormulas);
}
