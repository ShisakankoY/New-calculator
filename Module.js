function calculator() {
    const Btn = document.getElementById('button');
    Btn.addEventListener('click', () => {
        const first = Number(prompt("数字を入力してください。"));
        if (isNaN(first) ) {
            alert("数値を入力してください。");
            return;
        }
        const second = prompt("足す時は＋, 引く時は-, 掛ける時は*, 割る時は/, あまりを求めるときは%を入力してください。");
        if (!["+", "-", "*", "/", "%"].includes(second)) {
            alert("正しい記号を入力してください。");
            return;
        }
        const third = Number(prompt("数字を入力してください。"));
        if (isNaN(third) ) {
            alert("数値を入力してください。");
            return;
        }
        const answer = document.getElementById('answer');
        let num;
        if (second === "+") {
            num = first + third;
            alert(num);
            answer.textContent = num;
        } else if (second === "-") {
            num = first - third;
            alert(num);
            answer.textContent = num;
        } else if (second === "*") {
            num = first * third;
            alert(num);
            answer.textContent = num;
        } else if (second === "/") {
            num = first / third;
            alert(num);
            answer.textContent = num;
        } else if (second === "%") {
            num = first % third;
            alert(num);
            answer.textContent = num;
        }
    });
}

export { calculator };