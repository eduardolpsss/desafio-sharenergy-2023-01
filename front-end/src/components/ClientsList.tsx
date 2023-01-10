import React, { Component, useState, useEffect } from 'react';
// Importando o Axios para fazer a requisição da API
import axios from "axios";
// Importando os componentes do PrimeReact
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
// Importando o CSS do Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// Importando o CSS do PrimeReact
import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import ProjectNavbar from "./Navbar";
import api from '../services/api';

interface iClient {
    _id: string;
    name: string;
    email: string;
    telephone: string;
    address: string;
    cpf: string;
}

function ClientsList() {

    // Criando o estado para armazenar os dados da API
    const [clientsData, setClientsData] = useState<iClient[]>([]);
    const [id, setId] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [telephone, setTelephone] = useState('');
    const [address, setAddress] = useState('');
    const [cpf, setCpf] = useState('');
    const [tableFilters, setTableFilters] = useState({ global: { value: '', matchMode: FilterMatchMode.CONTAINS } });
    const [editing, setEditing] = useState(false);

    // Função para enviar os dados do formulário para a API
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        if(!editing) {
            const res = await fetch('http://localhost:3333/client', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    telephone,
                    address,
                    cpf
                })
            });
            alert('Cliente cadastrado com sucesso!');
            const data = await res.json();
        } else {
            const res = await fetch(`http://localhost:3333/client/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    name,
                    email,
                    telephone,
                    address,
                    cpf
                })
            });
            alert('Cliente atualizado com sucesso!');
            const data = await res.json();

            setEditing(false);
        }

        // Atualizando a tabela
        loadClients();

        // Limpando o formulário
        clearForm();
    }

    // Função para limpar os campos do formulário
    const clearForm = () => {
        setName('');
        setEmail('');
        setTelephone('');
        setAddress('');
        setCpf('');
    }

    // Função para carregar os dados da API
    const loadClients = async () => {
        const res = await fetch('http://localhost:3333/clients');
        const data = await res.json();
        setClientsData(data);
    }

    // Função para carregar os dados da API
    useEffect(() => {
        loadClients();
    }, []);

    // Função para deletar um cliente
    const handleDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
        const userResponse = window.confirm('Tem certeza que deseja deletar este cliente?');
        if (userResponse) {
            const { value } = event.currentTarget;
            axios.delete(`http://localhost:3333/client/${value}`)
                .then(response => {
                    alert(response.data.message);

                    // Atualizando a tabela
                    loadClients();
                })
        }
        
    }

    const handleEdit = async (event: React.MouseEvent<HTMLButtonElement>) => {
        alert('Você pode editar os dados utilizando o formulário de cadastro.')
        const { value } = event.currentTarget;
        const res = await fetch(`http://localhost:3333/client/${value}`);
        const data = await res.json();

        setEditing(true);
        setId(data._id);
        setName(data.name);
        setEmail(data.email);
        setTelephone(data.telephone);
        setAddress(data.address);
        setCpf(data.cpf);
    }

    // Fazendo mapeamento dos dados da API para a tabela
    const dataTableValue = clientsData.map((client) => {
        return {
            id: client._id,
            name: client.name,
            email: client.email,
            telephone: client.telephone,
            address: client.address,
            cpf: client.cpf
        }
    });

    // Template dos botões de ação da tabela
    const actionBodyTemplate = (rowData: any) => {
        return (
            <React.Fragment>
                <button type="button" value={rowData.id} className="btn btn-secondary btn-sm" onClick={handleEdit} style={{ marginRight: '5px' }}>Edit</button>
                <button type="button" value={rowData.id} className="btn btn-danger btn-sm" onClick={handleDelete}>Delete</button>
            </React.Fragment>
        );
    }

    return (
        <div className="container">

            <ProjectNavbar />

            <div className="container"
                style={{
                    marginTop: 30
                }}  
            >
                <p>CRDU de cadastro de clientes com view do banco de dados Mongo.</p>
            </div>

            {/* Registration Form */}
            <div className="d-flex justify-content-center" style={{ paddingTop: '50px' }}>
                <div className="col-flex d-flex justify-content-center">
                    <div className="card" style={{ width: '20rem', boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>    
                        <div className="card-header">
                            <h5 className="card-title text-center">Clients registration form</h5>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <small id="nameHelp" className="form-text text-muted">You can register data using the fields bellow.</small>
                                    <label htmlFor="recipient-name" className="form-control-label">Name</label>
                                    <input type="text" className="form-control" id="name" onChange={e => setName(e.target.value)} value={name} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email" className="form-control-label">E-mail</label>
                                    <input type="email" className="form-control" id="email" onChange={e => setEmail(e.target.value)} value={email} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="mrecipient-telephone" className="form-control-label">Telephone</label>
                                    <input type="text" className="form-control" id="telephone" onChange={e => setTelephone(e.target.value)} value={telephone} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-address" className="form-control-label">Address</label>
                                    <input type="text" className="form-control" id="address"onChange={e => setAddress(e.target.value)} value={address} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="recipient-cpf" className="form-control-label">CPF</label>
                                    <input type="text" className="form-control" id="CPF" onChange={e => setCpf(e.target.value)} value={cpf} />
                                </div>
                                <div className='d-flex justify-content-center '>
                                    {
                                        editing ? (
                                            <button className="btn btn-primary btn-block" type="submit">Edit</button>
                                        ) : (
                                            <button className="btn btn-primary btn-block" type='submit'>Register</button>
                                        )
                                    }
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                {/* End of registration form */}

                {/* Clients table */}
                <div className="col-8 d-flex justify-content-center">
                    
                    <div className="card" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                        <div className="card-header">
                            <h5 className="card-title text-center">Clients list</h5>
                        </div>

                        <div className="card-body">

                            {/* Searchbar */}
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'end',
                                }}
                            >
                                <InputText
                                onInput={(e) => 
                                    setTableFilters({
                                        global: {
                                            value: (e.target as HTMLInputElement).value,
                                            matchMode: FilterMatchMode.CONTAINS
                                        }
                                    }
                                )}

                                placeholder="Pesquisar clientes..."
                                style={{ width: '30%', marginBottom: 20 }}
                                />
                            </div>

                            {/* Table */}
                            <DataTable value={dataTableValue} rowHover filters={tableFilters} paginator paginatorLeft rows={10} rowsPerPageOptions={[10, 20, 30, 40, 50]} totalRecords={5}>
                                <Column field="name" header="Name" />
                                <Column field="email" header="E-mail" />
                                <Column field="telephone" header="Telephone" />
                                <Column field="address" header="Address" />
                                <Column field="cpf" header="CPF" />
                                <Column header="Actions" body={actionBodyTemplate} />
                            </DataTable>
                        </div>
                    </div>
                </div>
            </div>
            {/* End clients table */}
        </div>
    )
}

export default ClientsList;