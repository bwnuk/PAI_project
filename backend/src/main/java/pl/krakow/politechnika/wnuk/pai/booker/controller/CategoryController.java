package pl.krakow.politechnika.wnuk.pai.booker.controller;


import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Book;
import pl.krakow.politechnika.wnuk.pai.booker.model.Category;
import pl.krakow.politechnika.wnuk.pai.booker.services.CategoryService;

import java.util.List;
import java.util.Set;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class CategoryController {
    private CategoryService categoryService;

    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @GetMapping("categories/all")
    public ResponseEntity<List<Category>> showAllCategories(){
        return new ResponseEntity<>(categoryService.getAllCategories(), HttpStatus.OK);
    }

    @GetMapping("categories/{c_id}")
    public ResponseEntity<List<Book>> showAllBookById(@PathVariable long c_id){
        List<Book> result = categoryService.getAllBooksById(c_id);
        for (Book book: result) {
            book.setSuma();
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }

    @GetMapping("categories/books/{name}")
    public ResponseEntity<List<Book>> showAllBookByName(@PathVariable String name){
        List<Book> result = categoryService.getAllBooksByName(name);
        for (Book book: result) {
            book.setSuma();
        }
        return new ResponseEntity<>(result, HttpStatus.OK);
    }
}
