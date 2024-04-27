
package com.ecobin.backend.model.dal.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.Table;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "subtrash")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Subtrash {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "trash_neighborhood")
    private Trash trash;

    @Enumerated(EnumType.STRING)
    private TypeEnum type;

    @Column(nullable = false)
    private Float availableSapce;

}
