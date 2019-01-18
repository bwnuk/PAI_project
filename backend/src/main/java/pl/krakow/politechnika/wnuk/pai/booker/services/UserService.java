package pl.krakow.politechnika.wnuk.pai.booker.services;

import org.springframework.stereotype.Service;
import pl.krakow.politechnika.wnuk.pai.booker.model.User;
import pl.krakow.politechnika.wnuk.pai.booker.repository.RoleRepository;
import pl.krakow.politechnika.wnuk.pai.booker.repository.UserRepository;

import java.util.List;

@Service
public class UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;

    public UserService(UserRepository userRepository, RoleRepository roleRepository) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
    }

    public void saveUser(User user){
        user.setRole(roleRepository.findByName("ROLE_USER"));
        userRepository.save(user);
    }

    public void saveAdmin(User user){
        user.setRole(roleRepository.findByName("ROLE_ADMIN"));
        userRepository.save(user);
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

}
