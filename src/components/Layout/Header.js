import React from "react";
import mealsImage from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
    return(
        <React.Fragment>
            <header className="header">
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart} />
            </header>
            <div className="main-image">
                <img src={mealsImage} alt="meals image"/>
            </div>
        </React.Fragment>
    )
}

export default Header;