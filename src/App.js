import {ChatEngine} from 'react-chat-engine';
import './App.css';
import LoginForm from './components/LoginForm'
import ChatFeed from './components/ChatFeed';



const App = () => {
   if(!localStorage.getItem('username')) return <LoginForm/>
   
    return (
        <ChatEngine
            height="100vh"
            projectID="cb2d5d09-8d0c-4747-a8e4-37683f30c968"
            userName={localStorage.getItem('username')}
            userSecret={localStorage.getItem('password')}
            renderChatFeed={(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        />
    );

}

export default App;
