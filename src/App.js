import React, { useRef } from 'react';

function App() {
    const file = useRef(null);

    const handleButtonClick = () => {
        file.current.click();
    };

    return (
        <div id="app">
            <p>Please select an image</p>
            <p>
                <input ref={file} type="file" accept="image/*" />
                <button onClick={handleButtonClick}>Pick Image</button>
            </p>
        </div>
    );
}

export default App;