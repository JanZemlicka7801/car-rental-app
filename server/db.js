import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';

const app = express();
app.use(cors({
    origin: ['http://localhost:5173'],
    methods: ["POST", "GET"],
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())
app.use(session({
    secret: 'secret', // a secret key to encrypt session coockie
    resave: false,
    saveUninitialized: false,
    cookie: {
        secure: false,
        maxAge: 1000 * 60 * 60 * 24
    } //set the cookie properties
}))

const db = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'bumblebee_rental'
});

app.get('/cars', (req, res) => {
    const sql = "SELECT * FROM cars WHERE available = true"; 
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching cars:', err);
            return res.status(500).json({ message: "Error fetching cars from database" });
        }
        return res.json(result);
    });
});

app.get('/addons', (req, res) => {
    const sql = "SELECT * FROM addons"; 
    db.query(sql, (err, result) => {
        if (err) {
            console.error('Error fetching addons:', err);
            return res.status(500).json({ message: "Error fetching addons from database" });
        }
        return res.json(result);
    });
});

app.get('/', (req, res) => {
    if(req.session.username) {
        return res.json({valid: true, username: req.session.username})
    } else {
        return res.json({valid: false})
    }
})

app.post('/signup', (req, res) => {
    const sql = "INSERT INTO users (`username`, `email`, `password`) VALUES (?, ?, ?)";
    const values = [
        req.body.name, 
        req.body.email, 
        req.body.password
    ];
    
    db.query(sql, values, (err, result) => {
        if (err) {
            console.error('Error in signup:', err);
            return res.status(500).json({ message: "Error in Node" });
        }
        return res.json(result);
    });
});

app.post('/login', (req, res) => {
    const sql = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(sql, [req.body.email, req.body.password], (err, result) => {
        if (err) {
            return res.json({ message: "Error inside server" });
        }
        if (result.length > 0) {
            req.session.username = result[0].username;
            return res.json({ Login: true});
        } else {
            return res.json({ Login: false });
        }
    });
});

const PORT = 8081;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
