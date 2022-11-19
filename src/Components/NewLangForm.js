import react from 'react';
import "../Style/NewLangForm.css";
function NewLangForm({ addLang }) {
    function randomNumber() {
        return Math.floor(Math.random() * 40) - 20;
    }

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
        addLang(newLang, languageType);
        e.target.reset();
    }
    function checkForResize(e) {
        if (e.target.value.length > 0) {
            e.target.style.height = 'auto';
            e.target.style.height = (e.target.scrollHeight) + 'px';
        }
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
                <div style={{top:`${randomNumber()}px`, left:`${(randomNumber()*2)}px`}}>
                    <input name='name' type="text" placeholder="Language Name" />
                    <input name='image' type="text" placeholder="Link to Lanuage Logo" />
                    <textarea onInput={checkForResize} name='description' type="text" placeholder="Description" />
                </div>
                <div style={{top:`${randomNumber()}px`, left:`${(randomNumber()*2)}px`}}>
                    <input name='initialVersion' type="text" placeholder="Initial Version" />
                    <input name='founded' type="text" placeholder="Initial Release" />
                </div>
                <div style={{top:`${randomNumber()}px`, left:`${(randomNumber()*2)}px`}}>
                    <input name='latestRelease' type="text" placeholder="Latest Version" />
                    <input name='latestReleaseDate' type="text" placeholder="Latest Release" />
                </div>
                <div style={{top:`${randomNumber()}px`, left:`${(randomNumber()*2)}px`}}>
                    <input name='creator' type="text" placeholder="Creator" />
                    <input name='company' type="text" placeholder="Founding Company" />
                </div>
            </div>
            <button name='submit' type="submit">Add New Language</button>
        </form>
        </div>
    );
}

export default NewLangForm;