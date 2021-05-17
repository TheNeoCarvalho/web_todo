
import React, { useEffect, useState} from 'react';
import Modal from 'react-modal';
import './App.css';

function App() {

  const [modalIsOpen, setIsOpen] = useState(false);
  const [title, setTitle] = useState('');
  const [tasks, setTasks] = useState([]);
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');
  const [token, setToken] = useState('');
  



  useEffect( () => {

        const token = localStorage.getItem('token')
        function get() {
          fetch('http://localhost:3001/tasks', {
            headers: {
              Authorization: token,
            }
          })
          .then(response => response.json())
          .then(data => console.log(data));
        } 
        get();

  },[tasks])


  function save(title) {

    const data = {
      title
    }

    fetch('http://localhost:3001/task', {
      headers: {
        'Content-Type': 'application/json'
    },
      method: 'post',
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(data => setTasks(...tasks, data))
  } 

  function login() {
    const data = {
      username: user,
      password: pass
    }
    fetch('http://localhost:3001/login', {
      headers: {
        'Content-Type': 'application/json'
    },
      method: 'post',
      body: JSON.stringify(data)
    }).then(resp => resp.json())
    .then(data => localStorage.setItem('token', JSON.stringify(data.token)))

  }

  function openModal() {
    setIsOpen(!modalIsOpen);
  }

  function closeModal(){
    setIsOpen(!modalIsOpen);
  }
  return (
    <div className="App">
      <div>
        <button onClick={openModal}>Open Modal</button>
        <Modal
          className="modal"
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
          <div className="modalHead">
            <h2>Todo</h2>
            <button className="closeButton" onClick={closeModal}>x</button>
          </div>
          <div>
            <div>I am a modal</div>
            <input onChange={user => setUser(user.target.value)} type="text" />
            <input onChange={pass => setPass(pass.target.value)} type="text" />
            <button onClick={login}>Enviar</button>
          </div>
        </Modal>
      </div>
    </div>
  );
}

export default App;
