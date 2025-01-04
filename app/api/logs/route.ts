import pool from '@/app/utils/db';
import { NextRequest, NextResponse } from 'next/server';

/* export const revalidate = true */

export async function GET(req: NextRequest,res:NextResponse) {
  try {
    // Fetch logs sorted from newest to oldest
    const [rows] = await pool.query('SELECT * FROM porfoliologs ORDER BY timestamp DESC');

    return new Response(JSON.stringify({ logs: rows }), { status: 200 });
  } catch (error) {
    console.error('Error fetching logs:', error);
    return new Response(JSON.stringify({message: 'Something went wrong'  }), { status: 500 });
  }
}