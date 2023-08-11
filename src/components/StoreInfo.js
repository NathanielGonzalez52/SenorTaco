import "./StoreInfo.css";

function StoreInfo() {
    return (
    <div class="store-info">
        <div class="square">
            <p className="address">9213 Valley View St</p>
            <p className="address">Cyress, CA, 90630</p>
            <p className="address">(714) 828-8650</p>
        </div>

        <div class="hours">
            <p className="hours">Mon - Fri: 8AM - 8PM</p>
            <p className="hours">Sat: 7AM - 8PM</p>
            <p className="hours">Sun: 7AM - 5PM</p>
        </div>
    
    </div>

    )
}

export default StoreInfo;
