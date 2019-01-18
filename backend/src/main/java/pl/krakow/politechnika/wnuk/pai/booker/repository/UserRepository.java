package pl.krakow.politechnika.wnuk.pai.booker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.krakow.politechnika.wnuk.pai.booker.model.User;

public interface UserRepository extends JpaRepository<User, Long> {
}
