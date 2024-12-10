package com.example.ShopNova.Service;

import com.example.ShopNova.Repository.ProductRepo;
import com.example.ShopNova.model.Product;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
@Table(name = "product")
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }


    public Product saveProduct(Product product) {
        return repo.save(product);
    }


    public Optional<Product> getProductById(Long id) {
        return repo.findById(id);
    }


}
