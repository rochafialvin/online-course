// If Else If Else Statement

// REVIEW

// If
if(condition){
    // Statement
}

// If Else
if(condition){
    // Statement 1
} else {
    // Statement 2
}

// If Else if Else
if(condition_1){
    // Statement 1
} else if (condition_2){
    // Statement 2
} else if(condition_3){
    // Statement 3
} else if(condition_4){
    // Statement 4
} else {
    // Statement 5
}


// Nilai Ujian

// Points : 100 - 85 : A
// Points : 84 - 75 : B
// Points : 74 - 60 : C
// Points : 0 - 59 : D
// Points : null : F

// Ketika sudah pasti, maka tidak perlu di cek

var points = 10
var grade

// Points : 100 - 85 : A
if( points >= 85 && points <= 100 ){
    grade = "A"

// Points : 84 - 75 : B
} else if( points >= 75 && points <= 84 ){
    grade = "B"

// Points : 74 - 60 : C
} else if( points >= 60 && points <= 74 ){
    grade = "C"

// Points : 0 - 59 : D
} else if( points >= 0 && points <= 59 ){
    grade = "D"

// Points : null : F
} else {
    grade = "F"

}

console.log(`Nilai : ${points}\nGrade : ${grade}`)
