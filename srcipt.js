function Total() {
    var sub1 = parseInt(document.getElementById('eng').value);
    var sub2 = parseInt(document.getElementById('mat').value);
    var sub3 = parseInt(document.getElementById('phy').value);
    var sub4 = parseInt(document.getElementById('chm').value);
    var sub5 = parseInt(document.getElementById('cmp').value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert('enter the aproximet value');
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        document.getElementById('total').innerHTML = "english marks:" + sub1 + " <br> math marks : " + sub2 + " <br> physics marks: " + sub3 + " <br> chmestry marks: " + sub4 + " <br> computer marks : " + sub5 + " <br> total marks :" + total;
    }
}

function Average() {
    var sub1 = parseInt(document.getElementById('eng').value);
    var sub2 = parseInt(document.getElementById('mat').value);
    var sub3 = parseInt(document.getElementById('phy').value);
    var sub4 = parseInt(document.getElementById('chm').value);
    var sub5 = parseInt(document.getElementById('cmp').value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert('enter right value');
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var avg = total / 5;
        document.getElementById('avg').innerHTML = "your avarage marks is :" + avg;
    }
}

function Grade() {
    var sub1 = parseInt(document.getElementById('eng').value);
    var sub2 = parseInt(document.getElementById('mat').value);
    var sub3 = parseInt(document.getElementById('phy').value);
    var sub4 = parseInt(document.getElementById('chm').value);
    var sub5 = parseInt(document.getElementById('cmp').value);

    if (sub1 > 100 || sub2 > 100 || sub3 > 100 || sub4 > 100 || sub5 > 100) {
        alert('enter right value');
    } else {
        var total = sub1 + sub2 + sub3 + sub4 + sub5;
        var avg = total / 5;

        if (avg > 80 && avg < 100) {
            document.getElementById('grade').innerHTML = "you are got A+";
        } else if (avg > 70 && avg < 80) {
            document.getElementById('grade').innerHTML = "you are got A";
        } else if (avg > 60 && avg < 70) {
            document.getElementById('grade').innerHTML = "you are got A-";
        } else if (avg > 50 && avg < 60) {
            document.getElementById('grade').innerHTML = "you are got B";
        } else if (avg > 33 && avg < 50) {
            document.getElementById('grade').innerHTML = "you are got C";
        } else {
            document.getElementById('garde').innerHTML = "you are FAIL";
        }
    }
}