import * as amqp from "amqplib";

interface MailMessage {
  from: string;
  to: string;
  subject: string;
  body: string;
}

async function sendMail(
  routingKey: string,
  message: MailMessage
): Promise<void> {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "new_exchange";
    const exchangeType = "topic";

    await channel.assertExchange(exchange, exchangeType, { durable: true });


    channel.publish(
      exchange,
      routingKey,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true, // Ensures message is not lost if RabbitMQ restarts
      }
    );

    console.log(" Mail sent:", message);

    setTimeout(async () => {
      await channel.close();
      await connection.close();
      console.log(" Connection closed.");
    }, 1000);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the function
sendMail("order.placed", {
  from: "yukesh.maha10@gmail.com",
  to: "swetamaharajn177@gmail.com",
  subject: "Hi order,",
  body: "its me order",
});
sendMail("payment.processed", {
    from: "yukesh.maha10@gmail.com",
    to: "swetamaharajn177@gmail.com",
    subject: "Hi payment,",
    body: "its me payment",
  });
