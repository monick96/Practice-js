
const all_events = data.events;
const contenedor_card = document.getElementById("col-card-home");
do_and_print(all_events,contenedor_card);
//array de categorias
//let all_categories = obtein_property(all_events,"category");
//array de categorias(sin repetir)
let unic_categories = filter_unic_property(obtein_property(all_events,"category"));
//capturo select para pantallas >md
let container_categories_md = document.getElementById("category_md")
//capturo select para pantallas <md
let container_categories_sm = document.getElementById("category-select-sm")
//pinto categorias <md
let painted_categories_sm = do_categories_select(unic_categories)
//pinto categorias >md
let painted_categories_md = do_categories(unic_categories);
container_categories_md.innerHTML = painted_categories_md;
container_categories_sm.innerHTML = painted_categories_sm;
////console.log(all_events);
//console.log(all_categories);
//console.log(unic_categories);
//console.log(document.getElementById('container_category'));
const FORM_CHECK= document.forms[0];
const FORM_SELECT= document.forms[1];

const FORM_SEARCH = document.forms[2];
/*
let INPUT = document.querySelector('#searcher');
const EVENTS = document.querySelectorAll('.card')// array con todos los names de las cards
FORM_SEARCH.addEventListener('submit',(e)=>{
    let container_row_category = document.querySelector(".category")
    
    e.preventDefault();
    console.log(e);
    let input_value = INPUT.value;
    let input_normalizado= input_value.toLowerCase();
    console.log(input_normalizado);
    let message = document.getElementById('message');
    let foundMatch = false;
    
    EVENTS.forEach((event)=>{
        
        const TITLES = event.querySelector('h5').textContent.toLowerCase();
        if (TITLES.includes(input_normalizado)){
            event.style.display = 'block';
            foundMatch = true;
        }else {
            event.style.display = 'none';
            //document.write(`pIt was not found ${input_normalizado} between events`)
        }
    })
    
    
    if (!foundMatch) { // Si no se encontró una coincidencia, mostrar el mensaje de error
        if (!message) { // Si el mensaje de error existe, eliminarlo
            message = `
            <div class="d-flex flex-column justify-content-center align-items-center"><p id="mesagge">It was not found ${input_normalizado} between events</p></div>
            `
            container_row_category.insertAdjacentHTML('afterend',message);
        }else{
             // Si el mensaje de error ya existe, simplemente mostrarlo
            message.style.display = 'flex';
        }
        
    } else {
        message.style.display = 'none';
        }

})
*/


//console.log(NAME_EVENTS);
//filtrar cards x input





console.log(FORM_CHECK);
//console.log(NAME_EVENTS);
//obtener button y card especifica
// let buttons = document.querySelectorAll('.button');
// console.log(buttons);
// buttons.forEach(button =>{
//     button.addEventListener('click',(e)=>{
//         e.preventDefault();
//         let card_id = button.getAttribute('data-id');
//         console.log(e);
//         console.log(card_id)
//         console.log(button);
//          Redirigir a la página de detalles única usando el ID de la tarjeta
//         window.location.href = `/details?id=${card_id}`;
        
//     })
// });

/*
console.log(document.forms);
console.log(FORM_SEARCH);
console.log(INPUT);

console.log(FORM_SELECT);
console.log(FORM_SELECT.value)

FORM_SELECT.addEventListener("change",(e)=>{
    e.preventDefault();
    console.log(e);
    let select_element = document.getElementById("category-select-sm");
    let selected_value = select_element.value
    //console.log(select_element);
    console.log(selected_value)//captura valor select

})

FORM_CHECK.addEventListener('change',(e)=>{
    e.preventDefault();
    console.log(e);
    // Obtener todas las casillas de verificación en el formulario
    let checkboxes = FORM_CHECK.querySelectorAll("input[type='checkbox']");
    // Crear un array para almacenar los valores seleccionados
    let selectedValues = [];
    // Iterar sobre todas las casillas de verificación y agregar los valores seleccionados a la matriz
    checkboxes.forEach(function(checkbox) {
        if (checkbox.checked) {
        selectedValues.push(checkbox.name);
        }
    });
    // Imprimir los valores seleccionados en la consola
    console.log("Valores seleccionados: " + selectedValues);
})
*/



