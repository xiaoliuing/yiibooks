import Book from '../models/books';

class BooksController {
  constructor() {}

  async actionIndex(ctx) {
    const book = new Book();
    const res = await book.getIndexData();
    ctx.body = await ctx.render('books/home', {
      body: res.data
    });
  }

  async actionView(ctx) {
    const book = new Book();
    const res = await book.getBookData(ctx.params.id);
    ctx.body = await ctx.render('books/view', {
      book: res.data.data
    });
  }

  async actionUpdate(ctx) {
    const book = new Book();
    if(ctx.request.method === 'GET') {
      const res = await book.getBookData(ctx.params.id);
      ctx.body = await ctx.render('books/update', {
        book: res.data.data
      });
      return;
    }
    const data = ctx.request.body;
    console.log(ctx.request.body, ctx.params.id);
    const res = await book.updateBookData(ctx.params.id, {
      'Ybooks[b_name]': data.b_name,
      'Ybooks[b_autor]': data.b_autor,
      'Ybooks[b_price]': data.b_price,
    });
    ctx.body = res;
  }

  async actionCreate(ctx) {
    if(ctx.request.method === 'GET') {
      ctx.body = await ctx.render('books/add');
      return;
    }
    const book = new Book();
    const data = ctx.request.body;
    const res = await book.addBook({
      'Ybooks[b_name]': data.b_name,
      'Ybooks[b_autor]': data.b_autor,
      'Ybooks[b_price]': data.b_price,
    });
    ctx.body = res;
  }

  async actionDel(ctx) {
    const book = new Book();
    const res = await book.delBook(ctx.params.id);
    res.code == '0' && res.data.error_id == '0' && ctx.response.redirect('/home')
  }
}

export default BooksController;