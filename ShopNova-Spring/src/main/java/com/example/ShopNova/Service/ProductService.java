package com.example.ShopNova.Service;

import com.example.ShopNova.Exception.ProductNotFoundException;
import com.example.ShopNova.Repository.ProductRepo;
import com.example.ShopNova.model.Product;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;


@Service
@Table(name = "product")
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }


    public Product saveProduct(Product product, MultipartFile imageFile) {
        return repo.save(product);
    }


    public Product getProductById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found."));
    }


}
