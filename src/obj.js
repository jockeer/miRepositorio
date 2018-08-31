const persona={
    nombre: '',
    edad: 0,
    direccion:{
        barrio: '',
        numero: 0,
        calle:{
            nombre: ''
        },
        avenida:{
            nombre: ''
        }
    }
}
const Daniel = {
    ...persona,
    apellido: 'Gorianz',
    nombre: 'Daniel',
    edad: 22,
    direccion:{...persona.direccion,
    calle:{...persona.direccion.calle},
    avenida:{...persona.direccion.avenida}
    }
    
}
Ruddy.direccion.barrio = 'GUAPILO'
Ruddy.direccion.numero = 20
Ruddy.direccion.calle.nombre = 'JUNIN' 
Ruddy.direccion.avenida.nombre = 'Bush'

console.log('<=== persona: ',persona)
console.log('<=== >')
console.log('<=== >')
console.log('<=== persona: ',Ruddy)
