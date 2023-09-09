import React from "react";
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header =() => {
    return(
        <React.Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="meals image"/>
            </div>
        </React.Fragment>
    )
}

export default Header;