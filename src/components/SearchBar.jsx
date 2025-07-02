export default function SearchBar(){
    return (
        <form>
            <label className="d-flex m-auto w-50 mb-5">
                <input type="text" className="form-control me-3" />
                <button type="submit" className="btn btn-lg btn-outline-primary ms-3">Search</button>
            </label>
        </form>
    )
}