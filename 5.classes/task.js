class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      this.name = name;
      this.releaseDate = releaseDate;
      this.pagesCount = pagesCount;
      this.state = 100;
      this.type = null;
    }
    fix() {
      this.state *= 1.5;
    }
    set state(state) {
      if (+state < 0) {
        this._state = 0;
      } else if (+state > 100) {
        this._state = 100;
      } else {
        this._state = state;
      }
    }
    get state() {
      return this._state;
    }
  }
  
  class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "magazine";
    }
  }
  
  class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.type = "book";
      this.author = author;
    }
  }
  
  class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
  
      this.type = "novel";
    }
  }
  class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
      this.type = "fantastic";
    }
  }
  class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
      super(name, releaseDate, pagesCount);
      this.author = author;
  
      this.type = "detective";
    }
  }
  
  class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }
    addBook(book) {
      if (book.state > 30) {
        this.books.push(book);
      }
    }
    findBookBy(type, value) {
      if (this.books.length && this.books.find((book) => book[type] === value)) {
        return this.books.find((book) => book[type] === value);
      } else {
        return null;
      }
    }
    giveBookByName(bookName) {
      for (let i = 0; i < this.books.length; i++) {
        if (this.books[i].name === bookName) {
          return this.books.splice(i, 1)[0];
        }
      }
      return null;
    }
  }
  
  class Student {
    constructor(name, gender, age) {
      this.name = name;
      this.gender = gender;
      this.age = age;
    }
  
    addMark(mark, subject) {
      if (mark <= 0 || mark > 5) return "Ошибка, оценка должна быть числом от 1 до 5";
      if (this[subject] === undefined) {
        this[subject] = [];
        this[subject].push(mark);
      } else {
        this[subject].push(mark);
      }
    }
  
    getAverageBySubject(subject) {
      if (this[subject] === undefined) {
        return "Несуществующий предмет";
      } else {
        return this[subject].reduce((previous, next) => previous + next) / this[subject].length;
      }
    }
  
    getAverage() {
      let sumAverage = 0;
      let subjectsCount = 0;
      for (let properties in this) {
        if (properties !== "name" && properties !== "gender" && properties !== "age") {
          sumAverage += this.getAverageBySubject(properties);
          subjectsCount += 1;
        }
      }
      return Number((sumAverage / subjectsCount).toFixed(1));
    }
  
    exclude(reason) {
      if (this.excluded !== undefined) return "Исключен за попытку подделать оценки";
      this.excluded = reason;
      return "reason";
    }
  }
  