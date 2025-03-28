
function updateFormulas() {
    const formulas = document.getElementsByTagName("formula")
    const valueDisplays = document.getElementsByClassName("formula-value");

    for (let i = 0; i < formulas.length; i++) {
        let evaluator = formulas[i].getAttribute("evaluator")
        valueDisplays[i].textContent = ` = ${evaluate(evaluator)}`;
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
