import React, { useState } from 'react';
import './formularioPagos.css';

const FormularioPagos = () => {
    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const [cvc, setCvc] = useState('');
    const [isFlipped, setIsFlipped] = useState(false);

    const formatCardNumber = (value) => {
        return value.replace(/\s+/g, '').replace(/(\d{4})/g, '$1 ').trim();
    };

    const handleCardNumberChange = (e) => {
        const formattedValue = formatCardNumber(e.target.value);
        setCardNumber(formattedValue);
    };

    const handleCardNameChange = (e) => {setCardName(e.target.value);};

    const handleExpiryDateChange = (e) => {setExpiryDate(e.target.value);};

    const handleCvcChange = (e) => {setCvc(e.target.value);};

    const handleCvcFocus = () => {setIsFlipped(true);};

    const handleCvcBlur = () => {
        setIsFlipped(false);
    };

    return (
    <div className="container mt-5">
        <div className="row">
        <div className="col-md-6">
            <form>
            <div className="form-group">
                <label htmlFor="cardNumber">Número de tarjeta</label>
                <input
                    type="text"
                    id="cardNumber"
                    className="form-control"
                    placeholder="#### #### #### ####"
                    maxLength="19"
                    value={cardNumber}
                    onChange={handleCardNumberChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="cardName">Nombre del titular</label>
                <input
                    type="text"
                    id="cardName"
                    className="form-control"
                    placeholder="Nombre del titular"
                    value={cardName}
                    onChange={handleCardNameChange}/>
            </div>

            <div className="form-group">
                <label htmlFor="expiryDate">Fecha de Expiración (MM/YY)</label>
                <input
                    type="text"
                    id="expiryDate"
                    className="form-control"
                    placeholder="MM/YY"
                    maxLength="5"
                    value={expiryDate}
                    onChange={handleExpiryDateChange}
                />
            </div>

            <div className="form-group">
                <label htmlFor="cvc">CVC</label>
                <input
                    type="text"
                    id="cvc"
                    className="form-control"
                    placeholder="CVC"
                    maxLength="3"
                    value={cvc}
                    onChange={handleCvcChange}
                    onFocus={handleCvcFocus}
                    onBlur={handleCvcBlur}
                />
            </div>
            </form>
        </div>

        <div className="col-md-6 d-flex justify-content-center align-items-center">
            <CreditCard
                cardNumber={cardNumber}
                cardName={cardName}
                expiryDate={expiryDate}
                cvc={cvc}
                isFlipped={isFlipped}
                visaLogo={'/img/visa.png'}
            />
        </div>
        </div>
    </div>
    );
};

    const CreditCard = ({ cardNumber, cardName, expiryDate, cvc, isFlipped, visaLogo }) => {
    return (
        <div className="card-container">
            <div className={`card ${isFlipped ? 'flip' : ''}`}>
            <div className="front">
                <div className="card-logo">
                <img src={visaLogo} alt="Visa" width="60" />
                </div>
                <div className="card-chip"></div>
                <div className="card-number">
                {cardNumber || '#### #### #### ####'}
                </div>
                <div className="card-name">
                {cardName || 'Nombre del Titular'}
                </div>
                <div className="card-expiry">
                {expiryDate || 'MM/YY'}
            </div>
        </div>

        <div className="back">
            <div className="magnetic-strip"></div>
            <div className="cvc">
                {cvc || 'CVC'}
            </div>
        </div>
        </div>
    </div>
    );
};  

export default FormularioPagos;