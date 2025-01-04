import pool from '@/app/utils/db';

export default async function ServerComponent() {
  // This function fetches the real public IP address and geolocation data, then saves it to the database
  async function saveIpToDatabase() {
    try {
      // Step 1: Get the real public IP address from ipify API
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const { ip } = await ipResponse.json();

      // Step 2: Fetch geolocation data and ISP based on the IP using ipapi
      const geoResponse = await fetch(`https://ipapi.co/${ip}/json/`);
      const geoData = await geoResponse.json();
      const address = geoData.city
        ? `${geoData.city}, ${geoData.region}, ${geoData.country_name}`
        : geoData.country_name || 'Unknown';
      const isp = geoData.org || 'Unknown ISP';  // ISP info

      // Step 3: Save the IP, address, and ISP to the database
      const query = `INSERT INTO porfoliologs (ipAddress, address, isp, timestamp) VALUES (?, ?, ?, NOW())`;
      await pool.execute(query, [ip, address, isp]);

      // Return the IP, address, and ISP for confirmation
      return { ip, address, isp };
    } catch (error) {
      console.error('Error saving IP or fetching address:', error);
      return { ip: 'Unavailable', address: 'Unavailable', isp: 'Unavailable' };
    }
  }

  // Call the function to save the IP, address, and ISP
  const { ip, address, isp } = await saveIpToDatabase();

  // You don't need to render anything; you're just saving data
  return null;
}
