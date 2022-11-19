import react from 'react';

function NewLangForm(props) {
    return (
        <form>
            <input type="text" placeholder="Language" />
            <input type="text" placeholder="Level" />
            <button type="submit">Add</button>
        </form>
    );
}

export default NewLangForm;