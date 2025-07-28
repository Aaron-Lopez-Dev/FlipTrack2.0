import dotenv from 'dotenv';
import { getMarketplaceDataService } from '../services/getMarketplaceDataService';
dotenv.config();

const apiKey = process.env.GOOGLE_API_KEY;

export async function performSearchService(
  searchInput: string,
  radiusInput: string,
  zipInput: string
): Promise<string> {
  const radius = Math.floor(Number(radiusInput) * 1.609344);
  const searchQuery = formatSearchQuery(searchInput);
  const { latitude, longitude } = await getLatLngFromZip(zipInput);
  const url = buildSearchUrl(radius, longitude, latitude, searchQuery);
  const usableData = await getMarketplaceDataService(url);
  return usableData;
}

function formatSearchQuery(input: string): string {
  return input.trim().split(' ').join('%20');
}

async function getLatLngFromZip(zip: string): Promise<{ latitude: string; longitude: string }> {
  const locationURL = `https://maps.googleapis.com/maps/api/geocode/json?address=${zip}&key=${apiKey}`;
  const response = await fetch(locationURL);
  const data = await response.json();

  if (!data.results || !data.results[0]) {
    throw new Error('Invalid zip code');
  }

  const latitude = data.results[0].geometry.location.lat;
  const longitude = data.results[0].geometry.location.lng;

  return { latitude, longitude };
}

function buildSearchUrl(
  radius: number,
  longitude: string,
  latitude: string,
  searchQuery: string
): string {
  return `https://facebook-scraper-api4.p.rapidapi.com/get_facebook_marketplace_items_listing?query=${searchQuery}&filter_location_latitude=${latitude}&filter_location_longitude=${longitude}&filter_price_lower_bound=0&filter_price_upper_bound=214748364700&filter_radius_km=${radius}`;
}


