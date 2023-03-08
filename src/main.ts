import "./style/index.css";

function calculate(str: string): boolean {
  let result: number = 0;
  let numbers: string[] = str.split(/[\+\-]/);
  let operators: string[] = str.split(/[0-9]/).filter((item) => item !== "");

  for (let i = 0; i < numbers.length; i++) {
    if (i === 0) {
      result += Number(numbers[i]);
    } else {
      if (operators[i - 1] === "+") {
        result += Number(numbers[i]);
      } else {
        result -= Number(numbers[i]);
      }
    }
  }
  document.querySelector("#myOutput")!.innerHTML = result.toString();
  document.querySelector("#isEven")!.innerHTML =
    result % 2 === 0 ? "Páros = Igen" : "Páros = Nem";

  return result % 2 === 0;
}

calculate((<HTMLInputElement>document.querySelector("#myInput")).value);

document.addEventListener("click", () => {
  calculate(document.querySelector('#myInput').value)
});