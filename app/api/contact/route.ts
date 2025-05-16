import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, message } = body

    // Validate the request body
    if (!name || !email || !message) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 })
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return NextResponse.json({ message: "Invalid email format" }, { status: 400 })
    }

    // In a real application, you would send an email here
    // For this example, we'll simulate a successful email send

    // Simulate processing time
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Mock email sending logic
    console.log("Sending email with the following data:")
    console.log("Name:", name)
    console.log("Email:", email)
    console.log("Message:", message)

    // Return success response
    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 })
  } catch (error) {
    console.error("Error processing contact form submission:", error)

    return NextResponse.json({ message: "An error occurred while processing your request" }, { status: 500 })
  }
}
