package pl.krakow.politechnika.wnuk.pai.booker.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Data
@Entity
@Table(name = "roles")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String  name;


    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "role",
            cascade = {
                    CascadeType.DETACH, // odłączanie kolekcji
                    CascadeType.MERGE,  // aktualizacja encji
                    CascadeType.PERSIST,// włączanie nowej encji do kontekstu
                    CascadeType.REFRESH // odświeżanie stanu encji
                    // CascadeType.REMOVE // usuwanie encji - nie dodajemy, gdyż nie chcemy usuwać książek
                    // w przypadku usunięcia kategorii.
            }
    )
    private List<User> users= new LinkedList<>();
}
