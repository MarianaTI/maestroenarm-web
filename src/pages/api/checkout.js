import Stripe from "stripe";
const stripe = new Stripe(
  "sk_test_51NQEZFEgjOGrqMGr2NxYJPYlzNKW2cwJgRHjHx8BjWn4W7otAPjkEe4Fy4H8Banr8ktCLnkTcUQQw0peZ3zo2ycu00dnDsbQnr"
);

export default async (req, res) => {
  if (req.method === "POST") {
    const { id, amount } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        currency: "MXN",
        payment_method: id,
        confirm: true,
      });

      console.log(payment);

      return res.status(200).json({ message: "Pago exitoso" });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: error.message });
    }
  } else {
    res.setHeader('Allow', ['POST'])
    res.status(405).end('Method ${req.method} Not Allowed')
  }
};
