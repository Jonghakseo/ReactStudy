import React from 'react';
import { useHistory } from 'react-router-dom';

function About() {
const history=useHistory();
console.log(history);

    return (
    <div>
        <h1>About Page!</h1>
    </div>
    );
}

export default About;