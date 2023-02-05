
const NewJokes = () => {
    return (
        <section>
            <p>Add your hilarious joke:</p>
            <form method="post">
                <div>
                    <label>Name: <input type='text' name='name' /></label>
                </div>
                <div>
                    <label>Content: <input type='textarea' name='content' /></label>
                </div>
                <div>
                    <button type="submit">Add</button>
                </div>
            </form>
        </section>
    )
}

export default NewJokes