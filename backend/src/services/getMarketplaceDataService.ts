import dotenv from 'dotenv';

const rapidApiKey = process.env.RAPID_API_KEY;

export async function getMarketplaceDataService(url: string) {
    console.log("Getting Data")
    const data = await getData(url);

   //console.log(data)
    return data
}

async function getData(url: string): Promise<any> {

    const options = {
        headers: {
            'x-rapidapi-key': 'b6969b3555msh8749c87cc8683b1p1525efjsn381233461628',
            'x-rapidapi-host': 'facebook-scraper-api4.p.rapidapi.com'
        }
    };
    
    const response = await fetch(url, options);
    const data = await response.json();
   
    let average = [];
    let sum = 0;

    //Get all listing prices and store in array

    for (let i = 0; i < data.data.items.length; i++) {
        average.push(data.data.items[i].listing_price.amount)
    }
    console.log("ok")
    for (let i = 0; i < average.length; i++) {
        sum = sum + Number(average[i]) / average.length
    }

    let listingData = [];

    for (let i = 0; i < data.data.items.length; i++) {

        const listingObject = {
            "listingtitle": data.data.items[i]?.marketplace_listing_title,
            "listingprice": data.data.items[i]?.listing_price.formatted_amount,
            "listingphoto": data.data.items[i]?.primary_listing_photo.photo_image_url,
            "listingurl": data.data.items[i]?.listingUrl,
            "mileage": data.data.items[i]?.custom_sub_titles_with_rendering_flags[0]?.subtitle
        }

        listingData.push(listingObject)
    }

    let returnObject = {
        "listingData": listingData,
        "average": sum
    }

    return returnObject
}

/*
//Get all listing prices and store in array
for (let i = 0; i < data.data.items.length; i++) {
    average.push(data.data.items[i].listing_price.amount)
}
//console.log(average) 

//Get Average of all listing Prices
let sum = 0;

for (let i = 0; i < average.length; i++) {
    sum = sum + Number(average[i]) / average.length
}

let listingData = [];
for (let i = 0; i < data.data.items.length; i++) {

    const listingObject = {
        "listingtitle": data.data.items[i]?.marketplace_listing_title,
        "listingprice": data.data.items[i]?.listing_price.formatted_amount,
        "listingphoto": data.data.items[i]?.primary_listing_photo.photo_image_url,
        "listingurl": data.data.items[i]?.listingUrl,
        "mileage": data.data.items[i]?.custom_sub_titles_with_rendering_flags[0]?.subtitle
    }
    listingData.push(listingObject)
}
return { message: "Marketplace data fetching is not yet implemented." };
res.json({
    "listingData": listingData,
    "average": sum
});
    })



export default getMarketplaceDataService; */