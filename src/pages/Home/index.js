import { useEffect, useState } from 'react';
import api from '../../services/api';
import Livro from '../../components/Livro';
import './style.css';

export default function Home() {
    const [livros, setlivros] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getLivros() {
            const response = await api.get('r-api/?api=livros');
            setLivros(response.data);
            setLoading(false);
        }

        getLivros();
    }, []);

    if (loading) {
        return (
            <div className='container flex justify-content-center'>
                <h2>Carregando livros...</h2>
            </div>
        );
    }

    return (
        <div className='container mt-24 mb-24'>
            <div className='livro-list'>
                {livro.map((livro) => {
                    return (
                        <Livro
                            key={livro.id}
                            id={livro.id}
                            title={livro.nome}
                            poster={livro.foto}
                        />
                    );
                })}

                {livro.length === 0 && <h2>Não foram encontrados livros</h2>}
            </div>
        </div>
    );
}
