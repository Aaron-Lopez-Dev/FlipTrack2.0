import { request, response } from "express";
import { searchService } from "../services/performSearch.service";


let searchInputText = "";
let searchQuery = " "
let longitude = 0;
let latitude = 0;
let radius = 0;
let url = setURL(radius, longitude, latitude, searchQuery);
let inputZip;

function setURL(radius: number, longitude: number, latitude: number, searchQuery: string) {
    let url = `https://facebook-scraper-api4.p.rapidapi.com/get_facebook_marketplace_items_listing?query=${searchQuery}&filter_location_latitude=${latitude}&filter_location_longitude=${longitude}&filter_price_lower_bound=0&filter_price_upper_bound=214748364700&filter_radius_km=${radius}`
    return url;
}

export async function performSearch(req: Request, res: Response) {
    const { searchInput, radiusInput, zipInput } = req.body;

    // convert radius to km
    radius = Math.floor(radiusInput * 1.609344)

    inputZip = zipInput
    searchInputText = searchInput

    try {
        // set search query
        await function searchInputFunction(searchInput: string) {

            let stringLength = searchInput.length
            let input = searchInput.split(" ", stringLength)
            let output = input.join('%20');
            searchQuery = output
            console.log(searchQuery)
        }

        await async function getLongAndLat(inputZip: string) {
            let locationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${inputZip}&key=AIzaSyA3gtqO6m34qcQaGnpW7WLr_ZceXDRf_yE`
            const reponse = await fetch(locationURL)
            const data = await reponse.json();

            // Long and Lat Values are Saved
            latitude = data.results[0].geometry.location.lat
            longitude = data.results[0].geometry.location.lng
            res.json("Passed")
            console.log("Set Long & Lat")
        }

        await function createURL() {

            url = setURL(radius, longitude, latitude, searchQuery)
            console.log("Set Search Query")
            console.log("Created URL")
            console.log(url)
            res.json("Passed")
        }

    } catch (error) {
        console.log(error)
    }
}

