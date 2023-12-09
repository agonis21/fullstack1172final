// Import required modules
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');

// Create an Express application
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());


const apiRoutes = require('./routes/apiRoutes'); 
const authRoutes = require('./routes/authRoutes'); 
const videoRoutes = require('./routes/videoRoutes'); 

app.use('/api', apiRoutes); // Use the API subrouter
app.use('/auth', authRoutes); // Use the auth subrouter
app.use('/video', videoRoutes); // Use the auth subrouter






app.set('view engine', 'pug');



// Serve static files from the "public" folder
app.use(express.static(path.join(__dirname, 'public')));

// Set up a route for the root path
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Set up a route for the sign in
app.get('/signin', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signin.html'));
});

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'signup.html'));
});

// app.get('/video/dashboard', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'feed.html'));
// })

// Handle 404 errors
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// Handle other errors
app.use((err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
        message: err.message,
        },
    });
});



// Start the server
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
