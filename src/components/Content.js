import React, { useState } from 'react';
import styles from './Content.module.css'

function Content(){

    // Estado das tarefas, começando vazio
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState('');

    // Função para adicionar uma nova tarefa
    const addTask = () => {
        if (newTask.trim()) {
            const newTaskObj = { id: Date.now(), text: newTask, completed: false };
            setTasks([...tasks, newTaskObj]);
            setNewTask('');  // Limpa o campo de texto após adicionar a tarefa
        }
    };

    // Função para marcar/desmarcar a tarefa como concluída
    const taskStatus = (taskId) => {
        setTasks(tasks.map(task =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
        ));
    };

    // Função para excluir uma tarefa
    const deleteTask = (taskId) => {
        if (window.confirm('Tem certeza que deseja excluir esta tarefa?')) {
        setTasks(tasks.filter(task => task.id !== taskId));
        }
    };

    // Função para editar uma tarefa
    const editTask = (taskId) => {
        const newTaskText = prompt("Digite o novo texto da tarefa:");
        if (newTaskText) {
            setTasks(tasks.map(task =>
                task.id === taskId ? { ...task, text: newTaskText } : task
            ));
        }
    };

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
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => taskStatus(task.id)}
                        />
                        {task.text}

                        {/* Botão para editar a tarefa */}
                        <button onClick={() => editTask(task.id)}>Editar</button>

                        {/* Botão para excluir a tarefa */}
                        <button onClick={() => deleteTask(task.id)}>Excluir</button>
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
                />
                <button onClick={addTask}>+</button>
            </div>
        </div>
    )
}

export default Content
