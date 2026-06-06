export async function handler(event: any) {
  try {
    const data = JSON.parse(event.body);

    console.log("Form submission:", data);

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Success" }),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ message: "Error" }),
    };
  }
}