import React from "react";
import mealsImage from '../../assets/meals.jpg';

const Header =() => {
    return(
        <React.Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <button>Cart</button>
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="meals image"/>
            </div>
        </React.Fragment>
    )
}

export default Header;