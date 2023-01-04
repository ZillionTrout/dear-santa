require("../db");
// const PresentsBySanta = require("../models/Movie.model");
const mongoose = require('mongoose');

const MONGO_URI = 'mongodb://localhost/dear-santa';

mongoose.connect(MONGO_URI) 
.then(response => console.log(`Connected to the database ${response.connection.name}`))
.then(() => {
return PresentsBySanta.create(presents)
})

const presents = [
    {
        name: 'Lego Star Wars: Death Star',
        image: 'https://i.ebayimg.com/images/g/Wb4AAOSwuPdifpxC/s-l640.jpg',
        price: 850,
        recipient: 'Ale',
        description: 'This amazingly detailed battle station features an incredible array of minifigure-scale scenes, moving parts, characters and accessories from Episodes IV and VI.'
},
{
    name: 'Raised Dichroic Glass Polyhedral Dice with Gemstones (with Box) DND Set',
    image: 'https://i.etsystatic.com/18599689/r/il/cca1dd/3216043343/il_794xN.3216043343_l19u.jpg',
    price: 102,
    recipient: 'Charly',
    description: 'These handcrafted gemstone dice are the perfect gift for any D&D fan.'
},
{
    name: 'Warhammer 40,000 Elite Edition Starter Set',
    image: 'https://m.media-amazon.com/images/I/61-3Bn4g1PL._AC_SL1000_.jpg',
    price: 90,
    recipient: 'Alberto',
    description: 'This amazingly detailed battle station features an incredible array of minifigure-scale scenes, moving parts, characters and accessories from Episodes IV and VI.'
},
{
    name: 'Lego Star Wars: Death Star',
    image: 'https://i.ebayimg.com/images/g/Wb4AAOSwuPdifpxC/s-l640.jpg',
    price: 850,
    recipient: 'Ale',
    description: 'This amazingly detailed battle station features an incredible array of minifigure-scale scenes, moving parts, characters and accessories from Episodes IV and VI.'
},
{
    name: 'Lego Star Wars: Death Star',
    image: 'https://i.ebayimg.com/images/g/Wb4AAOSwuPdifpxC/s-l640.jpg',
    price: 850,
    recipient: 'Ale',
    description: 'This amazingly detailed battle station features an incredible array of minifigure-scale scenes, moving parts, characters and accessories from Episodes IV and VI.'
}
]