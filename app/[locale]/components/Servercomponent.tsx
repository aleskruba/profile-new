import { NextResponse } from 'next/server';
import pool from '@/app/utils/db';
export default async function ServerComponent() {
    async function saveIpToDatabase() {
      try {
        // Step 1: Get the IP address from ipify API
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip } = await ipResponse.json();
  
        // Step 2: Fetch geolocation data based on the IP
        const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
        const geoData = await geoResponse.json();
        const address = geoData.city
          ? `${geoData.city}, ${geoData.region}, ${geoData.country_name}`
          : geoData.country_name || 'Unknown';
  
        // Step 3: Save IP and address to the database
        const query = `INSERT INTO porfoliologs (ipAddress, address, timestamp) VALUES (?, ?, NOW())`;
        await pool.execute(query, [ip, address]);
  
        // Return IP and address
        return { ip, address };
      } catch (error) {
        console.error('Error saving IP or fetching address:', error);
        return { ip: 'Unavailable', address: 'Unavailable' };
      }
    }
  
    // Call the function to save IP and address
    const { ip, address } = await saveIpToDatabase();
  

    return null;
}
