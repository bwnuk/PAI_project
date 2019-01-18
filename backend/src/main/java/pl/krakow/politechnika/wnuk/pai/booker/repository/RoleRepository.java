package pl.krakow.politechnika.wnuk.pai.booker.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import pl.krakow.politechnika.wnuk.pai.booker.model.Role;

public interface RoleRepository extends JpaRepository<Role, Long> {
    Role findByName(String name);
}
