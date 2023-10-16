function Message() {
    const name = 'Ema';
    if (name)
    {
        return <h1>Hello {name}</h1> 
    }
    else {
        return <h1>Hello React</h1>
    }
   
}

export default Message;