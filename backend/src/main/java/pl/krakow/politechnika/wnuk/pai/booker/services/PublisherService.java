package pl.krakow.politechnika.wnuk.pai.booker.services;

import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.model.Publisher;
import pl.krakow.politechnika.wnuk.pai.booker.repository.PublisherRepository;

import java.util.List;

public class PublisherService {
    PublisherRepository publisherRepository;

    public PublisherService(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }

    public List<Publisher> getAllPublishers(){
        return publisherRepository.findAll();
    }

    public List<Book> getAllBookByName(String name){return publisherRepository.findByName(name).get().getBooks();}
}
