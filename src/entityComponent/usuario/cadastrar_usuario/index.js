import React from 'react';
import './index.css'

const UsuarioView = (props) => {

    return (
        <>
            <div className={'main'}>
                <h2 className={'edit'}>Edit</h2>
                <div className={'userUpdate'}>
                    <div className={'inputChange'}>
                        <span>
                            <div>Name: </div>
                        </span>
                        <input placeholder="userName"
                               spellCheck="false"
                               value={props.user.name}
                               onChange={(event) =>
                               {props.inputUser('name', event)}}/>
                        <span>
                            <div>Email: </div>
                        </span>
                        <input placeholder="userEmail"
                               spellCheck="false"
                               value={props.user.email}
                               onChange={(event) =>
                               {props.inputUser('email', event)}}/>
                        <span>
                            <div>Password: </div>
                        </span>
                        <input placeholder="userPassword"
                               spellCheck="false"
                               value={props.user.password}
                               onChange={(event) =>
                               {props.inputUser('password', event)}}/>
                    </div>
                    <div className={'bntConfirm'}>
                        <button onClick={props.userChange}>confirm</button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default UsuarioView;
