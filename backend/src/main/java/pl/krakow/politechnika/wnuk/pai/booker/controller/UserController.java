package pl.krakow.politechnika.wnuk.pai.booker.controller;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import pl.krakow.politechnika.wnuk.pai.booker.model.User;
import pl.krakow.politechnika.wnuk.pai.booker.services.UserService;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("/api/")
public class UserController {
    private UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping("users/all")
    public ResponseEntity<List<User>> getAllUsers(){
        return new ResponseEntity<>(userService.getAll(), HttpStatus.OK);
    }

    @PostMapping("register")
    public ResponseEntity<Object> register(@RequestBody User user){
        userService.saveUser(user);
        return new ResponseEntity<>(user, HttpStatus.OK);
    }
}
