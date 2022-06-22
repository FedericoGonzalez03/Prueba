window.onload = inicio;
function inicio() {
    document.getElementById('btnVerificar').onclick = verificar;
}

function verificar() {
    let balanceado;
    let str = document.getElementById('inpText').value.replaceAll(' ', '');

    if (str.includes(')') && !str.includes('(')   || 
        str.includes(']') && !str.includes('[')   || 
        str.includes('}') && !str.includes('{'))     {

        balanceado = false;

    } else {

        for (let i = 0; i < str.length; i++) {
            if (str.charAt(i) == '(') {

                if (str.substring(i + 1).includes(')')) {
                    
                    balanceado = true;
                    let pos = str.indexOf(')')
                    str = str.slice(0, pos) + str.slice(pos + 1, str.length)
                }
            } else if (str.charAt(i) == '[') {

                if (str.substring(i + 1).includes(']')) {

                    balanceado = true;
                    let pos = str.indexOf(']')
                    str = str.slice(0, pos) + str.slice(pos + 1, str.length)
                }
            } else if (str.charAt(i) == '{') {

                if (str.substring(i + 1).includes('}')) {

                    balanceado = true;
                    let pos = str.indexOf('}')
                    str = str.slice(0, pos) + str.slice(pos + 1, str.length)
                }
            }
        }
    }
    if (balanceado) {
        alert('Los paréntesis están balanceados')
    } else {
        alert('Los paréntesis NO están balanceados')
    }
}