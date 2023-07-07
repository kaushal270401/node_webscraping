
// const axios = require('axios');
// const cheerio = require('cheerio');


// async function scrapeData(){
//     try{
//         const response = await axios.get("")
//         const $= cheerio.load(response.data)
//     }

//     const data =$('')
// }


const axios = require('axios');
const cheerio = require('cheerio');

async function scrapeWebsite(url) {
  try {
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);

    // Extract data using jQuery-like selectors
    const title = $('h1').text();
    const paragraphs = $('p').map((index, element) => $(element).text()).get();

    // Display the extracted data
    console.log('Title:', title);
    console.log('Paragraphs:', paragraphs);
  } catch (error) {
    console.error('An error occurred while scraping the website:', error);
  }
}

const websiteUrl = 'https://wpdatatables.com/'

scrapeWebsite(websiteUrl);