const axios = require('axios');
const cheerio = require('cheerio');


async function scrapeData(url){
    try {
        const response = await axios.get(url);
        const $ = cheerio.load(response.data);

        // const selectElement = $('#language');
        const selectElement = $('select[name="language"]');
        // // Update the value of the select element
        // selectElement.val('English');

        selectElement.find('option:selected').removeAttr('selected'); // Deselect the currently selected option
        selectElement.find('option[value="English"]').attr('selected', 'selected'); // Select the desired option
    


    
        // selectElement.change();
        // Trigger the change event
        // selectElement.trigger('change');

        // const selectedOption = selectElement.find('option:selected');

        // // Extract the value attribute of the selected option
        // const optionValue = selectedOption.attr('value');
    
        // // Output the option value
        // console.log('Selected option value:', optionValue);

        console.log($.html());
    } catch (error) {
        console.log(error)
    }
}

scrapeData("https://www.msamb.com/ApmcDetail/APMCPriceInformation#ArrivalGird")