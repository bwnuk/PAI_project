package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.services.BookService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class BookController {
    private BookService bookService;

    public BookController(BookService bookService) {
        this.bookService = bookService;
    }

    @GetMapping("books/all")
    public ResponseEntity<List<Book>> showAllBooks(){
        return new ResponseEntity<>(bookService.getAllBooks(), HttpStatus.OK);
    }

    @GetMapping("books/{title}")
    public ResponseEntity<Optional<List<Book>>> findByTitle(@PathVariable String title){
        Optional<List<Book>> result = bookService.findyByTitle(title);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("books/publishers/{title}/{publisher}")
    public ResponseEntity<Optional<List<Book>>> findByTitlePublisher(@PathVariable String title, @PathVariable String publisher){
        Optional<List<Book>> result = bookService.findByTitlePublisher(title, publisher);
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Book>addBook(@RequestBody Book book){
        return new ResponseEntity<>(bookService.saveBook(book), HttpStatus.CREATED);
    }

}
