const amqp = require("amqplib");

async function sendMail() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const exchange = "mail_exchange";
    const queue = "yukesh_mail";
    const routingKey = "send_mail";

    const message = {
      from: "yukesh.maha10@gmail.com",
      to: "swetamaharajn177@gmail.com",
      subject: "Hi Love,",
      body: "Admirer",
    };

    // Ensure the exchange is correctly set
    await channel.assertExchange(exchange, "direct", { durable: true });

    // Ensure the queue exists
    await channel.assertQueue(queue, { durable: true });

    // Bind the queue to the exchange with the routing key
    await channel.bindQueue(queue, exchange, routingKey);

    // Publish message to the exchange (NOT directly to the queue!)
    channel.publish(exchange, routingKey, Buffer.from(JSON.stringify(message)), {
      persistent: true,
    });

    console.log("📩 Mail sent:", message);

    setTimeout(() => {
      connection.close();
      console.log("✅ Connection closed");
      process.exit(0);
    }, 1000);
  } catch (error) {
    console.error("❌ Error:", error);
  }
}

// Call the function
sendMail();
