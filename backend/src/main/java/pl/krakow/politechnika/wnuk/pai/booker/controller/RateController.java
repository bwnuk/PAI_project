package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.Rate;
import pl.krakow.politechnika.wnuk.pai.booker.services.BookService;
import pl.krakow.politechnika.wnuk.pai.booker.services.RateService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class RateController {
    private RateService rateService;
    private BookService bookService;

    public RateController(RateService rateService, BookService bookService) {
        this.rateService = rateService;
        this.bookService = bookService;
    }

    @GetMapping("rates/all")
    public ResponseEntity<List<Rate>> getAll(){
        return new ResponseEntity<>(rateService.findAll(), HttpStatus.OK);
    }

    @PostMapping("rates/add/{mark}/{bookid}/{userid}")
    public ResponseEntity<Rate> addRate(@PathVariable double mark, @PathVariable Long bookid, @PathVariable Long userid){
        Rate result = new Rate(mark, bookService.findById(bookid).get());
        bookService.findById(bookid).get().setSuma();
        return new ResponseEntity<>(rateService.saveRate(result), HttpStatus.OK);
    }
}
