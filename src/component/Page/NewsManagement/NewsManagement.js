import React, { useState } from 'react';
import './NewsManagement.css'; // Import the CSS file for additional styles

export const NewsManagement = () => {
    const [selectedButton, setSelectedButton] = useState('Add'); // Initial selection is 'Add'
    const [InputBox0, setInputBox0] = useState('');

    const [InputBox1, setInputBox1] = useState('');
    const [InputBox2, setInputBox2] = useState('');
    const [InputBox3, setInputBox3] = useState('');
    const [InputBox4, setInputBox4] = useState('');
    const [InputBox5, setInputBox5] = useState('');


    const handleButtonClick = (buttonName) => {
        setSelectedButton(buttonName);
        setInputBox1('');
        setInputBox2('');
        setInputBox3('');
        setInputBox4('');
        setInputBox5('');
    };


    // Function to handle input change
    const handleInputChange0 = (event) => {
        setInputBox0(event.target.value);
    };


    const handleInputChange1 = (event) => {
        setInputBox1(event.target.value);
    };
    const handleInputChange2 = (event) => {
        setInputBox2(event.target.value);
    };
    const handleInputChange3 = (event) => {
        setInputBox3(event.target.value);
    };
    const handleInputChange4 = (event) => {
        setInputBox4(event.target.value);
    };
    const handleInputChange5 = (event) => {
        setInputBox5(event.target.value);
    };

    // Function to handle form submission
    const handleSubmit1 = (event) => {
        event.preventDefault();
        /*
        if(InputBox0 (stock symbol)ไม่เจอใน databases)
        {
            alert('Cannot find your stock symbol')
            window.location.reload();

        }
        else{ // เตรียมยัดข้อมูลตรงนี้}
        InputBox1 //topic
        InputBox2 //content
        InputBox3 //file api
        //******************** ADD*/
        window.location.reload();
    };
    const handleSubmit2 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
        if(InputBox0 (stock symbol)ไม่เจอใน databases)
        {
            alert('Cannot find your stock symbol')
            window.location.reload();

        }
        else if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the the news in the date')
            window.location.reload();
        }
        else {
         //เตรียมยัดข้อมูลตรงนี้ ถ้า Input2,3,4 มันว่าง ไม่ต้องอัพ}
            if(InputBox2 !== ''){// ยัด InputBox2 อัพเดทค่า topic ของ ข่าวของ stock InputBox0 ที่ วันที่ InputBox1}
            if(InputBox3 !== ''){// ยัด InputBox3 อัพเดทค่า contents ของ ข่าวของ stock InputBox0 ที่ วันที่ InputBox1}
            if(InputBox4 !== ''){// ยัด InputBox4 อัพเดทค่า line available ของ ข่าวของ stock InputBox0 ที่ วันที่ InputBox1}
        /*InputBox1 //account Id ที่ต้องการอัพเดท
        //******************** Edit*/
        window.location.reload();
    };

    const handleSubmit3 = (event) => {
        event.preventDefault();
        // Perform any necessary actions with the input value
        /*
        if(InputBox0 (stock symbol)ไม่เจอใน databases)
        {
            alert('Cannot find your stock symbol')
            window.location.reload();

        }
        else if(InputBox1 ไม่เจอใน database){
            alert('Cannot find the the news in the date')
            window.location.reload();
        }
        else{//ลบ accountID}
        */
        /*InputBox1 //accountID ที่ต้องการลบ
        //********************ยัดข้อมูลตรงนี้ Delete*/
        window.location.reload();
    };



    return (
        <div>
            <h className='ManagementHeader'>Account Management</h>
            <div className="button-group">
                <button
                    className={`buttonAdd ${selectedButton === 'Add' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Add')}
                >
                    Add
                </button>
                <button
                    className={`buttonEdit ${selectedButton === 'Edit' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Edit')}
                >
                    Edit
                </button>
                <button
                    className={`buttonDelete ${selectedButton === 'Delete' ? 'selected' : ''}`}
                    onClick={() => handleButtonClick('Delete')}
                >
                    Delete
                </button>


            </div>

            {selectedButton === 'Add' &&
                <form onSubmit={handleSubmit1}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="topic..."
                        className='box_1_Input'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="contents..."
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="API of the content file..."
                        className='box_3_input'
                    />
                    <button className='resetAdd'>Reset</button>
                    <button type="submit" className='submitAdd'>Create</button>
                </form>
            }

            {selectedButton === 'Edit' &&
                <form onSubmit={handleSubmit2}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="date of the news you want to edit..."
                        className='box_1_forSearch'
                    />
                    <input
                        type="text"
                        value={InputBox2}
                        onChange={handleInputChange2}
                        placeholder="topic {optional}"
                        className='box_2_input'
                    />
                    <input
                        type="text"
                        value={InputBox3}
                        onChange={handleInputChange3}
                        placeholder="contents {optional}"
                        className='box_3_input'
                    />
                    <input
                        type="text"
                        value={InputBox4}
                        onChange={handleInputChange4}
                        placeholder="API of the content file {optional}"
                        className='box_4_input'
                    />

                    <button className='resetEdit'>Reset</button>
                    <button type="submit" className='submitEdit'>Update</button>
                </form>
            }

            {selectedButton === 'Delete' &&
                <form onSubmit={handleSubmit3}>
                    <input
                        type="text"
                        value={InputBox1}
                        onChange={handleInputChange1}
                        placeholder="date of the news you want to delete..."
                        className='box_1_forSearch'
                    />

                    <button className='resetDelete'>Reset</button>
                    <button type="submit" className='submitDelete'>Delete</button>
                </form>
            }

            <input
                type="text"
                value={InputBox0}
                onChange={handleInputChange0}
                placeholder="Your company stock symbol..."
                className='brokerBox'
            />

        </div>
    );
};

export default NewsManagement;
