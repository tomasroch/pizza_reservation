package com.pizza.pizza_reservation.repository;

import com.pizza.pizza_reservation.domain.Userz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserzRepository extends JpaRepository<Userz, Integer> {

    Optional<Userz> findByUsername(String username);
}
