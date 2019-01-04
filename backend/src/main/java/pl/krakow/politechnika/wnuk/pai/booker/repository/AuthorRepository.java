package pl.krakow.politechnika.wnuk.pai.booker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.krakow.politechnika.wnuk.pai.booker.model.Author;

import java.util.Optional;

public interface AuthorRepository extends JpaRepository<Author, Long> {
    Optional<Author> findBySurName(String surname);
}
