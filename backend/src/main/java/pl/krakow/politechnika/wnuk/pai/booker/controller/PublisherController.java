package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.model.Publisher;
import pl.krakow.politechnika.wnuk.pai.booker.repository.PublisherRepository;
import pl.krakow.politechnika.wnuk.pai.booker.services.PublisherService;

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
    public ResponseEntity<List<Book>> getAlllBookByName(@PathVariable String name){
        return new ResponseEntity<>(publisherRepository.findByName(name).get().getBooks(), HttpStatus.FOUND);
    }

}
