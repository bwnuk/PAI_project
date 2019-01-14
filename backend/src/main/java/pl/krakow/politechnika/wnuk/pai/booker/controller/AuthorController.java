package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Author;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.services.AuthorService;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class AuthorController {
    AuthorService authorService;

    public AuthorController(AuthorService authorService) {
        this.authorService = authorService;
    }

    @GetMapping("authors")
    public ResponseEntity<List<Author>> showAllAuthors(){
        return new ResponseEntity<>(authorService.getAllAuthors(), HttpStatus.OK);
    }

    @GetMapping("authors/{surname}")
    public ResponseEntity<Optional<Author>> getAuthorBySurname(@PathVariable String surname){
        Optional<Author> optionalAuthor = authorService.findBySurname(surname);
        return new ResponseEntity<>(optionalAuthor, HttpStatus.FOUND);
    }

    @GetMapping("authors/full/{first}/{second}")
    public ResponseEntity<Optional<Author>> getAuthorByFullName(@PathVariable String first, @PathVariable String second){
        Optional<Author> optionalAuthor = authorService.findByFullName(first, second);
        return new ResponseEntity<>(optionalAuthor, HttpStatus.FOUND);
    }

    @GetMapping("authors/books/{first}/{second}")
    public ResponseEntity<List<Book>> getAllBookByFullName(@PathVariable String first, @PathVariable String second){
        return new ResponseEntity<>(authorService.findAllBookByName(first, second), HttpStatus.FOUND);
    }

    @GetMapping("authors/books/{surname}")
    public ResponseEntity<List<Book>> getAllBookBySurName(@PathVariable String surname){
        return new ResponseEntity<>(authorService.findAllBookBySurName(surname), HttpStatus.FOUND);
    }

}
