import  bcrypt from 'bcryptjs';

export async function comparePassword(password, passwordHash){
    const isMatch = await bcrypt.compare(password, passwordHash);
    
    return isMatch;
}