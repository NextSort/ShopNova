package com.example.ShopNova.Service;

import com.example.ShopNova.Exception.ProductNotFoundException;
import com.example.ShopNova.Repository.ProductRepo;
import com.example.ShopNova.model.Product;
import jakarta.persistence.Table;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
@Table(name = "product")
public class ProductService {

    @Autowired
    private ProductRepo repo;

    public List<Product> getAllProducts() {
        return repo.findAll();
    }


    public Product getProductById(Long id) {
        return repo.findById(id)
                .orElseThrow(() -> new ProductNotFoundException("Product with ID " + id + " not found."));
    }
//
//    public void saveProduct(Product product) throws IOException {
//        // Save image to file system
//        String imageName = saveImage(imageFile);
//        product.setImageName(imageName);
//
//        // Save product to database
//        productRepository.save(product);
//    }


}
