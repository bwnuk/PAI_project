package pl.krakow.politechnika.wnuk.pai.booker.services;

import org.springframework.stereotype.Service;
import pl.krakow.politechnika.wnuk.pai.booker.model.Author;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.repository.AuthorRepository;

import java.util.List;
import java.util.Optional;

@Service
public class AuthorService {
    private AuthorRepository authorRepository;

    public AuthorService(AuthorRepository authorRepository) {
        this.authorRepository = authorRepository;
    }

    public List<Author> getAllAuthors(){
        return authorRepository.findAll();
    }

    public Optional<Author> findBySurname(String name){
        return authorRepository.findBySurName(name);
    }

    public Optional<Author> findByFullName(String first, String second){return authorRepository.findByFirstNameAndSurName(first, second);}

    public List<Book> findAllBookByName(String first, String second){return authorRepository.findByFirstNameAndSurName(first, second).get().getBooks();}

    public List<Book> findAllBookByFirstName(String name){return authorRepository.findByFirstName(name).get().getBooks();}

    public List<Book> findAllBookBySurName(String name){return authorRepository.findBySurName(name).get().getBooks();}
}
