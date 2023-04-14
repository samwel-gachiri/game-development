
function Message(){
    const name = "welcome";
    if (name)
        return (<h1>Hello {name}</h1>);
    else 
        return <h1>What is your name?</h1>
}

export default Message;