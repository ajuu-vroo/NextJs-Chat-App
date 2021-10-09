import Head from 'next/head'
import { useState, useRef, useEffect } from 'react'
import { io } from 'socket.io-client'
// import Link from 'next/link';

export default function Home() {
  const socket = useRef();
  const userRef = useRef();
  const receiverRef = useRef();
  const messageRef = useRef();
  const [inputAlert, setInputAlert] = useState(false);
  const [inputUI, setInputUI] = useState(false);
  const [inputAlert2, setInputAlert2] = useState(false);
  const [inputUI2, setInputUI2] = useState(false);
  const [messageDisplay, setMessageDisplay] = useState(false)
  const [user, setUser] = useState('');
  const [receiver, setReceiver] = useState('');
  const [disconnect, setDisconnect] = useState(false)
  const [chat, setChat] = useState([]);

  useEffect(() => {
    socket.current = io('ws://chatter-tau.vercel.app');

  }, [])
  useEffect(() => {
    // socket.current.on('left', data => setDisconnect(true))
    socket.current.on('getMessage', data => {
      setChat([...chat, data])
    })

  }, [chat])

  function userHandler(e) {
    e.preventDefault();
    socket.current.emit('addUser', userRef.current?.value)
    socket.current.on('getUser', function (data) {
      if (data === 'user already Created') {
        setInputAlert(true)
        setInputUI(false)
      } else {
        setInputAlert(false)
        setInputUI(true)
        setUser(userRef.current?.value)
      }
    })
  }
  function receiverHandler(e) {
    e.preventDefault();
    socket.current.emit('checkUser', receiverRef.current?.value)
    socket.current.on('validUser', function (data) {
      if (data === 'true') {
        setInputAlert2(true)
        setInputUI2(false)
        setReceiver(receiverRef.current?.value)

      } else {
        setInputUI2(true)
        setInputAlert2(false)
      }
    })
  }
  function messageHandler(e) {
    e.preventDefault();
    socket.current.emit('sendMessage', {
      userName: user,
      receiverName: receiver,
      textMessage: messageRef.current.value
    })
    // socket.current.on('getMessage', data => {
    //   setMsg([...msg, data])
    // })
    // setOwnMsg([...ownMsg, messageRef.current.value])
    setChat([...chat, { message: messageRef.current.value, type: 'mine' }])
    messageRef.current.value = ''

    // console.log(chat)
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 bg-purple-600">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {messageDisplay
        ? (
          <div>
            <div className='bg-white rounded-sm flex-col flex items-center'>
              <h1 className='font-mono tracking-tighter'>{'You are chatting as' + " "} <span className='font-semibold text-purple-600 capitalize'>{user}</span></h1>
              <h1 className='font-mono tracking-tighter'>{'In conversation with' + " "} <span className='font-semibold text-purple-600 capitalize'>{receiver}</span></h1>
            </div>
            <div className='h-[650px] lg:h-[500px] bg-white flex justify-between overflow-scroll'>
              <div>
                <div className='h-7 relative' />
                {chat?.map((item) => {
                  if (item.type === 'mine') {
                    return <h1 className="bg-gray-300 text-right pr-4 w-[150px] px-3 rounded-2xl mb-2 pt-1 font-mono text-gray-800 text-xl ml-52 mt-2 rounded-br-none h-auto">{item?.message}</h1>
                  } else {
                    return <h1 className="bg-purple-600 text-left text-white pl-4 w-[150px] rounded-2xl px-3 font-mono text-xl mt-2 pt-1 ml-1 rounded-bl-none h-auto" >{item?.message}</h1>
                  }
                })}
              </div>

            </div>
            {disconnect && <h1 className='text-red-800 underline text-xs mx-auto pt-4 absolute bottom-20 left-28 lg:left-[615px]'>The User left the chat.</h1>}
            <div className=' w-[370px] bg-white shadow-2xl'>
              <form onSubmit={messageHandler} className='flex justify-center'>
                <input type='text' autoComplete='off' name='message' ref={messageRef} required className='border-2 border-purple-600 outline-none focus-within:outline-none w-[270px] h-10' />
                <button className='w-[100px] bg-purple-600 text-white font-mono font-semibold text-xl border border-white'>Send</button>
              </form>
            </div>
          </div>
        )
        : (<div className='h-64 w-64 flex flex-col bg-white items-center justify-center shadow-2xl rounded-sm space-y-2'>
          <form className='flex flex-col space-y-1' onSubmit={userHandler}>
            <input type='text' name='username' autoComplete="off"
              className='outline-none focus:outline-none border-b border-gray-600 focus-within:border-purple-600 focus-within:border-b-2 transition-all h-8' placeholder='New Username' ref={userRef} />
            {inputAlert && <h1 className='font-mono text-sm text-red-500 transition-all duration-300'>Username already taken!</h1>}
            <button className='bg-purple-600 text-white w-56 h-7 rounded-sm'>{inputUI
              ? (<svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-center ml-24 transition-all duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>)
              : "Enter"}</button>
          </form>
          <form className='flex-col flex space-y-1' onSubmit={receiverHandler}>
            <input type='text' name='receiver' autoComplete="off" placeholder='Find by Username'
              className='outline-none focus:outline-none border-b border-gray-600 focus-within:border-purple-600 focus-within:border-b-2 transition-all h-8' ref={receiverRef} />
            {inputUI2 && <h1 className='font-mono text-sm text-red-500 transition-all duration-300'>User not Found!</h1>}
            <button className={`bg-purple-600 text-white w-56 h-7 rounded-sm  ${inputAlert2 && 'bg-green-500'}`}>{(inputAlert2 ? 'User matched successfully!' : 'Search')}</button>

          </form>
          {inputAlert2 && <button className='w-full h-full text-purple-700 font-semibold font-mono bg-gray-200 active:animate-ping ' onClick={() => setMessageDisplay(true)}>
            Start messaging</button>}
        </div>)}
      <div className='absolute right-10 bottom-10 cursor-pointer group hidden md:flex'>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white group-hover:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <video className=' shadow-2xl hidden group-hover:flex border-2 border-white' controls style={{ width: '500px', height: '290px' }}>
        <source src="/chat-app.mp4" />
      </video>
      </div>
    </div>
  )
}
