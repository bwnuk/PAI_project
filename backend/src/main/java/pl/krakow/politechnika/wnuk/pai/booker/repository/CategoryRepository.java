package pl.krakow.politechnika.wnuk.pai.booker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.model.Category;
import java.util.Set;

import java.util.Optional;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
