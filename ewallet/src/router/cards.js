import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouteLoaderData } from "react-router-dom";
import CardDisplay from "../components/card";
import { removeCard } from "../redux/cardsSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from "@fortawesome/free-solid-svg-icons"


export const CardsPage = () => {
  const dispatch = useDispatch()
  const user = useRouteLoaderData("root")
  const cards = useSelector(state => state.cards);
  const cardholder = user.results[0].name.first + " " + user.results[0].name.last;
  const [activeState, setActive] = useState(
    {
    activeCard: cards[0],
    cardsObject: cards,
}
)
function toggleActive(index) {
  setActive({...activeState, activeCard:  activeState.cardsObject[index]})
}

function toggleActiveStyle(index) {

    const vendor = activeState.cardsObject[index].vendor
    if (activeState.cardsObject[index] === activeState.activeCard) {
      return `${vendor} card active card${index}`
    } else {
      return `${vendor} card inactive card${index}`
    }
  }

  return (
    <main>
      <h2>{user.results[0].name.first}'s Cards</h2>
        <h3 class="active__span">Active card:</h3>
      <section className="card_section">
      {cards.map((card, index) => (
        <aside key={card.id} className={toggleActiveStyle(index)} onClick={() => {toggleActive(index)}} >
        <CardDisplay 
        cardnumber={card.cardnumber.match(/.{1,4}/g).join(' ')}
        username={cardholder}
        month={card.month.toLocaleString('se', {minimumIntegerDigits:2})}
        year={card.year}
        ccv={card.ccv}
        vendor={card.vendor}
        />
        {activeState.activeCard === card ? null: <FontAwesomeIcon onClick={() => dispatch(removeCard({id: card.id}))} icon={faTrash} style={{color: "#c12f25",}}  className="delete_btn"/> }
        </aside>
      ))}
      </section>
    </main>
  );
};