import * as amqp from "amqplib";

interface MailMessage {
  from: string;
  to: string;
  subject: string;
  body: string;
}

async function sendMail(): Promise<void> {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();

    const exchange = "mail_exchange";
    const routingKey = "send_mail";
    const routingKey2 = "send_mail2";
    const queue = "mail_queue";
    const queue2= "mail_queue2";

    const message: MailMessage = {
      from: "yukesh.maha10@gmail.com",
      to: "swetamaharajn177@gmail.com",
      subject: "Hi world,",
      body: "its me yukesh",
    };

    await channel.assertExchange(exchange, "direct", { durable: true });
    await channel.assertQueue(queue, { durable: false });
    await channel.assertQueue(queue2,{durable:false});
    await channel.bindQueue(queue, exchange, routingKey);
    await channel.bindQueue(queue2,exchange,routingKey2);

    channel.publish(
      exchange,
      routingKey2,
      Buffer.from(JSON.stringify(message)),
      {
        persistent: true, // Ensures message is not lost if RabbitMQ restarts
      }
    );

    console.log(" Mail sent:", message);

    setTimeout(async () => {
      await channel.close();
      await connection.close();
      console.log("🔌 Connection closed.");
    }, 1000);
  } catch (error) {
    console.error("Error:", error);
  }
}

// Run the function
sendMail();
