const express = require('express');
const Stripe = require('stripe');
const stripe = new Stripe("sk_test_51NQEZFEgjOGrqMGr2NxYJPYlzNKW2cwJgRHjHx8BjWn4W7otAPjkEe4Fy4H8Banr8ktCLnkTcUQQw0peZ3zo2ycu00dnDsbQnr");

const cors = require('cors');

const app = express();

app.use(cors({ origin: "http://localhost:3000"}));
app.use(express.json());

app.post("/api/checkout", async (req, res) => {
    const {id, amount} = req.body;

    try {
        const payment = await stripe.paymentIntents.create({
            amount,
            currency: "MXN",
            payment_method: id,
            confirm: true,
        });

        console.log(payment);

        return res.status(200).json({message: 'Pago exitoso'});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: error.message});
    }
});

app.listen(3001, () => {
    console.log('Server on part', 3001);
})
