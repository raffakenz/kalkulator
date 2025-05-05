// const display = document.querySelector(".display")
// const buttons = document.querySelectorAll("button")
// const specialChar = ["%", "×", "÷", "-", "+", "="]
// let output = ""

// const calculate = (btnValue) => {
//     display.focus()
//     if (btnValue === "=" && output !== "") {
//         output = eval(output.replace("%", "/100"))
//     } else if (btnValue === "AC") {
//         output = ""
//     } else if (btnValue === "DEL") {
//         output = output.toString().slice(0, -1)
//     } else {
//         if (output === "" && specialChar.includes(btnValue)) return
//         output += btnValue
//     }
//     display.value = output
// }

// buttons.forEach((button) => {
//     button.addEventListener("click", (e) => calculate(e.target.dataset.value))
// })

const display = document.querySelector(".display")
const buttons = document.querySelectorAll("button")
const specialChar = ["%", "×", "÷", "-", "+", "="]
let output = ""

const calculate = (btnValue) => {
    display.focus()

    if (btnValue === "=" && output !== "") {
        let expression = output
            .replace(/×/g, '*')
            .replace(/÷/g, '/')
    
        // Tangani semua persen → ubah n% jadi (n/100)
        expression = expression.replace(/(\d+(?:\.\d+)?)%/g, (_, number) => `(${number}/100)`)
    
        try {
            output = eval(expression)
        } catch {
            output = "Error"
        }
    
    } else if (btnValue === "AC") {
        output = ""
    } else if (btnValue === "DEL") {
        output = output.toString().slice(0, -1)
    } else {
        if (output === "" && specialChar.includes(btnValue)) return
        output += btnValue
    }

    display.value = output
}

buttons.forEach((button) => {
    button.addEventListener("click", (e) => calculate(e.target.dataset.value))
})
