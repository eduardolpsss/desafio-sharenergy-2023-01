import React, { useState } from "react";

const LoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (username === '' || password === '') {
            alert('[API]: Você deve preencher todos os campos.');
            return;
        } else if (username === 'desafiosharenergy' && password === 'sh@r3n3rgy') {
            alert('[API]: Login efetuado com sucesso!');
            window.location.href = '/users-list';
        } else {
            alert('[API]: Username ou password inválidos.');

            // Limpando campos do formulário
            clearForm();
        }
    }

    const clearForm = () => {
        setUsername('');
        setPassword('');
    }

    return (
        <div className="container">
            {/* Begin Login Form */}
            <div className="d-flex justify-content-center" style={{ paddingTop: '50px' }}>
                <div className="col">
                </div>
                <div className="col">
                    <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>    
                        <img className="card-img-top" src="/images/logo_color.min-01-01.png" alt="Card cap" />
                        <div className="card-header">
                            <h5 className="card-title text-center">Desafio - processo seletivo SHARENERGY</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <small id="emailHelp" className="form-text text-muted">Você pode fazer login utilizando o username e a senha especificadas no README.md da aplicação ou em meu <a href='https://github.com/eduardolpsss/desafio-sharenergy-2023-01'>repositório GitHub</a>.</small>
                                    <br/>
                                    <label htmlFor="exampleInputEmail1">Username</label>
                                    <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username" onChange={e => setUsername(e.target.value)} value={username} />
                                    <small id="emailHelp" className="form-text text-muted">Nunca compartilharemos seu e-mail com ninguém.</small>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Enter password" onChange={e => setPassword(e.target.value)} value={password} />
                                </div>

                                <div className="form-check">
                                    <label className="form-check-label">
                                        <input type="checkbox" className="form-check-input" />
                                        <span>Lembre de mim</span>
                                    </label>
                                </div>

                                <button type="submit" className="btn btn-primary btn-block" style={{marginTop: 10}}>Login</button>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col">
                </div>
            </div>
        {/* End Login Form */}
        </div>
    )
};

export default LoginForm;