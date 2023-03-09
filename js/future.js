
let all_events = data.events;

// Creates a new date object with the value of the currentDate property of the
// data object, and assigns it to the variable current_day.
current_day = data.currentDate;

// Calls the filter_events_future function passing in current_day and all_events as arguments,
// and assigns the returned value to the variable future_events.
future_events = filter_future_events(current_day, all_events);

// Logs the value of future_events to the console.
console.log(future_events)

// Assigns the DOM element with the ID "col-card-future" to the contenedor_card constant.
const contenedor_card = document.getElementById("col-card-future");

// Logs the value of contenedor_card to the console.
console.log(contenedor_card)

// Calls the do_cards function, passing in the array of future events as an argument, 
// and assigns the returned value to the variable future_cards.
let future_cards = do_cards(future_events);

// Sets the HTML content of the contenedor_card element to the value of the future_cards variable.
contenedor_card.innerHTML = future_cards;


///made with functional paradigm