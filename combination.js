function combine(lista, listb) {

    let flag = 0
    let ret_lis = []
    for (let i = 0; i < lista.length; i++) {
        for(let j=0; j < listb.length; j++){
            // check for overlap
            for (let k=0; k<listb[j].length; k++) {
                if (lista[i].includes(listb[j][k])) {
                    flag = 1
                    break
                }
            }
            // if no overlap, add, set flag to 0
            if (flag == 0) {
                ret_lis.push(lista[i].concat(listb[j]))
            }
            flag = 0
        }
    }
    return ret_lis
}

let lista = [['a', 'b', 'c'],
['g2', 'h4', 'q'],
['l1', 'l5', 'j2']]

let listb = [
    ['p', 'q', 'r', 's'],
    ['f', 'q', 'u', 'a'],
]

console.log(combine(lista, listb))