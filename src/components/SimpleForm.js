import React, { useState } from "react";

const SimpleForm = (props) => {
    const [form, setForm] = useState({
        flavor: "",
        sauce: "",
        topping: "",
        whipped: false,
    });

    const onChangeHandler = (event) => {
        // console.log(event.target.name);
        setForm({
            ...form,
            [event.target.name]:
                event.target.type === "checkbox"
                    ? event.target.checked
                    : event.target.value,
        });
    };

    const onSubmitHandler = (event) => {
        event.preventDefault();

        console.log(form);
    };

    return (
        <div className="w-50 p-3 border border-dark mx-auto my-3">
            <h1>Simple Form</h1>
            <form>
                <div className="form-group">
                    <label className="form-label">Flavor</label>
                    <input
                        name="flavor"
                        type="text"
                        className="form-control"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Sauce</label>
                    <input
                        name="sauce"
                        type="text"
                        className="form-control"
                        onChange={onChangeHandler}
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Topping</label>
                    <select
                        name="topping"
                        className="form-select"
                        onChange={onChangeHandler}
                    >
                        <option>pecans</option>
                        <option>shoe</option>
                        <option>cookie</option>
                    </select>
                </div>
                <div className="form-check">
                    <label className="form-check-label">Sauce</label>
                    <input
                        name="whipped"
                        type="checkbox"
                        className="form-check-input"
                        onChange={onChangeHandler}
                    />
                </div>
                <input type="submit" className="btn btn-primary btn-lg" />
            </form>
        </div>
    );
};

export default SimpleForm;
