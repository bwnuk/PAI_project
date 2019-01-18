package pl.krakow.politechnika.wnuk.pai.booker.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.util.LinkedList;
import java.util.List;

@Data
@Entity
@Table(name = "books")
public class Book implements Comparable<Book> {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;

    @ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name = "fk_author")
    private Author author;

    @ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name = "fk_category")
    private Category category;

    @ManyToOne(cascade= {CascadeType.PERSIST, CascadeType.MERGE, CascadeType.DETACH, CascadeType.REFRESH})
    @JoinColumn(name = "fk_publisher")
    private Publisher publisher;

    private double sum;

    @JsonIgnore
    @OneToMany(fetch = FetchType.LAZY, mappedBy = "book",
            cascade = {
                    CascadeType.DETACH, // odłączanie kolekcji
                    CascadeType.MERGE,  // aktualizacja encji
                    CascadeType.PERSIST,// włączanie nowej encji do kontekstu
                    CascadeType.REFRESH // odświeżanie stanu encji
                    // CascadeType.REMOVE // usuwanie encji - nie dodajemy, gdyż nie chcemy usuwać książek
                    // w przypadku usunięcia kategorii.
            }
    )
    private List<Rate> rates = new LinkedList<>();

    public void setSuma(){
        sum = 0;
        for (Rate r: rates) {
            sum += r.getMark();
        }

        if(sum != 0){
            sum = sum / rates.size();
        }else {
            sum = 0;
        }

    }

    @Override
    public int compareTo(Book o) {
        return (int)(this.getSum() - o.getSum());
    }
}
