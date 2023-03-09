let all_events = data.events;
current_day= data.currentDate;
let contenedor_card = document.getElementById("col-card-past");

past_events= filter_events_past(current_day,all_events);
//console.log(past_events);

//cual forma es mejor de asignar la funcion primero guerdandolo en una variable y depus hacer el inner o directamente asignar con el inner a la funcion
//let past_cards = do_cards(past_events);
//contenedor_card.innerHTML = past_cards;
//o
contenedor_card.innerHTML = do_cards(past_events);

