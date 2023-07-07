const puppeteer = require("puppeteer");

function delay(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  await page.goto(
    "https://www.msamb.com/ApmcDetail/APMCPriceInformation#ArrivalGird"
  );

  await page.evaluate(() => {
    let select = document.querySelector('select[name="language"]');
    select.value = "English";
    select.dispatchEvent(new Event("change", { bubbles: true }));
  });

  await page.waitForNavigation();
  await page.waitForSelector("#APMCTitle");

  await page.click("#APMCTitle");

  await page.waitForSelector("#ArrivalGirdID");
  await page.click("#ArrivalGirdID");

  const selectField= await page.waitForSelector('select[name="drpArrival"]');
  

  await delay(2000)

  const optionValues = await selectField.evaluate((select) => {
    const options = Array.from(select.options);
    return options.map((option) => option.innerText);
  });

  console.log(optionValues)

  // for (const optionValue of optionValues) {
  //   await page.select('#drpArrival', optionValue);
  
  //   // Wait for any necessary page navigation or data loading
  //   await page.waitForNavigation();
  
  //   // Scrape data from the selected option
  //   const scrapedData = await page.evaluate(() => {
  //     // Write your scraping logic here to extract data from the page
  //     // and return the desired data as an object or an array
  //   });
  
  //   console.log('Scraped data:', scrapedData);
  // }


  // await page.click("#drpArrival")
  // await page.select("#drpArrival", '007');


  // await page.evaluate(() => {
  //   let select = document.querySelector('select[name="drpArrival"]');
  //   select.value = "007";
  //   select.dispatchEvent(new Event("change"));
  // });


  // await page.waitForNavigation();
  await browser.close()

})();
