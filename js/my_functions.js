//function that generate cards
function do_cards(array){
    let structure_card = "";
    for(let i=0;i<array.length;i++){
        structure_card += `
        <div class="card ">
            <img src="${all_events[i].image}" class="card-img-top" alt="${all_events[i].name}">
            <div class="card-body">
                <h5 class="card-title">${all_events[i].name}</h5>
                <p class="card-text">${all_events[i].description}</p>
                <p><span>Price: $${all_events[i].price}</span></p>
                <p class="button" role="button"><a href="#">More...</a></p>
            </div>
        </div>
        `;
    }
    return structure_card;
}

// past events filter
function filter_events_past(actual_date,array){
    
    events = [];
    for (i =0; i<array.length; i++){
        let date_event = new Date(array[i].date)
        if(date_event < actual_date){
            events.push(array[i])
        }
    }
    return events;
}

//future events filter
function filter_events_future(actual_date,array){
    
    events = [];
    for (i =0; i<array.length; i++){
        let date_event = new Date(array[i].date)
        if(date_event > actual_date){
            events.push(array[i])
        }
    }
    return events;
}