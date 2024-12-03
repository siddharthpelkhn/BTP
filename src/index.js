import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.js'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import { GoogleOAuthProvider } from "@react-oauth/google"
// require('dotenv').config()
const clientId = "783359954892-vr6s97mk4see9b6rk51j8k9gma4bh34e.apps.googleusercontent.com";

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<GoogleOAuthProvider clientId={clientId}>
			<React.StrictMode>
				<App />
			</React.StrictMode>
		</GoogleOAuthProvider>
	</BrowserRouter>
);