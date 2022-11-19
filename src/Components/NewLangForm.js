import react from 'react';
import "../Style/NewLangForm.css";
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
        //addLang(newLang, languageType);
        //e.target.reset();
    }

    return (
        <div className="NewLangForm">
        <form onSubmit={handleSubmit}>
            <div>
                <select name="languageType">
                    <option value="OOP">Object-Oriented</option>
                    <option value="Functional">Functional</option>
                </select>
            </div>
            <div className='textFields'>
                <div>
                    <input name='name' type="text" placeholder="Language Name" />
                    <input name='image' type="text" placeholder="Link to Lanuage Logo" />
                    <textarea name='description' type="text" placeholder="Description" />
                </div>
                <div>
                    <input name='initialVersion' type="text" placeholder="Initial Version" />
                    <input name='founded' type="text" placeholder="Initial Release" />
                </div>
                <div>
                    <input name='latestRelease' type="text" placeholder="Latest Version" />
                    <input name='latestReleaseDate' type="text" placeholder="Latest Release" />
                </div>
                <div>
                    <input name='creator' type="text" placeholder="Creator" />
                    <input name='company' type="text" placeholder="Founding Company" />
                </div>
            </div>
            <button name='submit' type="submit">Add</button>
        </form>
        </div>
    );
}

export default NewLangForm;