'use client';

import { JSX, ReactNode, useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import { ChatMessage, generateChatResponse } from '@/utils/action';
import toast from 'react-hot-toast';
import { IoPerson } from 'react-icons/io5';
import { FaRobot } from 'react-icons/fa';

const Chat = () => {
  const [text, setText] = useState('');
  const [messages, setMessages] = useState<Array<ChatMessage>>([]);

  const { mutate, isPending } = useMutation({
    mutationFn: (query: ChatMessage): any => generateChatResponse([...messages, query]),
    onSuccess: (data: ChatMessage) => {
      if (!data) {
        toast.error('Failed to get response');
        return;
      }

      setMessages(prev => [...prev, data]);
    },
  });

  const hadnleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const query: ChatMessage = {
      role: 'user',
      content: text,
    };
    mutate(query);
    setMessages(prev => [...prev, query]);
    setText('');
  };

  const renderMessage = (message: ChatMessage, index: number): JSX.Element => {
    const { role, content } = message;
    const avatar =
      role === 'user' ? (
        <IoPerson className="text-primary" size={30} />
      ) : (
        <FaRobot className="text-primary" size={30} />
      );
    const bcg = role === 'user' ? 'bg-base-200' : 'bg-secondary-content';
    return (
      <div
        key={index}
        className={`${bcg} flex py-6 -mx-8 px-8 text-xl leading-loose border-b border-base-300`}
      >
        <span className="mr-4">{avatar}</span>
        <p className="max-w-3xl">{content}</p>
      </div>
    );
  };

  return (
    <div className="min-h-[calc(100vh-6rem)] grid grid-rows-[1fr,auto]">
      <div>
        {messages.map((message, index) => renderMessage(message, index))}
        {isPending ? (
          <div className="flex justify-center py-10">
            <span className="loading loading-spinner loading-lg"></span>
          </div>
        ) : null}
      </div>
      <form onSubmit={hadnleSubmit} className="max-w-4xl pt-12">
        <div className="join w-full">
          <input
            className="input input-bordered input-lg w-full join-item"
            placeholder="Question"
            required
            value={text}
            onChange={e => setText(e.target.value)}
          />
          <button
            type="submit"
            disabled={isPending}
            className="btn btn-primary btn-lg join-item"
          >
            {isPending ? <span className="loading loading-spinner loading-lg"></span> : 'Ask'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chat;
