let contas = []

export function creatUserUseCase(nome, email, senha) {
    
const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdData: new Intl.DateTimeFormat('en-US', { dateStyle: 'short'}).format(),

}
    contas.push(user)
    return user
}