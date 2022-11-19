import react from 'react';

function NewLangForm({ addLang }) {
    function handleSubmit(e) {
        e.preventDefault();
        const output = e.target.elements;
        const newLang = {};
        let languageType = '';
        for (let ele of output) {
            if (ele.name == 'languageType') {
                languageType = ele.value;
            }
            else if (ele.name != 'submit') {
                newLang[ele.name] = ele.value;
            }
        }
        console.log(languageType);
        addLang(newLang, languageType);
        //e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <select name="languageType">
                <option value="OOP">Object-Oriented</option>
                <option value="Functional">Functional</option>
            </select>
            <input name='name' type="text" placeholder="Language Name" />
            <input name='image' type="text" placeholder="Link to Lanuage Logo" />
            <input name='initialVersion' type="text" placeholder="Initial Version" />
            <input name='founded' type="text" placeholder="Initial Release" />
            <input name='latestRelease' type="text" placeholder="Latest Version" />
            <input name='latestReleaseDate' type="text" placeholder="Latest Release" />
            <input name='creator' type="text" placeholder="Creator" />
            <input name='company' type="text" placeholder="Founding Company" />
            <input name='description' type="text" placeholder="Description" />
            <button name='submit' type="submit">Add</button>
        </form>
    );
}

export default NewLangForm;