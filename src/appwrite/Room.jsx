import React, { useEffect, useState } from 'react';
import { COLLECTION_ID, DATABASE_ID, databases } from './appwriteConfig';
// import './Room.css';

export default function Room() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    getMessage();
  }, []);
  const getMessage = async () => {
    const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
    console.log(response);
    setMessages(response.documents);
  };
  return (
    <div className='container'>
      <div className='row gap-4'>
        {messages?.map((message) => (
          <div key={message.$id} className='row gap-2 justify-content-center align-items-center'>
            <span className='p-2 rounded fw-bolder'>{message.$createdAt}</span>
            <span className='p-2 rounded fw-bolder text-light bg-danger'>{message.body}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
