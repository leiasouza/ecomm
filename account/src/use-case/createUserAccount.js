let contas = []

export function createUserUseCase(nome, email, senha) {
const dataAtualFormatada = new Date().toISOString().substring(0, 10)  
const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdData: dataAtualFormatada

}
    contas.push(user)
    return user
}