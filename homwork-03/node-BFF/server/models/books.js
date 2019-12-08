import safeRequest from '../utils/safeRequest';

class Book {
  constructor(app) {}

  // 首页图书列表
  getIndexData () {
    const book = new safeRequest({
      url: '/index'
    });

    return book.fetch();
  }

  // 获取图书信息
  getBookData (id) {
    const book = new safeRequest({
      url: '/view&id=' + id
    });

    return book.fetch();
  }

  // 添加图书
  addBook (body) {
    const book = new safeRequest({
      url: '/create'
    });

    return book.fetch('POST',body);
  }

  // 更新图书
  updateBookData (id, body) {
    const book = new safeRequest({
      url: '/update&id=' + id
    });
    return book.fetch('POST',body);
  }

  // 删除图书
  delBook (id) {
    const book = new safeRequest({
      url: '/delete&id=' + id
    });
    return book.fetch('POST');
  }
}

export default Book;