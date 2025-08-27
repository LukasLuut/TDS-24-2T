import { Request, Response, NextFunction } from 'express'
import { verifyToken } from '../utils/jwt'

// Middleware para proteger rotas que exigem autenticação
export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  // Pega o header de autorização da requisição
  const authHeader = req.headers.authorization

  // Se não houver header ou ele não começar com "Bearer ", retorna erro 401 (não autorizado)
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Token não fornecido' })
  }

  // Extrai o token do header (remove o "Bearer " antes)
  const token = authHeader.split(' ')[1]

  // Verifica se o token é válido chamando a função verifyToken
  // Retorna o payload decodificado se válido, ou null se inválido/expirado
  const decoded = verifyToken(token)

  // Se o token for inválido, retorna erro 401
  if (!decoded) {
    return res.status(401).json({ message: 'Token inválido' })
  }

  // Armazena o payload decodificado no req para que outros middlewares ou controllers possam acessar
  // Ex.: req.user terá id e email do usuário logado
  // o tipo request não tem a propriedade .user definida
  // se tentarmos fazer req.user = ... o typescript vai acusar erro
  // para enganar o typescript, usamos um type assertion (as any)
  // Type assertation força o compilador a tratar um valor como se fosse de outro tipo
  //isso diz: "confie em mim, trate req como any(sem checar tipo)"
  // em '.user' estamos criando estão uma nova propriedade chamada 'user' dentro do objeto 'req'
  // decoded e o payload que saiu do verifyToken na linha 19
  // req.user pode ser usado mais tarde para:
  //- Saber que está logado. exemplo: /me retorna os dados do usuário logado usando req.user.id.
  //- verificar permissões. exemplo: só um usuário com role: "admin" pode acessar certas rotas: if (req.user.role !== "admin") return res.status
  //Para associar recursos ao usuário logado. exemplo: criar um post automaticamente ligado ao req.user.id. não precisa mandar userId

  (req as any).user = decoded

  // Chama o próximo middleware ou controller
  next()
}
