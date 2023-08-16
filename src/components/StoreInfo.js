import "./StoreInfo.css";

function StoreInfo() {

    return (

    <div className="store-info">
    
        <div className="location info">
        <h3>Address</h3>
            <p className="address">9213 Valley View St</p>
            <p className="address">Cyress, CA, 90630</p>
            <p className="address">(714) 828-8650</p>
        </div>

        <div className="hours info">
        <h3>Hours</h3>
            <p className="hours">Mon - Fri: 8AM - 8PM</p>
            <p className="hours">Sat: 7AM - 8PM</p>
            <p className="hours">Sun: 7AM - 5PM</p>
        </div>

        <div className="socials info">
        <h3>Socials</h3>
        <div className="social-pic">
        <i class="fa-brands fa-facebook fa-xl"></i>
        <i class="fa-brands fa-instagram fa-xl"></i>
        <i class="fa-brands fa-x-twitter fa-xl"></i>
        </div>
        
        </div>
    
    </div>

    )
}

export default StoreInfo;
