import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import styles from "./Todo.module.css";

export default function Todo({ todo, onUpdate, onDelete }) {
    const { id, text, status } = todo;
    const hadleChange = (e) => {
        const status = e.target.checked ? "completed" : "active";
        onUpdate({ ...todo, status: status });
    };
    const handleDelete = () => onDelete(todo);
    return (
        <li className={styles.todo}>
            <input
                className={styles.checkbox}
                type="checkbox"
                id={id}
                checked={status === "completed"}
                onChange={hadleChange}
            />
            <label htmlFor={id} className={styles.text}>
                {text}
            </label>
            <span className={styles.icon}>
                <button onClick={handleDelete} className={styles.button}>
                    <FaTrashAlt />
                </button>
            </span>
        </li>
    );
}
