"use server";
import { headers } from "next/headers";
export async function getIPAddress() {
    return (await headers()).get("x-forwarded-for");
}