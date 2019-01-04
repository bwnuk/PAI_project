package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Author;
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

    @GetMapping("authors/surname")
    public ResponseEntity<Optional<Author>> getAuthorBySurname(@PathVariable String name){
        Optional<Author> optionalAuthor = authorService.findBySurname(name);
        return new ResponseEntity<>(optionalAuthor, HttpStatus.FOUND);
    }
}
