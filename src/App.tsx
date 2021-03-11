import React from 'react';
import firebase from 'firebase/app';

import 'firebase/auth';

import Customers from './pages/Customers';

import './App.css';

function App() {
    
    if (!firebase.apps || firebase.apps.length < 1) {
        firebase.initializeApp({
            apiKey: process.env.REACT_APP_API_KEY,
            authDomain: process.env.REACT_APP_AUTH_DOMAIN,
            projectId: process.env.REACT_APP_PROJECT_ID,
            storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
            messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
            appId: process.env.REACT_APP_APP_ID,
            measurementId: process.env.REACT_APP_MEASUREMENT_ID,
        });
    }

    React.useEffect(() => {
        firebase.auth().signInAnonymously().then(response => console.log(response));
    }, []);

    return (
        <div className="App">
            <header className="App-header">
                <Customers />
            </header>
        </div>
    );
}

export default App;
