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

app.post('/rentals', (req, res) => {
    if (!req.session.username) {
      return res.status(401).json({ message: "User is not logged in" });
    }
  
    const username = req.session.username;
  
    const { car_id, addons, rental_days } = req.body;
  
    db.query('SELECT id FROM users WHERE username = ?', [username], (err, result) => {
        if (err) {
            console.error('Error fetching user id:', err);
            return res.status(500).json({ message: "Error fetching user id" });
        }
        
        const loggedInUserId = result[0].id;

        const sql = "INSERT INTO rentals (user_id, car_id, addons, rental_days) VALUES (?, ?, ?, ?)";
        const values = [loggedInUserId, car_id, JSON.stringify(addons), rental_days];
      
        db.query(sql, values, (err, result) => {
            if (err) {
                console.error('Error inserting rental:', err);
                return res.status(500).json({ message: "Error inserting rental into database", error: err });
            }
            console.log('Rental submitted successfully:', result);
            return res.json({ message: "Rental submitted successfully", result });
        });
    });
});

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
