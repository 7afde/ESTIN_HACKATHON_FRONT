
package com.ecobin.backend.model.dal.entities;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;

import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import lombok.NoArgsConstructor;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "trash")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Trash {
    @Id
    @Column(nullable = false)
    private String neighborhood;

    @OneToMany(mappedBy = "trash", cascade = CascadeType.ALL)
    private List<Subtrash> subtrashs;
}
