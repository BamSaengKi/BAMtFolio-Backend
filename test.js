const fs = require('fs');


const userBuffer = fs.readFileSync('./data/portfolio.json');

const portfolio = JSON.parse(userBuffer.toString());

portfolio.PortfolioList.push({id: 1});

fs.writeFileSync('./data/portfolio.json', JSON.stringify(portfolio));
