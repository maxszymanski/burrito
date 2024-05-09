// This is your test secret API key.
const stripe = require('stripe')(
    'sk_test_51P8lmRFGgRWszCdipWGn2acNLLTC7XvCJ9daAU1uyJGc4QCG6qP8FsbMYxFlIDyAa8rIXFA4JsxyFrd8oEJZzZvF008demBmZl'
)
const express = require('express')
const app = express()
app.use(express.static('public'))

const YOUR_DOMAIN = 'http://localhost:5173'

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
                // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
                price: 'price_1P9Sd8FGgRWszCdicwmCGtDh',
                quantity: 1,
            },
        ],
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}?success=true`,
        cancel_url: `${YOUR_DOMAIN}?canceled=true`,
        automatic_tax: { enabled: true },
    })

    res.redirect(303, session.url)
})

app.listen(5173, () => console.log('Running on port 5173'))
