function CheckBox({ checked, onChange, label, id }) {


    return (
        <div className="form-check-control">
            <input
                type="checkbox"
                className="form-check-input mb-2"
                checked={checked}
                label={label}
                onChange={(e) => onChange(e.target.checked)}
                id={id}
            />
            <label htmlFor={id} className="form-check-label">{label}</label>

        </div>
    )

}

export default CheckBox