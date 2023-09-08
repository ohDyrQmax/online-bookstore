package com.onlinebookstore.entity;

import jakarta.persistence.*;
import lombok.Data;



import java.math.BigDecimal;
import java.util.Date;

@Entity
@Table(name="tbl_book")
@Data
public class Book {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

//    @Column(name="sku")
    private String sku;

//    @Column(name = "name")
    private String name;

//    @Column(name = "description")
    private String description;

    @Column(name="unit_price")
    private BigDecimal unitPrice;

    @Column(name="image_url")
    private String imageUrl;

    private boolean active;

    @Column(name="units_in_stock")
    private int unitsInStock;

    @Column(name="date_created")
    private Date createdOn;

    @Column(name="last_updated")
    private Date updatedOn;

    @ManyToOne
    @JoinColumn(name = "category_id", nullable = false)
    private BookCategory category;

}
