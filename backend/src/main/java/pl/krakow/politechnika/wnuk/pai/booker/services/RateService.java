package pl.krakow.politechnika.wnuk.pai.booker.services;

import org.springframework.stereotype.Service;
import pl.krakow.politechnika.wnuk.pai.booker.model.Rate;
import pl.krakow.politechnika.wnuk.pai.booker.repository.RateRepository;

import java.util.List;

@Service
public class RateService {
    private RateRepository rateRepository;

    public RateService(RateRepository rateRepository) {
        this.rateRepository = rateRepository;
    }

    public List<Rate> findAll(){return rateRepository.findAll();}

    public Rate saveRate(Rate rate){return rateRepository.save(rate);}
}
