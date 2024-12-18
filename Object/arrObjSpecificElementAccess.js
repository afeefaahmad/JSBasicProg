var library = [ 
   {
       author: 'Bill Gates',
       title: 'The Road Ahead',
       readingStatus: true
   },
   {
       author: 'Steve Jobs',
       title: 'Walter Isaacson',
       readingStatus: true
   },
   {
       author: 'Suzanne Collins',
       title:  'Mockingjay: The Final Book of The Hunger Games', 
       readingStatus: false
   }];
   
//Method1: remember
library.forEach(function(book){
    console.log(book.author);
})
//Method1: just used arrowFunc remember
library.forEach(book => {
    console.log(book.author);
})


//Method2: 
for(let i=0; i<library.length; i++){
    console.log(library[i].author);
}
