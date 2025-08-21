// Importa tipos do Express para lidar com requisições e respostas
import { Request, Response } from 'express';

// Importa a instância do DataSource, que é a conexão com o banco
import { AppDataSource } from '../config/data-source';
import { Product } from '../models/Product';

export class ProductController {
    
    private productRepository = AppDataSource.getRepository(Product);
       
    list = async (req: Request, res: Response) => {
    

          const products = await this.productRepository.find({relations:['category']});
          return res.json(products);
    }
    
    // Método que cria um novo usuário
     create=async(req: Request, res: Response) => {
        // Pega os dados do corpo da requisição
        const { name, price } = req.body;

        // Cria um novo objeto User (ainda não salva no banco)
        // Ele cria um objeto da entidade User (é como se usássemos new User() etc etc., só que pronto para ser usado no próximo método - que salva no banco de dados)
        const product = this.productRepository.create({ name, price });

        // Salva o usuário no banco de dados
        await this.productRepository.save(product);

        // Retorna o usuário criado com status 201 (Created)
        return res.status(201).json(product);
    }
}