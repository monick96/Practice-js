
const all_events = data.events;
const contenedor_card = document.getElementById("col-card-home");
do_and_print(all_events, contenedor_card);
//array de categorias
//let all_categories = obtein_property(all_events,"category");
//array de categorias(sin repetir)
let unic_categories = filter_unic_property(obtein_property(all_events, "category"));
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
const FORM_CHECK = document.forms[0];
const FORM_SELECT = document.forms[1];

const FORM_SEARCH = document.forms[2];

let INPUT = document.querySelector('#searcher');
const EVENTS = document.querySelectorAll('.card')// array con todos los names de las cards
console.log(EVENTS[0]);
let message = document.querySelector('#message');
console.log(message);
message.style.display = 'none';

FORM_SEARCH.addEventListener('submit', (e) => {

    e.preventDefault();
    console.log(e);
    message.textContent = '';
    let input_value = INPUT.value;
    let input_normalizado = input_value.toLowerCase();
    console.log(input_normalizado);
    
    let foundMatch = false;
    EVENTS.forEach((event) => {

        const TITLES = event.querySelector('h5').textContent.toLowerCase();
        if (TITLES.includes(input_normalizado)) {
            event.style.display = 'block';
            foundMatch = true;

        } else {
            event.style.display = 'none';
        }
    })
    if (!foundMatch) {
        message.textContent = `It was not found ${input_value} between events`;
        message.style.display = 'flex';
    } else {
        message.style.display = 'none';
    }

    INPUT.value = '';
})



//console.log(NAME_EVENTS);
//filtrar cards x input


//console.log(FORM_CHECK);

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
*/

FORM_CHECK.addEventListener('change',(e)=>{
    e.preventDefault();
    console.log(e);
   
    // Obtener todas las casillas de verificación en el formulario
    // con Array.from(FORM_CHECK.querySelectorAll("input[type='checkbox']")) se puede convertir el node list en array
    let checkboxes = FORM_CHECK.querySelectorAll("input[type='checkbox']");
    console.log(checkboxes);
    // Crear un array para almacenar los valores seleccionados
    let selectedValues = [];
    console.log(selectedValues);
    // Crear un array para almacenar los checkboxes seleccionado
    let selectedCheks = []
    // Iterar sobre todas las casillas de verificación y agregar los valores seleccionados a la matriz
    checkboxes.forEach((checkbox) =>{
        if (checkbox.checked) {
        selectedValues.push(checkbox.value.toLowerCase());
        selectedCheks.push(checkbox.checked)
        }
    });
    EVENTS.forEach((eve) => {
        let data_id= eve.getAttribute('data-id');
        console.log(data_id);
    })
    
    //let data_cards = Array.from(EVENTS.getAttribute('data-id'));
    
    //evento como array
    array_events = Array.from(EVENTS);
    
    // Imprimir los valores seleccionados en la consola
    console.log("Valores seleccionados: " + selectedValues);
    cards_filtradas = array_events.filter((evento)=>selectedValues.includes(evento.dataset.id.toLowerCase()));
    console.log(cards_filtradas);
    let foundMatch2 = false;
    array_events.forEach((el)=>{
        
        if (cards_filtradas.includes(el)){
            el.style.display = 'block';
            foundMatch2 = true;
        }else {
            el.style.display = 'none';
        }

    })
    

})




