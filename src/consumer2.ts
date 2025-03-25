import * as amqp from "amqplib";

async function receivemail() {
  try {
    const connection = await amqp.connect("amqp://localhost");
    const channel = await connection.createChannel();


    await channel.assertQueue("mail_queue2", { durable: false });
    
    channel.consume("mail_queue2",(message)=>{

        if(message!=null){
            console.log("Message received for second consumer:",JSON.parse(message.content.toString()));
            channel.ack(message);
    }})
    
  } catch (error) {
    console.error("Error:", error);
  }
}
receivemail();
