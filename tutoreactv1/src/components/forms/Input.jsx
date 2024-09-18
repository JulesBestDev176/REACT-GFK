
function Input({ placeholder, onChange, search }) {
    return (
        <div>
            <input
                type="text"
                className="form-control mb-2"
                placeholder={placeholder}
                value={search}
                onChange={(e) => onChange(e.target.value)}
            />
        </div>
    )
}

export default Input