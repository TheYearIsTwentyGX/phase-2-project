import react from 'react';

function NewLangForm({ addLang }) {
    function handleSubmit(e) {
        e.preventDefault();
        const { name, 
            image, 
            initialVersion, 
            founded, 
            latestRelease, 
            latestReleaseDate, 
            creator, 
            company, 
            description } = e.target.elements;
        addLang();
        e.target.reset();
    }

    return (
        <form>
            <input type="text" placeholder="Language Name" />
            <input type="text" placeholder="Link to Lanuage Logo" />
            <input type="text" placeholder="Initial Version" />
            <input type="text" placeholder="Initial Release" />
            <input type="text" placeholder="Latest Version" />
            <input type="text" placeholder="Latest Release" />
            <input type="text" placeholder="Creator" />
            <input type="text" placeholder="Founding Company" />
            <input type="text" placeholder="Description" />
            <button type="submit">Add</button>
        </form>
    );
}

export default NewLangForm;