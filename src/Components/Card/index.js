import React from 'react'
import "./Card.css";
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';

const Card = ({plan , cardnumber}) => {
    return (
        <div className = {cardnumber == 2 ? "Card Card-bestseller"  : "Card" }> 
            {cardnumber == 2 ? 
            <div className = "bestseller__banner">
                <p>Best Seller</p>
            </div>
            : null}
            <div className = {cardnumber == 2 ? "card__header car__bestsellerheader"  : "card__header" }>
                <h3>{plan.name}</h3>
                <p>{plan.description}</p>
            </div>

            <div className = "card__price">
                <div className = "card__priceDiscount">
                    <p>Rs. {plan.originalPrice}</p>
                    <h3 className = {cardnumber == 2 ? "bestseller__Discount" : null}>Save {plan.percentDiscount}%</h3>    
                </div>
                <h1>
                    Rs. {plan.price} <span>/mo</span>
                </h1>
                <button className = {cardnumber == 2 ? "bestseller__button" : null}>Buy now</button>
            </div>
            <div className = "card__features">
                {
                    plan.features.map((item , index) => {
                        return <li>{item}</li>
                    })
                }
            </div>
            <div className = "card__seperator"></div>
            <h4 className = {cardnumber == 2 ? "card__accordian_button bestseller__card__accordian_button" : "card__accordian_button"} >See all services <ArrowDropDownOutlinedIcon/></h4>
        </div>
    )
}

export default Card
