import React from "react";
import { FaTrashAlt } from "react-icons/fa";

export default function Todo({ todo, onUpdate, onDelete }) {
    const { text, status } = todo;
    const hadleChange = (e) => {
        const status = e.target.checked ? "completed" : "active";
        onUpdate({ ...todo, status: status });
    };
    const handleDelete = () => onDelete(todo);
    return (
        <li>
            <input
                type="checkbox"
                id="checkbox"
                checked={status === "completed"}
                onChange={hadleChange}
            />
            <label htmlFor="checkbox">{todo.text}</label>
            <button onClick={handleDelete}>
                <FaTrashAlt />
            </button>
        </li>
    );
}
