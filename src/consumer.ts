import * as amqp from "amqplib";

async function receivemail() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();


    await channel.assertQueue("mail_queue", { durable: false });
    
    channel.consume("mail_queue",(message)=>{

        if(message!=null){
            console.log("Message received:",JSON.parse(message.content.toString()));
            channel.ack(message);
    }})
    
  } catch (error) {
    console.error("Error:", error);
  }
}
receivemail();
