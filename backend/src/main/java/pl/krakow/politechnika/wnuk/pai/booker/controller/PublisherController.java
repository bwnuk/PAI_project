package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import pl.krakow.politechnika.wnuk.pai.booker.model.Publisher;
import pl.krakow.politechnika.wnuk.pai.booker.repository.PublisherRepository;
import pl.krakow.politechnika.wnuk.pai.booker.services.PublisherService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api")
public class PublisherController {
    private PublisherRepository publisherRepository;

    public PublisherController(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    @GetMapping("publishers")
    public List<Publisher> getAllPublishers(){
        return publisherRepository.findAll();
    }


}
