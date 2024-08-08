import { LOGO_NAME } from "../Utils/constant";

const Header = ()=>( 
    <div className="header">
        <div className="logo-container">
            <img className="logo" src={LOGO_NAME} alt="company name" />
        </div>
        <div className="nav-items">
            <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>Contact Us</li>
                <li>Cart</li>
            </ul>
        </div>
</div>
)

export default Header;