const nums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
function pow(x, y){
    var z = 1;
    for (var q = 0; q < y; q++){
        z *= x;
    }
    return z;
}
function d0(arr){
    if (arr[0] === 0){
        var arr1 = arr.slice(1);
        return d0(arr1)
    } else {
        return arr;
    }
}
function d0_str(s){
    if (s.slice(0, 1) === '0'){
        var s1 = s.slice(1);
        return d0_str(s1);
    } else {
        return s;
    }
}
function lg(x, base){ //С округлением вверх
    var res = 0;
    while(pow(base, res) < x){
        res++;
    }
    return res;
} 
function division(a, b){ //С округлением вниз
    var res = a / b;
    res -= (res % 1);
    return res;
}
function tr(){
    from_s = Number(document.getElementById('from_s').value);
    from_n = document.getElementById('from_n').value;
    to_s = Number(document.getElementById('to_s').value);
    if (to_s > 36 || to_s < 2){
        alert("Основание системы счисления должно лежать в диапозоне от 2 до " + nums.length);
        return undefined;
    }
    var num = [];
    for (var i = 0; i < from_n.length; i++){
        num[i] = from_n.slice(i, i+1);
    }
    for (var j = 0; j < num.length; j++){
        num[j] = nums.indexOf(num[j]);
    }
    num = d0(num);
    for (var k = 0; k < num.length; k++){
        if (num[k] >= from_s){
            alert("Вы использовали недопустимую цифру для этой системы счисления: " + nums[num[k]]);
            return undefined;
        }
    }
    var num_N = 0; //Число в 10-тичной системе счисления
    for (var l = num.length - 1; l >= 0; l--){
        num_N += pow(from_s, num.length - 1 - l) * num[l];
    }
    var res = "";
    for (var m = lg(num_N, to_s); m >= 0; m--){
        res += String(division(num_N, pow(to_s, m)));
        num_N %= pow(to_s, m);
    }
    res = d0_str(res);
    document.getElementById('to_n').innerHTML = '<br><span class="res">' + res + '</span>'
    document.getElementById('from_n').value = '';
    document.getElementById('from_s').value = '';
    document.getElementById('to_s').value = '';
}