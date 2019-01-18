package pl.krakow.politechnika.wnuk.pai.booker.services;

import org.springframework.stereotype.Service;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.repository.BookRepository;

import java.util.List;
import java.util.Optional;

@Service
public class BookService {
    private BookRepository bookRepository;

    public BookService(BookRepository bookRepository) {
        this.bookRepository = bookRepository;
    }

    public List<Book> getAllBooks(){
        return bookRepository.findAll();
    }

    public Book saveBook(Book book){
        return bookRepository.save(book);
    }

    public Optional<Book> findById(Long id){return bookRepository.findById(id);}

    public Optional<List<Book>> findyByTitle(String title){
        return bookRepository.findByTitle(title);
    }

    public Optional<List<Book>> findByTitlePublisher(String title, String name){return bookRepository.findBookByTitleAndPublisher_Name(title, name);}

}
