package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.services.BookService;

import java.util.*;

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
        List<Book> result = bookService.getAllBooks();
        for (Book book: result) {
            book.setSuma();
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("books/all/sorted")
    public ResponseEntity<List<Book>> showAllBooksSorted(){
        List<Book> result = bookService.getAllBooks();
        for (Book book: result) {
            book.setSuma();
        }

        result.sort(Book::compareTo);

        Collections.reverse(result);

        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("books/{title}")
    public ResponseEntity<Optional<List<Book>>> findByTitle(@PathVariable String title){
        Optional<List<Book>> result = bookService.findyByTitle(title);
        for (Book book: result.get()) {
            book.setSuma();
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("books/publishers/{title}/{publisher}")
    public ResponseEntity<Optional<List<Book>>> findByTitlePublisher(@PathVariable String title, @PathVariable String publisher){
        Optional<List<Book>> result = bookService.findByTitlePublisher(title, publisher);
        for (Book book: result.get()) {
            book.setSuma();
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @PostMapping("")
    public ResponseEntity<Book>addBook(@RequestBody Book book){
        return new ResponseEntity<>(bookService.saveBook(book), HttpStatus.CREATED);
    }

}
