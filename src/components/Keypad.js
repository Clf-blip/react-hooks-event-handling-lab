// Code Keypad Component Here

import React, { useState } from 'react';

function Keypad() {
    const [password, setPassword] = useState('');

    const handleChange = (event) => {
        console.log('Entering password...');
        setPassword(event.target.value);
    };

    return (
        <div>
            <input 
                type="password" 
                value={password} 
                onChange={handleChange} 
                placeholder="Enter your password" 
            />
        </div>
    );
}

export default Keypad;
