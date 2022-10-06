class Calculator{
  constructor(previousOperationTextElement, currrentOperationTextElement){
    this.previousOperationTextElement=previousOperationTextElement
    this.currrentOperationTextElement=currrentOperationTextElement
    this.clear()
  }
clear(){
  this.currentOperand = ''
  this.previousOperand =''
  this.Opertion = undefined
}
delete() {
  this.currentOperand = this.currentOperand.toString().slice(0,-1)
}

appendNumber(number) {
  if (number === '.'  && this.currentOperand.includes('.'))return this.
  currentOperand= this.currentOperand.toString() + number.toString()

}

chooseOperation() {
  if (this.currentOperand === '') return
  if (this.previousOperand !== '') {
    this.compute()
  }
  this.operation = this.operation
  this.previousOperand = this.currentOperand
  this.currentOperand = ''
  
}

compute(){
  let computation
  const prev = parseFloat(this.previousOperand)
  const current = parseFloat(this.currentOperand)
  if (isNaN(prev)|| isNaN(current)) return

  switch (this.operaton) {
    case '+':
      computation = prev + current
      break
      
      case '-':
      computation = prev - current
      break
      case '*':
      computation = prev * current
      break
      case '/':
      computation = prev / current
      break
      default:
        return 
  }
  this.currentOperand = computation
  this.operation = undefined
  this.previousOperand = ''

}

getDisplayNumber(number) {
  const stringNumber= number .toString()
  const integerDigits= parseFloat(stringNumber.split('.')[0])
  const decimalDigits= stringNumber.split('.')[1]
  let inttegerDisplay
  if (isNaN (inttegerDigits)) {
    integerDisplay = ''
  } else {
    integerDisplay =integerDigits.toLocalstring('en',{
      maximumFractionDigits: 0})
  }
  if (decimalDigits !=null ){
    return '${integerDispaly}.${decimalDigits}'
  } else{
    return integerDisplay
  }
}

updateDisplay(){
  this.currentOperandTextElement.innerText = 
   this.getDisplayNumber(this.currentOperand)
  if (this.operation != null) {
   this.previousOperandTextElement.innerText = 
       '$ {this.previousOperand} $ {this.currentOperation}' 
    } else{
      this.previousOperandTextElement.innerText = ''
    }
  }
}

const numberButtons = document.querySelectorAll('[data-number]')
const operationsButtons = document.querySelectorAll('[data-operartion]')
const equalsButtons = document.querySelector('[data-equals]')
const deleteButtons = document.querySelector('[data-all-clear]')
const previousOperationTextElement = document.querySelector('[data-previous-operand]')
const currrentOperationTextElement = document.querySelector('[data-current-operand]')

const calculator = new Calculator(previousOperationTextElement,currrentOperationTextElement)

numberButtons.forEach(button =>{
  button.addEventlistner('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})


operationButtons.forEach(button =>{
  button.addEventlistner('click', ()=>{
    calculator.appendNumber(button.innerText)
    calculator.updateDisplay()
  })
})

equalsButtons.addEventListener('click', button =>{
  calculator.compute()
  calculator.updateDisplay()
})

AllclearButtons.addEventListener('click', button =>{
  calculator.clear()
  calculator.updateDisplay()
})

DeleteButtons.addEventListener('click', button =>{
  calculator.delete()
  calculator.updateDisplay()
})

