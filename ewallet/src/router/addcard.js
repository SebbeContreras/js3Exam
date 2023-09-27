import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cardAdded } from '../redux/cardsSlice'
import { useRouteLoaderData } from "react-router-dom";

export default function AddCard() {
    const [cardnumber, setCardnum] = useState()
    const onCardChange = e => setCardnum(e.target.value)
    const [year, setYear] = useState(23)
    const onYearChange = e => setYear(e.target.value)
    const [vendor, setVendor] = useState()
    const onVendorChange = e => setVendor(e.target.value)
    const [month, setMonth] = useState(0)
    const onMonthChange = e => setMonth(e.target.value)
    const [ccv, setCcv] = useState()
    const onCcvChange = e => setCcv(e.target.value)
    
    const user = useRouteLoaderData("root")
    const cardholder = user.results[0].name.first + " " + user.results[0].name.last;
    const cards = useSelector(state => state.cards);

    const dispatch = useDispatch()


    const onSaveCard = (e) => {
        e.preventDefault();
        const vendor = e.target[0].value;

        if ( cards.length === 4) {
            alert("You can only have 4 cards registrered")
        } else {    
            dispatch(cardAdded({
                id: cards.length + 1,
                vendor,
                cardnumber,
                month,
                year,
                ccv,
                cardholder
            }))
        }
        }
    return (
        <main>
            <h2>Add a New card</h2>
    <aside className={`add_card`}>
      <h6 className="vendor">{vendor}</h6>
      { cardnumber ? <h6 className="cardnumber">{cardnumber.match(/.{1,4}/g).join(' ')}</h6> : null}
      <p className="cardholder">CARDHOLDER NAME</p>
      <h6 className="name">{cardholder.toUpperCase()}</h6>
      <p className="valid">VALID THRU</p>
      <h6 className="expiryDate">
        {month.toLocaleString('se', {minimumIntegerDigits:2})} / {year}
      </h6>
    </aside>
            <form onSubmit={onSaveCard}>
                <label htmlFor="vendor-select">Vendor: </label>
                <select id="vendor-select" name="vendor" onChange={onVendorChange}>
                    <option value={"Select Vendor"} selected disabled>select vendor</option>
                    <option value={"MASTERCARD"}>MASTERCARD</option>
                    <option value={"American Express"}>American Express</option>
                    <option value={"VISA"}>VISA</option>
                </select>
                <input type={"text"} required value={cardnumber} minLength={"16"} maxLength={"16"} onChange={onCardChange} placeholder="Cardnumber (must contain only numbers)" pattern="[0-9]+" />
                <input type={"number"} required min ="23" max="99" value={year} onChange={onYearChange} placeholder="year" />
                <input type={"number"} required max={"12"} min="1" value={month} onChange={onMonthChange} placeholder="month" />
                <input type={"number"} required max={"999"} min="100" value={ccv} onChange={onCcvChange} placeholder="CCV" />
                <input type={"text"} value={cardholder} />
                <button type="submit">Spara Kort</button>
            </form>
        </main>
    )
};