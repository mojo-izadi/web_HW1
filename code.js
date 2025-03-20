
addAllListeners()

function updateFormulas() {
    const formulas = document.getElementsByTagName("formula")[0]

    for (let i = 0; i < formulas.length; i++) {
        let formula = formulas[i]
        let evaluator = formula.getAttribute("evaluator")
        console.log(formula.id, evaluator, evaluate(evaluator));
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

function addAllListeners() {
    const inputs = document.getElementsByTagName("input")
    for (let i = 0; i < inputs.length; i++) {
        inputs[i].addEventListener("input", updateFormulas)
        console.log(inputs[i])
    }
}
