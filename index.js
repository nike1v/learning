//#1
var a = "aabbcc";
var result = "";
function rep_let(a) {
    var a_len = a.length;
    var a_spl = a.split("");
    for (var i = 0; i < a_len; i++) {
        var lett = a_spl[i];
        var y = 0;
        while (y < a_len) {
            if (lett == a_spl[y + 1]) {
                result = result + [lett];
                console.log(result);
                y++;
                return result;
            }
        }

    }
}

//#2
var strung = "    Hello WOrld    ";
var comp_res = "#";
strung = strung.split(" ");
strung = strung.filter(function (el) {
    return el != "";
  });
for(var i = 0; strung.length>i; i++){
    strung[i] = strung[i].toLowerCase();
    strung[i] = strung[i][0].toUpperCase()+strung[i].substr(1);
};
strung.join('');
if (strung == "" || strung.length > 139) {
    console.log("false")
}
else {
    comp_res = comp_res + strung;
}

//#3
var intervals = [[1, 4], [7, 10], [3, 6]];
var finis = 0;
var i = 0;
function sumIntervals(intervals) {
    var int_len = intervals.length; //array length
    var arr_1 = [];
    var arr_2 = [];
    var arr_res = [];

    for (i; int_len > i; i++) {
        arr_1 = intervals[i];//writing first elem of main interval variable
        
        for (i; arr_1[1] > i; i++) {
            for (let y = arr_1[0]; arr_1[1] > y; y++) {// rewriting array with all of elements from range
                arr_1[i] = y;
            }
        }
        arr_2 = intervals[i + 1];//writing next elem
        for (i; arr_2[1] > i; i++) {
            for (let y = arr_2[0]; arr_2[1] > y; y++) {
                arr_2[i] = arr_2[0];
            }
        }
        if (arr_1.length > arr_2.length) {//cheking what array have more lengths
            for (i; arr_1.length > i; i++) {
                if (arr_1[i] == arr_2[i]) {
                    arr_res = arr_1.concat(arr_2.filter(i => arr_1.indexOf(i) === -1))//uniting two overlapping arrays
                }
            }
        } else {
            for (i; arr_2.length > i; i++) {
                if (arr_1[i] == arr_2[i]) {
                    arr_res = arr_1.concat(arr_2.filter(i => arr_1.indexOf(i) === -1))
                }
            }
        }

        if (arr_res[0] == intervals[i][0]) {
            intervals[i] = arr_res; // rewriting united array into plase where it found
            //need to del second array what I united
        }
        return intervals;
    };
    for (i; int_len > i; i++) { //solving the length of intervals
        var eqv = intervals[i];
        var resut = eqv[1] - eqv[0];
        finis = finis + resut;
    };
    return finis;
}