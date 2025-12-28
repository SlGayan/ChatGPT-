import './App.css';
import gptLogo from './assets/chatgpt.svg';
import addBtn from './assets/add-30.png'
import msgIcon from  './assets/message.svg'
import home from './assets/home.svg'
import saved from './assets/bookmark.svg'
import rocket from './assets/rocket.svg'
import sendBtn from "./assets/send.svg"
import gptImgLogo from "./assets/chatgptLogo.svg"
import userIcon from "./assets/user-icon.png"

function App() {
  return (
   <div className="App">
    <div className='sideBar'>
      <div className="upperSide">
        <div className="upperSideTop"><img src={gptLogo} alt="Logo" className='logo' /><span className='brand'>ChatGPT</span></div>
        <button className="midBtn"><img src={addBtn} alt="" className="addBtn" />New Chat</button>
        <div className="upperSideBottom">
          <button className="query"><img src={msgIcon} alt="Query" />What Is Programming ?</button>
          <button className="query"><img src={msgIcon} alt="Query" />How to use an API ?</button>

        </div>
      </div>
      <div className="lowerSide">
        <div className="listItems"><img src={home} alt="home" className="listitemsImg" />Home</div>
        <div className="listItems"><img src={saved} alt="saved" className="listitemsImg" />Save</div>
        <div className="listItems"><img src={rocket} alt="Upgrade" className="listitemsImg" />Upgrade to Pro</div>

      </div>
    </div>
    <div className='main'>
      <div className="chats">
        <div className="chat">
          <img className='chatImg' src={userIcon} alt="" /><p className="txt">Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem commodi</p>
        </div>
        <div className="chat bot">
          <img className='chatImg' src={gptImgLogo} alt="" /><p className="txt">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam, consequatur ullam distinctio est temporibus minus explicabo nesciunt unde maiores quibusdam, earum ad fugit praesentium odit quaerat ex id. Molestiae dolores, dignissimos veritatis accusamus hic odio adipisci ratione. Quis, est praesentium, placeat voluptatem blanditiis iste dolores beatae unde aliquid assumenda numquam inventore dicta? Dolorum labore impedit nisi at illo, enim deleniti laborum architecto voluptatibus repellendus numquam culpa ipsum. Sed veniam corporis ab, inventore quibusdam delectus illum ipsum quas doloribus, hic ratione nobis. Quos impedit doloribus, labore illum autem accusamus eligendi modi laboriosam, nesciunt omnis, minus voluptatem corrupti sit consequatur. Impedit, culpa.</p>
        </div>
      </div>
      <div className="chatFooter">
        <div className="inp">
          <input type="text" placeholder='Send a message...' />
          <button className="send"><img src={sendBtn} alt="Send" /></button>
        </div>
        <p>chatgpt</p>
      </div>

    </div>
    
   </div>
  );
}

export default App;
