const express = require('express');
const app = express();
const port = 3000;
var cors = require('cors')

app.use(express.json());

app.use(cors())


const products = [
        {
            id: 1,
            title: "Figurine Pop Deku w/Eri",
            description : "POP Animation: MHA- Infinite Deku w/Eri",
            imageUrl : "https://www.cdiscount.com/pdt2/3/3/5/1/700x700/889698519335/rw/pop-animation-mha-infinite-deku-w-eri.jpg",
            likes : 0,
            isLiked : false,
            prices : [{type: "normal", price: 24.99}, {type: "gold", price: 29.99}, {type: "fluorescent", price: 34.99}],
            date_added : new Date("2021-01-01")
        },
        {
            id: 2,
            title : "Figurine Pop Levi Ackerman",
            description : "POP Animation: Attack on Titan- Levi Ackerman",
            imageUrl : "https://m.media-amazon.com/images/W/IMAGERENDERING_521856-T1/images/I/713eCGXA1tL._AC_SL1200_.jpg",
            likes : 0,
            isLiked : false,
            prices : [{type: "normal", price: 24.99}],
            date_added : new Date("2021-02-03")
        },
        {
            id: 3,
            title : "Figurine Pop Harry Potter",
            description : "Figurine Funko Pop! N°01 - Harry Potter - Harry Et Sa Baguette",
            imageUrl : "https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dw25d57a1c/images/high-res/harry_potter_1.jpg",
            likes : 0,
            isLiked : false,
            prices : [{type: "normal", price: 24.99}],
            date_added : new Date("2020-06-18")
        },
        {
            id: 4,
            title : "Figurine Pop Voldenez",
            description : "Figurine Funko Pop! N°06 - Harry Potter - Voldemort Avec Sa Baguette",
            imageUrl : "https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dw8bddba54/images/high-res/voldemort_1.jpg",
            likes : 0,
            isLiked : false,
            prices : [{type: "normal", price: 24.99}],
            date_added : new Date("2020-06-24")
        },
        {
            id: 5,
            title : "Figurine Pop Hermione",
            description : "Figurine Funko Pop! N°03 - Harry Potter - Hermione Et Sa Baguette",
            imageUrl : "https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dwbe66c298/images/high-res/hermione_1_2.jpg",
            likes : 0,
            isLiked : false,
            prices : [{type: "normal", price: 24.99}],
            date_added : new Date("2020-06-21")
        },
        {
            id: 6,
            title : "Figurine Pop Ron Weasley",
            description : "Figurine Funko Pop! N°44 - Harry Potter - Ron Weasley Avec Croutard",
            imageUrl : "https://www.micromania.fr/dw/image/v2/BCRB_PRD/on/demandware.static/-/Sites-masterCatalog_Micromania/default/dwd4ea79ed/images/high-res/ron_croutard_1.jpg",
            likes : 0,
            isLiked : false,
            prices : [{type: "normal", price: 24.99}],
            date_added : new Date("2020-06-25")
        },
];


const orderIds = [
    {
        id: 1,
        contactNme: "Loïse Fenoll",
        status: "Completed",
        orderId: "azerttyicp"
    },
    {
        id: 2,
        contactNme: "Jane Birkin",
        status: "Shipped",
        orderId: "ugyiuoijkbj"
    },
    {
        id: 3,
        contactNme: "Nicola Sirkis",
        status: "Payed",
        orderId: "yugumlkmlm"
    }
]

app.get('/products', (req, res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products)
});

app.get('/products/:id', (req, res) => {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    res.json(products.find((p) => p.id == id))
});

app.put('/products/:id/likes', (req, res) => {
    const id = req.params.id;
    let product = products.find((p) => p.id == id);
    if (product.isLiked) {
        product.likes--;
    } else {
        product.likes++;
    }
    product.isLiked = !product.isLiked;

    res.set('Access-Control-Allow-Origin', '*');
    res.json(product)
})

app.post('/orders', (req, res) => {
    let contactName = req.body.contact.name;
    let random = (Math.random() + 1).toString(36).substring(7);
    let newOrder = {
        id: orderIds[orderIds.length - 1] + 1,
        contactNme: contactName,
        status: "Saved",
        orderId: random
    }
    orderIds.push(newOrder)
    res.set('Access-Control-Allow-Origin', '*');
    res.json(newOrder.id)
})

app.get('/orders', (req,res) => {
    res.set('Access-Control-Allow-Origin', '*');
    res.json(orderIds)
})

app.get('/orders/:id', (req,res) => {
    const id = req.params.id;
    res.set('Access-Control-Allow-Origin', '*');
    res.json(orderIds.find((o) => o.id == id))
})

app.listen(port, () => {
    console.log(`Application exemple Ã  l'Ã©coute sur le port ${port}!`)
});
