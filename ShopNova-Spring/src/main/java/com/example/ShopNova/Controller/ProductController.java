package com.example.ShopNova.Controller;


import com.example.ShopNova.Service.ProductService;
import com.example.ShopNova.model.Product;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class ProductController {

    @Autowired
    private ProductService service;

    @RequestMapping("/products")
    public List<Product> getAllProducts() {
        return service.getAllProducts();
    }

    @PostMapping("/add")
    public Product addProduct(@Valid @RequestBody Product product) {
        return service.saveProduct(product);
    }


    @GetMapping("/{id}")
    public Optional<Product> getProductById(@PathVariable Long id) {
        return service.getProductById(id);
    }

}
