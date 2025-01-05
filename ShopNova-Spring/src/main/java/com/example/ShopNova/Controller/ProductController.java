package com.example.ShopNova.Controller;

import com.example.ShopNova.Exception.ProductNotFoundException;
import com.example.ShopNova.Service.ProductService;
import com.example.ShopNova.model.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/")
    public ResponseEntity<List<Product>> getAllProducts() {
        return new ResponseEntity<>(service.getAllProducts(), HttpStatus.OK);
    }



    @GetMapping("/{id}")
    public ResponseEntity<Product> getProductById(@PathVariable Long id) {
        Product product = service.getProductById(id);
        if (product != null) {
            return new ResponseEntity<>(product, HttpStatus.OK);
        } else {
            throw new ProductNotFoundException("Product with ID " + id + " not found.");
        }
    }

//
//    @PostMapping("/{id}")
//    public ResponseEntity<String> saveProduct(@RequestBody Product product) {
//        try {
//            service.saveProduct(product);
//            return ResponseEntity.status(HttpStatus.CREATED).body("Product created successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error: " + e.getMessage());
//        }
//    }


}