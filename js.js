// فاکتوریل یکی از الگوریتم‌های ابتدایی است. اما گاهی اوقات ممکن است از شما سؤال شود که فاکتوریل یک عدد چطور محاسبه می‌شود؟ 
// بنابراین باید بدانیم فاکتوریل عدد به چه معنی است.
//  فاکتوریل هر عدد برابر با آن عدد ضرب در فاکتوریل عدد قبل خود است.
//  به این ترتیب همه اعداد به صورت بازگشتی در اعداد قبلی خود تا یک ضرب می‌شوند.

// پیاده‌سازی تکراری )(1)
// function iterativeFactorial(num) {
//     if (num === 0 || num === 1) {
//         return 1;
        
//     }

//     for (let i = num - 1; i >= 1; i--) {
//         num = num * i;
//     }

//     return num;
// }


// console.log(iterativeFactorial(5));
//output: 120

// (1 پیاده‌سازی بازگشتی)
function recursiveFactorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    }

    return num * recursiveFactorial(num - 1);
}

console.log(recursiveFactorial(6));