package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.model.Publisher;
import pl.krakow.politechnika.wnuk.pai.booker.repository.PublisherRepository;
import pl.krakow.politechnika.wnuk.pai.booker.services.PublisherService;

import java.util.LinkedList;
import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class PublisherController {
    private PublisherRepository publisherRepository;

    public PublisherController(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    @GetMapping("publishers")
    public List<Publisher> getAllPublishers(){
        return publisherRepository.findAll();
    }

    @GetMapping("publishers/books/{name}")
    public ResponseEntity<List<Book>> getAllBookByName(@PathVariable String name){
        List<Book> result = publisherRepository.findByName(name).get().getBooks();
        for (Book book: result) {
            book.setSuma();
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("publishers/authors/{name}/{firstname}/{secondname}")
    public ResponseEntity<List<Book>> getAllBookByNameAuthor(@PathVariable String name, @PathVariable String firstname, @PathVariable String secondname){
        List<Book> result = new LinkedList<>();
        for(Book b: publisherRepository.findByName(name).get().getBooks()){
            b.setSuma();
            if(b.getAuthor().getFirstName().equals(firstname) || b.getAuthor().getSurName().equals(secondname)) {
                result.add(b);
            }
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

}
