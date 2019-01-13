package pl.krakow.politechnika.wnuk.pai.booker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;

import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<Book> findByTitle(String name);
}
