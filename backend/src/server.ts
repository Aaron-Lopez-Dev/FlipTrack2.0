import express from "express";
import dotenv from 'dotenv';
import cors from "cors";
import { Response, Request } from 'express'
import indexRoutes from './routes/index'
import newSearchRoutes from './routes/newSeachRoute'

const PORT = 4020;

const app = express();
app.use(cors());
app.use(express.json());
dotenv.config();

app.use('/', indexRoutes);
app.use('/new-search', newSearchRoutes)

let searchInputText = "";
let searchQuery = searchInputFunction(searchInputText);
let longitude = 0;
let latitude = 0;
let radius = 0;
let url = setURL(radius, longitude, latitude, searchQuery);
let inputZip;

// Sets Search Parameters ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.post("/set-parameters", async (req: Request, res: Response) => {
    const { radiusInput } = req.body;
    radius = Math.floor(radiusInput * 1.609344)

    res.json(radius)
    console.log("Set Radius")
})

app.post("/set-zip", async (req: Request, res: Response) => {
    // Sets Input Zip Code to Variable
    const { zipInput } = req.body;
    inputZip = zipInput

    // URL is initialized Call is Made
    let locationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${inputZip}&key=AIzaSyA3gtqO6m34qcQaGnpW7WLr_ZceXDRf_yE`
    const reponse = await fetch(locationURL)
    const data = await reponse.json();

    // Long and Lat Values are Saved
    latitude = data.results[0].geometry.location.lat
    longitude = data.results[0].geometry.location.lng
    res.json("Passed")
    console.log("Set Long & Lat")

})

app.post("/set-search", async (req: Request, res: Response) => {
    const { searchInput } = req.body;
    searchInputText = searchInput

    searchQuery = await searchInputFunction(searchInputText)

    url = setURL(radius, longitude, latitude, searchQuery)
    console.log("Set Search Query")
    console.log("Created URL")
    //console.log(url)
    res.json("Passed")
})

// Marketplace Scraper ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.get("/get-data", async (req: Request, res: Response) => {
    let average = [];
    console.log("Using API URL: " + url)
    console.log("Getting Data")
    const options = {
        headers: {
            'x-rapidapi-key': 'b6969b3555msh8749c87cc8683b1p1525efjsn381233461628',
            'x-rapidapi-host': 'facebook-scraper-api4.p.rapidapi.com'
        }
    }
    const response = await fetch(url, options)
    const data = await response.json();


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

    res.json({
        "listingData": listingData,
        "average": sum
    });
})

// Server ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
app.listen(PORT, () => {
    //console.log("DATABASE_URL:", process.env.DATABASE_URL);
    console.log(`\n Server running on http://localhost:${PORT} \n`);
});

// FUNCTIONS ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function setURL(radius: number, longitude: number, latitude: number, searchQuery: string) {
    let url = `https://facebook-scraper-api4.p.rapidapi.com/get_facebook_marketplace_items_listing?query=${searchQuery}&filter_location_latitude=${latitude}&filter_location_longitude=${longitude}&filter_price_lower_bound=0&filter_price_upper_bound=214748364700&filter_radius_km=${radius}`
    return url;
}

function searchInputFunction(searchInput: string) {

    let stringLength = searchInput.length
    let input = searchInput.split(" ", stringLength)
    let output = input.join('%20');
    return output;
}