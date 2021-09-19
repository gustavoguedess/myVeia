import { Router } from "express";
import { CreateUserController } from "./controllers/CreateUserController";

const router = Router()

//Rota de login (precisa ativar o usuário e atualizar último login)

//Rota de pegar configuração
router.get('/users/:id', (req, res) => {});
//Rota ver usuários (parâmetro para identificar se quer retornar moradores inativos ou também exmoradores)
router.get('/users', (req, res) => {})
//Rota tirar Acesso Usuário (se transforma em exmorador)
router.delete('/users/:id', (req, res) => {});

//Rota de desativar Usuário
router.put('/users/:id/deactivate', (req, res) => {});
//Rota de salvar configuração
router.put('/users/:id', (req, res) => {});


//Rota de Curtir Usuário
router.put('/users/:id/like/:idTarget', (req, res) => {});
//Rota de Ver Próximo Usuário
router.get('/users/:id/next_user', (req, res) => {});


//Rota checar Admin
router.get('/users/check_admin/:id', (req, res) => {});
//Rota criar usuários
const createUserController = new CreateUserController();
router.post('/users', createUserController.handle);
//Rota dar Admin
router.put('/users/admin/:id', (req, res) => {});
//Rota remover Admin
router.delete('/users/admin/:id', (req, res) => {});


export { router };