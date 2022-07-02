const productos = [
    {nombre: 'Martillo', descripcion:'Ingco'},
    {nombre: 'Alicate', descripcion:'10"'},
    {nombre: 'Alicate', descripcion:'12"'},
    {nombre: 'Taladro', descripcion:'Inalambrico'},
    {nombre: 'Taladro', descripcion:'Percutor'},
]

const buscador= document.querySelector('#buscador');
const boton= document.querySelector('#boton');
const resultado = document.querySelector('#resultado');

const filtrar = ()=>{
    //console.log(buscador.value)
    resultado.innerHTML ='';
    const busqueda = buscador.value.toLowerCase();
    for(let producto of productos){
        let nombre = producto.nombre.toLowerCase();
        if(nombre.indexOf(busqueda) !==-1){
            resultado.innerHTML += `
                <li>${producto.nombre} - Descripcion : ${producto.descripcion}</li>
            `
        }
    }
 
    if(resultado.innerHTML === ''){
        resultado.innerHTML += `
                <li>Producto no encontrado...</li>
            `
    }
}

boton.addEventListener('click', filtrar)
buscador.addEventListener('keyup', filtrar)
filtrar();
