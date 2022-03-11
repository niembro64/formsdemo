import React, { useState } from "react";

const TraditionalForm = (props) => {
    const [flavor, setFlavor] = useState("");
    const [flavorError, setFlavorError] = useState("");
    const [sauce, setSauce] = useState("");
    const [topping, setTopping] = useState("");
    const [whipped, setWhipped] = useState("on");

    const onSubmitHandler = (event) => {
        event.preventDefault();

        // key and value happening together flavor: flavor example
        const submitMe = { flavor, sauce, topping, whipped };

        // console.log(Form);
    };

    const onFlavorHandler = (event) => {
        setFlavor(event.target.value);

        if (event.target.value < 5) {
            setFlavorError("a flavor needs at least 5 characters!");
        } else {
            setFlavorError("");
        }
    };

    return (
        <div className="w-50 p-3 border border-dark mx-auto my-3">
            <h1>Traditional Form</h1>

            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label className="form-label">Flavor</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                            setFlavor(event.target.value);
                            (event) => {
                                onFlavorHandler;
                            };
                        }}
                    />
                    <span className="alelrt-danger">{flavorError}</span>
                </div>
                <div className="form-group">
                    <label className="form-label">Sauce</label>
                    <input
                        type="text"
                        className="form-control"
                        onChange={(event) => {
                            setSauce(event.target.value);
                        }}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Topping</label>
                    <select
                        className="form-select"
                        onChange={(event) => {
                            setTopping(event.target.value);
                        }}
                    >
                        <option>pecans</option>
                        <option>shoe</option>
                        <option>cookie</option>
                    </select>
                </div>
                <div className="form-check">
                    <label className="form-check-label">Sauce</label>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        onChange={(event) => {
                            setWhipped(event.target.checked);
                        }}
                    />
                </div>
                <input type="submit" className="btn btn-primary btn-lg" />
            </form>
            <div>
                <p>Flavor: {flavor}</p>
                <p>Sauce: {sauce}</p>
                <p>topping: {topping}</p>
            </div>
        </div>
    );
};

export default TraditionalForm;
