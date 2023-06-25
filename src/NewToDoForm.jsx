import { useState } from "react";

// eslint-disable-next-line react/prop-types
export function NewToDoForm({onSubmit}) {
    const [newItemTitle, setNewItemTitle] = useState("");

    function handleSubmit(e) {
        e.preventDefault();

        if (!newItemTitle) {
            return;
        }

        onSubmit(newItemTitle);

        setNewItemTitle("");
    }

    return (
        <form onSubmit={handleSubmit} className="new-item-form">
            <div className="form-row">
                <label htmlFor="item">New Item Title</label>
                <input
                    value={newItemTitle}
                    onChange={e => setNewItemTitle(e.target.value)}
                    type="text"
                    id="item"
                />
            </div>
            <button className="btn">Add</button>
        </form>
    );
}