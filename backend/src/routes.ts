import { Router, Request, Response } from "express";
import { UserController } from "./controllers/user/UserController";
import { EnderecoController } from "./controllers/endereco/EnderecoController";
import { AuthUserController } from "./controllers/user/AuthUserController";
import { ProductController } from "./controllers/produto/ProductController";
import { CategoryController } from "./controllers/category/CategoryController";
import { ListProductsController } from "./controllers/produto/ListProductsController";
import { DetailUserController } from "./controllers/user/DetailUserController";
import {checkAuthentication} from "./middlewares/checkAuthentication"
import { ListCategoryController } from "./controllers/category/ListCategoriesController";
import { CarrinhoController } from "./controllers/carrinho/CarrinhoController";
import { AddItemController } from "./controllers/carrinho/AddItemController";
import { ListCarrinhoController } from "./controllers/carrinho/ListCarrinhoController";
import { EmpresaController } from "./controllers/empresa/EmpresaController";
import { ListEmpresaController } from "./controllers/empresa/ListEmpresaController";
import { FindProductController } from "./controllers/produto/FindProductController";



const router = Router()

//user routes
router.post('/users', new UserController().handleUser)
router.post('/login', new AuthUserController().handle)
router.get('/user',checkAuthentication, new DetailUserController().handle)

//endereco routes
router.post('/enderecos', new EnderecoController().handleEndereco)


//produto routes
router.post('/produtos', checkAuthentication, new ProductController().handleProduct)
router.get('/produtos/all', new ListProductsController().handleProducts )
router.get('/produtos/:id',new FindProductController().handleProduct)


//categoria routes
router.post('/categorias',checkAuthentication, new CategoryController().handleCategory)
router.get('/categorias/all', checkAuthentication, new ListCategoryController().handle)

//carrinho routes
router.post('/carrinho',checkAuthentication, new CarrinhoController().handleCarrinho)
router.post('/carrinho/add', checkAuthentication, new AddItemController().handleAddItem)
router.get('/carrinho/all/:id', checkAuthentication, new ListCarrinhoController().handleListCarrinho )


//empresa routes
router.post('/empresa',checkAuthentication, new EmpresaController().handleEmpresa)
router.get('/empresas/:id',checkAuthentication, new ListEmpresaController().handleListEmpresa)

export {router}