import jwt from 'jsonwebtoken'

interface Payload {
  id: number
  email: string
}

//payload são as informações que enviamos do nosso usuário
export const generateToken = (payload: Payload) => {


    //O método sign de jwt retorna o token JWT
    //enviamos as informações de usuário (payload)
    // o nosso secret
    //e a infrmação de quando expira 
  return jwt.sign(payload, process.env.JWT_SECRET!, 
    {expiresIn: Number(process.env.JWT_EXPIRES_IN)
  })
}
export const verifyToken= (token:string)=>{ 
    try{
        // valida o token que estamos passando
        // se for válido, retorna as informações decodificadas do payload (id, email)
        return jwt.verify(token, process.env.JWT_SECRET!)
    }catch(err:any){
        // se não for válido, retorna nulo
        return null
    }
  }
  
