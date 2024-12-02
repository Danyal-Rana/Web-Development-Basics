function FilterButton() {
    const text = ["All", "Active", "Completed"];
    return (
        <div>
            {text.map((buttonText, idx) => (
                <button type="button" className="btn toggle-btn" aria-pressed="true">
                    <span className="visually-hidden">Show </span>
                    <span>{buttonText}</span>
                    <span className="visually-hidden"> tasks</span>
                </button>
            ))}
        </div>
    );
}

export default FilterButton;