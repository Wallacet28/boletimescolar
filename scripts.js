document.addEventListener('DOMContentLoaded', function () {
    // Validação do formulário de inserir notas (Professor)
    const formInserirNotas = document.getElementById('inserirNotasForm');
    if (formInserirNotas) {
        formInserirNotas.addEventListener('submit', function (event) {
            event.preventDefault();
            if (formInserirNotas.checkValidity()) {
                const nomeAluno = document.getElementById('nomeAluno').value;
                const disciplina = document.getElementById('disciplina').value;
                const nota = document.getElementById('nota').value;

                document.getElementById('mensagemNota').innerHTML = `
                    <div class="alert alert-success">
                        Nota de ${nota} para ${nomeAluno} em ${disciplina} salva com sucesso!
                    </div>
                `;
            }
            formInserirNotas.classList.add('was-validated');
        }, false);
    }

    // Validação do formulário de consultar notas (Aluno)
    const formConsultaNotas = document.getElementById('consultaNotasForm');
    if (formConsultaNotas) {
        formConsultaNotas.addEventListener('submit', function (event) {
            event.preventDefault();
            if (formConsultaNotas.checkValidity()) {
                const matricula = document.getElementById('matricula').value;
                const senha = document.getElementById('senha').value;

                if (matricula === "12345" && senha === "senha123") {
                    document.getElementById('resultadoNotas').innerHTML = `
                        <div class="alert alert-success">
                            <h4>Notas do Aluno</h4>
                            <ul>
                                <li>Matemática: 8.5</li>
                                <li>Português: 9.0</li>
                                <li>História: 7.5</li>
                            </ul>
                        </div>
                    `;
                } else {
                    document.getElementById('resultadoNotas').innerHTML = `
                        <div class="alert alert-danger">
                            Matrícula ou senha incorretos.
                        </div>
                    `;
                }
            }
            formConsultaNotas.classList.add('was-validated');
        }, false);
    }

    // Validação do formulário de gerar relatório (Coordenador)
    const formGerarRelatorio = document.getElementById('gerarRelatorioForm');
    if (formGerarRelatorio) {
        formGerarRelatorio.addEventListener('submit', function (event) {
            event.preventDefault();
            if (formGerarRelatorio.checkValidity()) {
                const turma = document.getElementById('turma').value;
                const periodo = document.getElementById('periodo').value;

                document.getElementById('mensagemRelatorio').innerHTML = `
                    <div class="alert alert-success">
                        Relatório da turma ${turma} para o período ${periodo} gerado com sucesso!
                    </div>
                `;
            }
            formGerarRelatorio.classList.add('was-validated');
        }, false);
    }

    // Validação do formulário de cadastrar usuário (Administrador)
    const formCadastrarUsuario = document.getElementById('cadastrarUsuarioForm');
    if (formCadastrarUsuario) {
        formCadastrarUsuario.addEventListener('submit', function (event) {
            event.preventDefault();
            if (formCadastrarUsuario.checkValidity()) {
                const nomeUsuario = document.getElementById('nomeUsuario').value;
                const emailUsuario = document.getElementById('emailUsuario').value;

                document.getElementById('mensagemUsuario').innerHTML = `
                    <div class="alert alert-success">
                        Usuário ${nomeUsuario} (${emailUsuario}) cadastrado com sucesso!
                    </div>
                `;
            }
            formCadastrarUsuario.classList.add('was-validated');
        }, false);
    }

    // Validação do formulário de cadastrar aluno (Secretário)
    const formCadastrarAluno = document.getElementById('cadastrarAlunoForm');
    if (formCadastrarAluno) {
        formCadastrarAluno.addEventListener('submit', function (event) {
            event.preventDefault();
            if (formCadastrarAluno.checkValidity()) {
                const nomeAluno = document.getElementById('nomeAluno').value;
                const matriculaAluno = document.getElementById('matriculaAluno').value;

                document.getElementById('mensagemAluno').innerHTML = `
                    <div class="alert alert-success">
                        Aluno ${nomeAluno} (Matrícula: ${matriculaAluno}) cadastrado com sucesso!
                    </div>
                `;
            }
            formCadastrarAluno.classList.add('was-validated');
        }, false);
    }
});