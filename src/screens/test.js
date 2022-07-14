export const Test = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(e.target.email.value)
    }
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input name="email" />
                <input name= "pwd"/>
                <input type="submit"/>
            </form>
        </div>
    )
}