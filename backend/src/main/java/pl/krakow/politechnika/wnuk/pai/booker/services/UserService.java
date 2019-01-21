package pl.krakow.politechnika.wnuk.pai.booker.services;

import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Isolation;
import pl.krakow.politechnika.wnuk.pai.booker.model.User;
import pl.krakow.politechnika.wnuk.pai.booker.repository.RoleRepository;
import pl.krakow.politechnika.wnuk.pai.booker.repository.UserRepository;


import javax.transaction.Transactional;
import java.util.List;
import java.util.Optional;

@Service
public class UserService {
    private UserRepository userRepository;
    private RoleRepository roleRepository;
    private BCryptPasswordEncoder bCryptPasswordEncoder;

    public UserService(UserRepository userRepository, RoleRepository roleRepository, BCryptPasswordEncoder bCryptPasswordEncoder) {
        this.userRepository = userRepository;
        this.roleRepository = roleRepository;
        this.bCryptPasswordEncoder = bCryptPasswordEncoder;
    }

    public void saveUser(User user){
        //user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole(roleRepository.findByName("ROLE_USER"));
        userRepository.save(user);
    }

    public void saveAdmin(User user){
        user.setPassword(bCryptPasswordEncoder.encode(user.getPassword()));
        user.setRole(roleRepository.findByName("ROLE_ADMIN"));
        userRepository.save(user);
    }

    public List<User> getAll(){
        return userRepository.findAll();
    }

    public Optional<User> findByName(String name){
        return userRepository.findByUsername(name);
    }

    public void login(String session, User user){
        User user1 = userRepository.findByUsername(user.getUsername()).get();

        UsernamePasswordAuthenticationToken usernamePasswordAuthenticationToken
                = new UsernamePasswordAuthenticationToken(user, user.getPassword());
    }

    @Transactional(rollbackOn = UserRepository.class)
    public void add(User user){
        userRepository.save(user);
    }
}
