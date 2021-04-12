const fs = require('fs');
const coolImages = require('cool-images');
const faker = require('faker');
const { program } = require('commander');

program.parse(process.argv);

const quantity = parseInt(program.args, 10);
const arrayOfProducts = [];

const getRandomPrice = (min, max) => Math.round(Math.random() * (max - min) + min);

for (let i = 0; i < quantity; i += 1) {
  arrayOfProducts.push({
    id: i,
    title: faker.commerce.productName(),
    img: coolImages.one(1280, 720),
    description: faker.commerce.productDescription(),
    price: getRandomPrice(1, 5000),
  });
}

const jsonData = JSON.stringify({ products: arrayOfProducts, orders: [] });

fs.writeFile('db.json', jsonData, (err) => {
  if (err) console.log('error', err);
  console.log('Items are generated:', quantity);
});
