// function filter_events_past(actual_date,array){
    
//     events = [];
//     for (i =0; i<array.length; i++){
//         let date_event = new Date(array[i].date)
//         if(date_event < actual_date){
//             events.push(array[i])
//         }
//     }
//     return events;
// }

let all_events = data.events;
current_day= new Date(data.currentDate);

past_events= filter_events_past(current_day,all_events);
console.log(past_events);
let contenedor_card = document.getElementById("col-card-past");
let past_cards = do_cards(past_events);
contenedor_card.innerHTML = past_cards;