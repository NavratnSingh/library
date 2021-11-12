function Book(title,author, pages, isread){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.isread = isread;
    this.info = function(){
        if(!isread){
        return this.title + " by " + this.author + ", " + this.pages + " pages" + ",not read yet"
        }
    }
}

const theHobbit = new Book("The Hobbit", "J.R.R Tolkien", 295, false)

console.log(theHobbit.info());