// AND lógico (&&)
exp1 && exp2

var a1 = true && true;    // t && t . retorna true
var a2 = true && false;    // t && f . retorna false
var a3 = false && true;    // f && t . retorna false
var a4 = false && (3 == 4);    // t && f . retorna false
var a5 = "Gato" && "Cão";    // t && t . retorna Cão
var a6 = false && "Gato";    //f && t . retorna false
var a7 = "Gato" && false;    //t && f . retorna false

// Ou Lógico (||)
exp1 || exp2

var o1 = true || true;    // t || t . retorna true
var o2 = true || false;    // f || t . retorna true
var o3 = false || true;    // t || f . retorna true
var o4 = false || (3 == 4);    // t || t . retorna false
var o5 = "Gato" || "Cão";    // t || t . retorna Gato
var o6 = false || "Gato";    //f || t . retorna Gato
var o7 = "Gato" || false;    //t || f . retorna Gato

// NOT Lógico (!)

var n1 = !true; // !t retorna false
var n2 = !false; // !f retorna true
var n3 = !"Gato" // !t retorna false

// True
" "
1
['teste']

// False
""
0
[]

!! // conversão para booelan

