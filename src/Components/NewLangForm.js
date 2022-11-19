import react from 'react';

function NewLangForm({ addLang }) {
    function handleSubmit(e) {
        e.preventDefault();
        const { lang, level } = e.target.elements;
        addLang();
        e.target.reset();
    }

    return (
        <form>
            <input type="text" placeholder="Language" />
            <input type="text" placeholder="Level" />
            <button type="submit">Add</button>
        </form>
    );
}

export default NewLangForm;