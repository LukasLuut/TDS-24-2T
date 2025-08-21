// Importa tipos do Express para lidar com requisições e respostas
import { Request, Response } from 'express';

// Importa a instância do DataSource, que é a conexão com o banco
import { AppDataSource } from '../config/data-source';
import { Category } from '../models/Category';


export class CategoryController {
    
    private categoryRepository = AppDataSource.getRepository(Category);
       
    list = async (req: Request, res: Response) => {
    

          const categories = await this.categoryRepository.find();
          return res.json(categories);
    }
    
    // Método que cria um novo usuário
    create = async(req: Request, res: Response) => {
    
        // Pega os dados do corpo da requisição
        const { name } = req.body;

        // Cria um novo objeto User (ainda não salva no banco)
        // Ele cria um objeto da entidade User (é como se usássemos new User() etc etc., só que pronto para ser usado no próximo método - que salva no banco de dados)
        const category = this.categoryRepository.create({ name });

        // Salva o usuário no banco de dados
        await this.categoryRepository.save(category);

        // Retorna o usuário criado com status 201 (Created)
        return res.status(201).json(category);
    }
}