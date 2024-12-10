package com.example.ShopNova.Service;

import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class CategoryService {

    public List<String> getAllCategories() {
        // Mocked data; replace with a database query
        return List.of("Electronics", "Fashion", "Home & Kitchen", "Sports");
    }
}
