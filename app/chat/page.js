"use client"
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import config from '@/lib/config';
import MessageParser from '@/components/MessageParser';
import ActionProvider from '@/components/ActionProvider';

export default function Chat (){
    return(
        <div  style={{margin:"10rem"}}>


        <Chatbot
        config={config}
        messageParser={MessageParser}
        actionProvider={ActionProvider}
        
        />
        </div>
    )
}