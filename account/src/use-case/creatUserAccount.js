let contas = []

export function creatUserUseCase(nome, email, senha) {
    
const user = {
    id: contas.length + 1,
    name: nome,
    email: email,
    password: senha,
    createdData: new Date()

}
    contas.push(user)
    return user
}

creatUserUseCase("Josué Lima", 'josuelima@email', 'senhaDoJosue')
creatUserUseCase("Maria Lima", 'marialima@email', 'senhaDaMaria')

console.log("contas:", contas)