import { SubscribeMessage, WebSocketGateway } from '@nestjs/websockets';

@WebSocketGateway()
export class ChatGateway {
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    console.log('Hey New Message');
    return 'Hello world!';
  }
  handleConnection() {
    console.log('client connected');
  }
  handleDisconnect() {
    console.log('client disconnected');
   
}
