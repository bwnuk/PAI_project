package pl.krakow.politechnika.wnuk.pai.booker.repository;

import org.hibernate.sql.Select;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;

import java.util.List;
import java.util.Optional;

public interface BookRepository extends JpaRepository<Book, Long> {
    Optional<List<Book>>findByTitle(String name);
    Optional<List<Book>> findBookByTitleAndPublisher_Name(String title, String name);

    @Query("Select b FROM Book b INNER JOIN Author a ON b.author=a.id WHERE a.firstName=(:name)")
    List<Book> findN(@Param("name") String name);
}
