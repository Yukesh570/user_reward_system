const amqp = require('amqplib');

const RABBITMQ_URL = 'amqp://localhost';
const QUEUE_NAME = 'task_queue';

async function sendToQueue(message) {
    try {
        console.log("Connecting to RabbitMQ...");
        const connection = await amqp.connect(RABBITMQ_URL);
        console.log("✅ Connected!");

        const channel = await connection.createChannel();
        console.log("✅ Channel created!");

        // Ensure the queue is created
        await channel.assertQueue(QUEUE_NAME, { 
            durable: true,  // Queue persists after restarts
        });

        console.log(`✅ Queue asserted: ${QUEUE_NAME}`);

        // Corrected message sending
        const success = channel.sendToQueue(QUEUE_NAME, Buffer.from(message), {
            persistent: true, // Message survives RabbitMQ restarts
        });

        console.log(`📩 Sent: '${message}', Success: ${success}`);

        setTimeout(() => {
            connection.close();
            console.log("✅ Connection closed");
            process.exit(0);
        }, 1000);
    } catch (error) {
        console.error('❌ Error sending message:', error);
    }
}

// Read message from command-line arguments
const message = process.argv.slice(2).join(' ') || "Hello, RabbitMQ!";
sendToQueue(message);
