const num = Number.parseInt(prompt("Введите температуру в градусах по Фаренгейту:"));
printTemp(num);

function printTemp(num) {
    alert(`Цельсий: ${((num - 32)/1.8).toFixed(0)}, Фаренгейт: ${num}.`);
}
