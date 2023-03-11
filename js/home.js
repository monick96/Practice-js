
const all_events = data.events;

const contenedor_card = document.getElementById("col-card-home");
contenedor_card.innerHTML = do_cards(all_events);
//array de categorias
//let all_categories = obtein_property(all_events,"category");
//array de categorias(sin repetir)
let unic_categories = filter_unic_property(obtein_property(all_events,"category"));
//capturo select para pantallas >md
let container_categories_md = document.getElementById("category_md")
//capturo select para pantallas <md
let container_categories_sm = document.getElementById("category-select-sm")
//pinto categorias <md
painted_categories_sm = do_categories_select(unic_categories)
//pinto categorias >md
painted_categories_md = do_categories(unic_categories);
container_categories_md.innerHTML = painted_categories_md;
container_categories_sm.innerHTML = painted_categories_sm
////console.log(all_events);
//console.log(all_categories);
//console.log(unic_categories);

