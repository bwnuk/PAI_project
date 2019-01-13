package pl.krakow.politechnika.wnuk.pai.booker.services;

import org.springframework.stereotype.Service;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.model.Category;
import pl.krakow.politechnika.wnuk.pai.booker.repository.CategoryRepository;

import java.util.List;
import java.util.Set;

@Service
public class CategoryService {
    private CategoryRepository categoryRepository;

    public CategoryService(CategoryRepository categoryRepository) {
        this.categoryRepository = categoryRepository;
    }

    public List<Category> getAllCategories() {
        return categoryRepository.findAll();
    }

    public List<Book> getAllBooksById(Long id){
        return categoryRepository.findById(id).get().getBooks();
    }

    public List<Book> getAllBooksByName(String name) {return categoryRepository.findByName(name).get().getBooks();}
}
