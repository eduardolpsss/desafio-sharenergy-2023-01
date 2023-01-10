import React, { useState, useEffect } from "react";
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

// Interface para tipar os dados da API
interface iUser {
    picture: {
        large: string;
    };
    name: {
        first: string;
        last: string;
    };
    email: string;
    login: {
        username: string;
    };
    dob: {
        age: number;
    };
}

function UsersListTable() {
    const [userData, setUserData] = useState<iUser[]>([]);
    const [loading , setLoading] = useState(true);
    const [tableFilters, setTableFilters] = useState({ global: { value: '', matchMode: FilterMatchMode.CONTAINS } });

    // Fetching data from an API using Axios
    const getUsersData = async () => {
        try {
            const response = await axios.get("https://randomuser.me/api/?results=150");
            setUserData(response.data.results);
            setLoading(false);
        }
        catch (error) {
            setLoading(true);
            console.log(error);
        }
    }

    useEffect(() => {
        getUsersData();
    }, []);

    // Mapeando os dados da API para a tabela
    const dataTableValue = userData.map((user) => {
        return {
            picture: user.picture.large,
            name: user.name.first + " " + user.name.last,
            email: user.email,
            username: user.login.username,
            age: user.dob.age,
        }
    });

    return (
        <div className="container">
            
            <ProjectNavbar/>

            <div className="container"
                style={{
                    marginTop: 30
                }}  
                >

                <p>Listagem de usuários gerada a partir da API <a href="https://randomuser.me/" target='_blank'>Random User Generator</a> a tabela possui busca, filtro e paginação.</p>

                {/* Render da tabela com loading, searchbar e pagination */}
                {loading ? (
                    <div className="d-flex justify-content-center" style={{ marginTop: 50}}>
                        <div className="spinner-border" role="status">
                            <span className="sr-only">Loading...</span>
                        </div>
                    </div>
                ) : (
                    <div style={{ marginTop: 50}}>

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

                            placeholder="Pesquisar por nome, e-mail ou username..."
                            style={{ width: '30%', marginBottom: 20 }}
                            />
                        </div>
                        
                        {/* Tabela */}
                        <DataTable value={dataTableValue} rowHover filters={tableFilters} paginator paginatorLeft rows={10} rowsPerPageOptions={[10, 20, 30, 40, 50]} totalRecords={5}>
                            <Column field="picture" header="Foto do usuário" body={rowData => <img className="rounded-circle" src={rowData.picture} alt="Foto do usuário" style={{ width: '5rem'}}/>} />
                            <Column field="name" header="Nome completo" sortable/>
                            <Column field="email" header="E-mail"/>
                            <Column field="username" header="Username"/>
                            <Column field="age" header="Idade" />
                        </DataTable>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UsersListTable;