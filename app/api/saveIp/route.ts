import pool from '@/app/utils/db';
import { NextRequest, NextResponse } from 'next/server';
import { headers } from "next/headers";

export async function GET(req: NextRequest) {
  if (req.method === 'GET') {
    try {
      // Step 1: Retrieve the real public IP address from the headers using headers() method
      let ip = (await headers()).get("x-forwarded-for") || req.headers.get('x-real-ip') || '';
      console.log('ip',ip)

      // If no IP found in the header, fall back to ipify API
      if (!ip) {
        const ipResponse = await fetch('https://api.ipify.org?format=json');
        const { ip: apiIp } = await ipResponse.json();
        ip = apiIp;
      }

      // Step 2: Fetch geolocation data and ISP based on the IP using ipapi
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geoResponse.json();
      const address = geoData.city
        ? `${geoData.city}, ${geoData.region}, ${geoData.country_name}`
        : geoData.country_name || 'Unknown';
      const isp = geoData.org || 'Unknown ISP'; // ISP info

      // Step 3: Save the IP, address, and ISP to the database
      const query = `INSERT INTO porfoliologs (ipAddress, address, isp, timestamp) VALUES (?, ?, ?, NOW())`;
      await pool.execute(query, [ip, address, isp]);

      // Return a successful response with the IP, address, and ISP
      return new Response(JSON.stringify({ ip, address, isp }), { status: 200 });
    } catch (error) {
      console.error('Error saving IP or fetching address:', error);
      return new Response(
        JSON.stringify({ ip: 'Unavailable', address: 'Unavailable', isp: 'Unavailable' }),
        { status: 500 }
      );
    }
  } else {
    // Method not allowed
    return new Response(JSON.stringify({ message: 'Method Not Allowed' }), { status: 405 });
  }
}
