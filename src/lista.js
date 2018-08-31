const copiarListas=(listas)=>{
    const resultado=[];
    for (let i=0; i<listas.length; i++){
        resultado[i]={...listas[i]}
    }
    return resultado;
}


const persona={nombre:'', direccion:{avenida:'',calle:'',barrio:''}};
const Ana={...persona, nombre:'Ana', direccion:{avenida:'busch'}};
const Juan={...persona,nombre:'juan', direccion:{avenida:'esa'}};

const listas=[Ana,Juan]

const nuevaLista=copiarListas(listas)
nuevaLista[0].nombre='betty'
nuevaLista[0].direccion
console.log(listas)
console.log(nuevaLista)