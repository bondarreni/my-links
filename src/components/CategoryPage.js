import React, { useState } from "react";
import AddIcon from "@material-ui/icons/Add";

function CategoryPage() {

    const [newCategory, setNewCategory] = useState("");

    function inputChange(e) {
        let value = e.target.value;
        setNewCategory(value);
    }

    function addCategory() {
        
    }

    return (
        <div>
        <div className="newCategory">
            <input type="text" placeholder="Create new category" value={newCategory} onChange={inputChange}></input>
            <button type="submit" onClick={addCategory}>
                <AddIcon />
            </button>
        </div>

        <div className="categoriesDiv">
            <h2>Első menüpont</h2>
            <ul>
            <li>Első</li>
            <li>Második</li>
            </ul>

            <h2>Második menüpont</h2>
            <ul>
            <li>Első</li>
            <li>Második</li>
            </ul>
        </div>
        </div>
    );
}

export { CategoryPage };
