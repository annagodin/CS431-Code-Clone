package com.clonedetector.codeclonedetector.repository;

import com.clonedetector.codeclonedetector.model.CloneData;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CloneDataRepository extends CrudRepository<CloneData, Long> {}