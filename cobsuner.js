const amqp = require("amqplib");

const RABBITMQ_URL = "amqp://localhost";
const EXCHANGE_NAME = "mail_exchange";
const QUEUE_NAME = "yukeshmail";
const ROUTING_KEY = "send_mail";

async function consumeQueue() {
  try {
    console.log("📡 Connecting to RabbitMQ...");
    const connection = await amqp.connect(RABBITMQ_URL);
    console.log("✅ Connected!");

    const channel = await connection.createChannel();
    console.log("✅ Channel created!");

    // Ensure the exchange exists
    await channel.assertExchange(EXCHANGE_NAME, "direct", { durable: true });

    // Ensure the queue exists
    await channel.assertQueue(QUEUE_NAME, { durable: true });

    // Bind the queue to the exchange
    await channel.bindQueue(QUEUE_NAME, EXCHANGE_NAME, ROUTING_KEY);

    console.log(`[*] Waiting for messages in ${QUEUE_NAME}. To exit press CTRL+C`);

    // Consume messages
    channel.consume(
      QUEUE_NAME,
      (msg) => {
        if (msg !== null) {
          console.log(`[x] Received: ${msg.content.toString()}`);
          console.log(`Queue Name: ${QUEUE_NAME}`);
          console.log(`Delivery Tag: ${msg.fields.deliveryTag}`);
          console.log(`Exchange: ${msg.fields.exchange}`);
          console.log(`Routing Key: ${msg.fields.routingKey}`);
          console.log(`---------------------------------`);

          // Acknowledge the message so it's removed from the queue
          channel.ack(msg);
        }
      },
      { noAck: false }
    );
  } catch (error) {
    console.error("❌ Error in consumer:", error);
  }
}

consumeQueue();
