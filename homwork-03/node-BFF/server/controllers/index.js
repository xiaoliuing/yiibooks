import BooksController from './BooksController';
const booksController = new BooksController();

export default (router) => {
  router.get('/', booksController.actionIndex);
  router.get('/home', booksController.actionIndex);
  router.get('/view/:id', booksController.actionView);
  router.get('/add', booksController.actionCreate);
  router.post('/add', booksController.actionCreate);
  router.get('/update/:id', booksController.actionUpdate);
  router.post('/update/:id', booksController.actionUpdate);
  router.get('/del/:id', booksController.actionDel);
}