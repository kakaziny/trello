const tarefas = document.querySelectorAll(".tarefa")
const colunas = document.querySelectorAll(".coluna")

// Variável para armazenar a tarefa que está sendo arrastada
let tarefaArrastada = null

// Adiciona os ouvintes para cada tarefa
tarefas.forEach(tarefa => {
    tarefa.addEventListener("dragstart", iniciarArrasto)
    tarefa.addEventListener("dragend", finalizarArrasto)
})

colunas.forEach(coluna => {
    coluna.addEventListener("dragover", permitirSoltar)
    coluna.addEventListener("drop", soltarTarefa)
})

function iniciarArrasto(event){
    tarefaArrastada = this;
    this.classList.add("arrastando")
}

// Função para finalizar o arrasto da tarefa
function finalizarArrasto(event){
    this.classList.remove("arrastando")
}

// Função para permitir soltar a tarefa na coluna
function permitirSoltar(event){
    event.preventDefault();
}

//Função para soltar a tarefa na nova coluna
function soltarTarefa(event){
    event.preventDefault();
    //Verifica se tem uma tarefa sendo arrastada
    if(tarefaArrastada){
        this.querySelector(".tarefas").appendChild(tarefaArrastada)
        tarefaArrastada = null
    }
}

// Adiciona a função para adicionar novas tarefas
const formAdicionarTarefa = document.getElementById("adiconar-tarefa")

formAdicionarTarefa.addEventListener("submit", adicionarTarefa)

function adicionarTarefa(event){
    event.preventDefault()

    const novaTarefa = document.getElementById("nova-tarefa").value
    if (novaTarefa) {
        const novaTarefaLI = document.createElement("li");
        novaTarefaLI.innerHTML = novaTarefa
        novaTarefaLI.draggable = true
        novaTarefaLI.classList.add("tarefa")

        document.getElementById("tarefas-a-fazer").appendChild(novaTarefaLI)
        document.getElementById("nova-tarefa").value = ""

        novaTarefaLI.addEventListener("dragstart", iniciarArrasto)
        novaTarefaLI.addEventListener("dragend", finalizarArrasto)
    }
}