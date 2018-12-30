package pl.krakow.politechnika.wnuk.pai.booker.services;

import pl.krakow.politechnika.wnuk.pai.booker.repository.PublisherRepository;

public class PublisherService {
    PublisherRepository publisherRepository;

    public PublisherService(PublisherRepository publisherRepository) {
        this.publisherRepository = publisherRepository;
    }
}
