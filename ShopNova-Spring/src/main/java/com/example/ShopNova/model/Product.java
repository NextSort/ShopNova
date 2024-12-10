package com.example.ShopNova.model;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Min;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.Date;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @JsonProperty("id")
    private Long id;

    @JsonProperty("name")
    private String name;

//    @JsonProperty is an annotation from the Jackson library that is used to map Java object fields to specific JSON property names.
    @JsonProperty("description")
    @Column(length = 1000) // Allow longer descriptions
    private String description;

    @JsonProperty("brand")
    private String brand;

    @JsonProperty("price")
    @Column(precision = 10, scale = 2) // Precision for price (e.g., 99999999.99)
    private BigDecimal price;

    @JsonProperty("category")
    private String category;

    @JsonProperty("release_date")
    @Temporal(TemporalType.DATE)
    private Date releaseDate;

    @JsonProperty("available")
    private boolean available;

    @JsonProperty("quantity")
    @Min(value = 0, message = "Quantity must be non-negative")
    private int quantity;
    @JsonProperty("imageUrl")
    private String imageUrl; // Add image_url field
}
