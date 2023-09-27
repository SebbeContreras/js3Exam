function CardDisplay({ vendor, username, cardnumber, month, year, ccv }) {
  return (
    <>
      <h6 className="vendor">{vendor}</h6>
      <h6 className="cardnumber">{cardnumber}</h6>
      <p className="cardholder">CARDHOLDER NAME</p>
      <h6 className="name">{username.toUpperCase()}</h6>
      <p className="valid">VALID THRU</p>
      <h6 className="expiryDate">
        {month} / {year}
      </h6>
    </>
  );
}
export default CardDisplay;
