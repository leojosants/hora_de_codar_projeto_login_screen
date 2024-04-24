import {
    FaUser, FaLock
} from 'react-icons/fa';

import {
    useState
} from 'react';

import './LoginComponent.css';

const LoginComponent = () => {
    const [
        username, setUsername
    ] = useState('');

    const [
        password, setPassword
    ] = useState('');

    const clearInput = () => {
        setUsername('');
        setPassword('');
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const isUsernameEmpty = (username.length === 0);
        const isPasswordEmpty = (password.length === 0);

        if (isUsernameEmpty || isPasswordEmpty) {
            alert('Existem campo(s) vazio(s), favor preencher!');
            return;
        }

        alert('Dados enviados');
        clearInput();
    };

    return (
        <div className='class-container'>
            <form onSubmit={handleSubmit}>
                <h1>
                    Acesse o sistema
                </h1>

                <div className='class-input-field'>
                    <input
                        type='email'
                        placeholder='email@email.com'
                        onChange={(event) => setUsername(event.target.value)}
                        value={username}
                    />
                    <FaUser className='class-icon' />
                </div>

                <div className='class-input-field'>
                    <input
                        type='password'
                        placeholder='Digite a senha...'
                        onChange={(event) => setPassword(event.target.value)}
                        value={password}
                    />
                    <FaLock className='class-icon' />
                </div>

                <div className='class-recall-forget'>
                    <label>
                        <input type='checkbox' />
                        Lembre de mim
                    </label>
                    <a href="#"> Esqueceu a senha?</a>
                </div>

                <button>
                    Entrar
                </button>

                <div className="class-signup-link">
                    <p>
                        Não tem uma conta?
                        <a href="#"> Registrar</a>
                    </p>
                </div>
            </form>
        </div>
    );
};

export default LoginComponent;