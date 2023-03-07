const all_events = data.events;
//console.log(all_events)


//function that generate cards
// function do_cards(array){
//     let structure_card = "";
//     for(let i=0;i<array.length;i++){
//         structure_card += `
//         <div class="card ">
//             <img src="${all_events[i].image}" class="card-img-top" alt="${all_events[i].name}">
//             <div class="card-body">
//                 <h5 class="card-title">${all_events[i].name}</h5>
//                 <p class="card-text">${all_events[i].description}</p>
//                 <p><span>Price: $${all_events[i].price}</span></p>
//                 <p class="button" role="button"><a href="#">More...</a></p>
//             </div>
//         </div>
//         `;
//     }
//     return structure_card;
// }

const contenedor_card = document.getElementById("col-card-home");
console.log(contenedor_card)

let all_cards = do_cards(all_events);
contenedor_card.innerHTML = all_cards;
//console.log(cards);

/*
for (let i = 0; i < all_events.length; i++) {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
        <img src="${all_events[i].image}" class="card-img-top" alt="${all_events[i].name}">
        <div class="card-body">
            <h5 class="card-title">${all_events[i].name}</h5>
            <p class="card-text">${all_events[i].description}</p>
            <p><span>Price: $${all_events[i].price}</span></p>
            <p class="button" role="button"><a href="#">More...</a></p>
        </div>
    `;
    contenedor_card.appendChild(card);
}
*/
//hacer una funcion para generar las cards



// contenedor_elem.appendChild(cards_element);
//console.log(cards_element)

// let cards_element =
//     `
// <!-- CARD 1 -->
// <div class="card ">
//     <img src="./assets/img/Cinema.jpg" class="card-img-top" alt="cine-img">
//     <div class="card-body">
//         <h5 class="card-title">Card title</h5>
//         <p class="card-text">Some quick</p>
//         <p><span>Price:</span></p>
//         <p class="button" role="button">More...</p>
//     </div>
// </div>
// `;