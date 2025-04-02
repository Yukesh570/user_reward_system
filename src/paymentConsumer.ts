import * as amqp from "amqplib";

async function receivemail() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();
    const exchange  = "new_exchange";
    const queue="payment_queue";


    await channel.assertExchange(exchange,"topic",{durable:true});
    await channel.assertQueue(queue, { durable: false });
    await channel.bindQueue(queue,exchange,"payment.*");
    console.log("Waiting for payment messages...");
    channel.consume(queue,(message)=>{

        if(message!=null){
            console.log("Payment received for consumer:",JSON.parse(message.content.toString()));
            channel.ack(message);
    }})
    
  } catch (error) {
    console.error("Error:", error);
  }
}
receivemail();
