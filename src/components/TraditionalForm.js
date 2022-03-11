import React, { useState } from "react";

const TraditionalForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [sauce, setSauce] = useState("");
    const [topping, setTopping] = useState("");
    const [whipped, setWhipped] = useState(false);

    return (
        <div className="w-50 p-3 border border-dark mx-auto my-3">
            <form>
                <div className="form-group">
                    <label className="form-label">Flavor</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                            setFlavor(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Sauce</label>
                    <input type="text" className="form-control" onChange={(event) => {
                            setSauce(event.target.value);
                        }}/>
                </div>
                <div className="form-group">
                    <label className="form-label">Topping</label>
                    <select className="form-select" onChange={(event) => {
                            setTopping(event.target.value);
                        }}>
                        <option>pecans</option>
                        <option>shoe</option>
                        <option>cookie</option>
                    </select>
                </div>
                <div className="form-check">
                    <label className="form-check-label">Sauce</label>
                    <input type="checkbox" className="form-check-input" onChange={(event) => {
                            setWhipped(event.target.checked);
                        }}/>
                </div>
                <input type="submit" className="btn btn-primary btn-lg" />
            </form>
            <div>
                <p>Flavor: {flavor}</p>
                <p>Sauce: {sauce}</p>
                <p>topping: {topping}</p>
                <p>Whipped: {whipped}</p>
            </div>
        </div>
    );
};

export default TraditionalForm;
