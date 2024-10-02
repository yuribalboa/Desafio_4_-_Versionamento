import React, { useState } from 'react';
import styles from './Content.module.css';
import {ReactComponent as EditIcon} from '../assets/edit.svg';
import {ReactComponent as DeleteIcon} from '../assets/delete.svg';

function Content(){

    // Estado das tarefas, começando vazio
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');
    const [newText, setNewText] = useState('');
    const [showModalEdit, setShowModalEdit] = useState(false);
    const [showModalDelete, setShowModalDelete] = useState(false);
    const [taskToEdit, setTaskToEdit] = useState(null);

    // Função para adicionar uma nova tarefa
    const addTask = () => {
        if (newTask.trim()) {
            const newTaskObj = { id: Date.now(), text: newTask, completed: false };
            setTasks([...tasks, newTaskObj]);
            setNewTask('');  // Limpa o campo de texto após adicionar a tarefa
        }
    };

    // Função para detectar o pressionamento da tecla Enter
    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
        addTask(); // Chama a função de adicionar tarefa ao pressionar Enter
        }
    };

    // Função para marcar/desmarcar a tarefa como concluída
    const taskStatus = (taskId) => {
        setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    // Função para abrir o modal para edição
    const openEdit = (task) => {
        setTaskToEdit(task);
        setShowModalEdit(true);
    };

    // Função para abrir o modal para deletar
    const openDelete = (task) => {
        setTaskToEdit(task);
        setShowModalDelete(true);
    };

    // Função para fechar o modal
    const closeModal = () => {
        setShowModalEdit(false);
        setShowModalDelete(false);
        setNewText('');
        setTaskToEdit(null);
    };

    // Função de confirmação de edição
    const editConfirm = () => {
        editTask(taskToEdit, newText);
        closeModal();
    };

    // Função de confirmação de exclusão
    const deleteConfirm = () => {
            deleteTask(taskToEdit);
            closeModal();
    };

    // Função para excluir uma tarefa
    const deleteTask = (taskId) => {
        setTasks(tasks.filter(task => task.id !== taskId));
    };
    
    // Função para editar uma tarefa
    const editTask = (taskId, newTaskText) => {
        if (newTaskText) {
            setTasks(tasks.map(task =>
                task.id === taskId ? { ...task, text: newTaskText } : task
            ));
        }
    };
    
    function ConfirmationModalEdit() {
        return (
            <div className={styles.modalBox}>
                <h1>Deseja editar esse item?</h1>
                <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                    placeholder='Colocar as descrições das tarefas aqui.'
                />
                <div className={styles.modalButton}>
                    <button onClick={closeModal} className={styles.buttonNo}>Não</button>
                    <button onClick={editConfirm} className={styles.buttonYes}>Sim</button>
                </div>
            </div>
        );
    }

    function ConfirmationModalDelete() {
        return (
            <div className={styles.modalBox}>
                <h1>Deseja excluir esse item?</h1>
                <p>Colocar as descrições das tarefas aqui.</p>
                <div className={styles.modalButton}>
                    <button onClick={closeModal} className={styles.buttonNo}>Não</button>
                    <button onClick={deleteConfirm} className={styles.buttonYes}>Sim</button>
                </div>
            </div>
        );
    }


    if(!showModalEdit && !showModalDelete){
        return(
            <div className={styles.body}>
                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
                <div className={styles.titles}>
                    <h2>Tarefa</h2>
                    <h2>Status</h2>
                    <h2>Opções</h2>
                </div>
                <div className={styles.rectangle}></div>
    
                <ul>
                    {tasks.length > 0 ? (
                        tasks.map(task => (
                            <li key={task.id} className={task.completed ? 'completed' : ''}>
                                <div style={{ width: '280px', minHeight:'35px', wordWrap: 'break-word', whiteSpace: 'normal'}}>
                                    {task.text}
                                </div>
                               
                               <div style={{ minHeight:'35px', alignContent:'center'}}>
                                    <input
                                        type="checkbox"
                                        style={{ width: '20px', height:'20px'}}
                                        checked={task.completed}
                                        onChange={() => taskStatus(task.id)}
                                    />
                               </div>
    
                                <div style={{ width: '260px', minHeight:'35px', alignContent:'center'}}>
                                    {/* Botão para editar a tarefa */}
                                    <button style={{ paddingLeft: '190px', border:'none', color:'#FFFFFF', backgroundColor: '#2d2d2d' }} onClick={() => openEdit(task.id)}><EditIcon/></button>
    
                                    {/* Botão para excluir a tarefa */}
                                    <button style={{ pading: '0px', border:'none', color:'#FFFFFF', backgroundColor: '#2d2d2d' }} onClick={() => openDelete(task.id)}><DeleteIcon/></button>
    
                                </div>
                            </li>
                        ))
                    ) : (
                        <p style={
                            {fontFamily: 'Raleway', fontSize: '25px', fontWeight: '400', lineHeight: '29.35px', textAlign: 'center', padding:'0px'}
                        }>Nenhuma tarefa adicionada ainda.</p>
                    )}
                </ul>
    
                <div className={styles.addTask}>
                    <input
                        type="text"
                        value={newTask}
                        onChange={(e) => setNewTask(e.target.value)}
                        placeholder="Nova tarefa..."
                        onKeyDown={handleKeyPress}  // Detecta quando a tecla Enter é pressionada
                    />
                    <button onClick={addTask}>+</button>
                </div>
            </div>
    )}

    if(showModalEdit){
        return(
            <div className={styles.body}>
                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>           
                <ConfirmationModalEdit/>
            </div>
        )
    }

    if(showModalDelete){
        return(
            <div className={styles.body}>
                <h1>Otimize seu tempo e se organize com o nosso Planejador Diário.</h1>
                <ConfirmationModalDelete/>
            </div>
        )
    }
    
}

export default Content
