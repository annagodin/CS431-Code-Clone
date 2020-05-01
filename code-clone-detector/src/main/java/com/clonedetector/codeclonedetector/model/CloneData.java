package com.clonedetector.codeclonedetector.model;

import lombok.Data;
import org.springframework.data.annotation.Id;

import javax.persistence.Entity;
import java.util.Arrays;
import javax.persistence.Table;

@Data
@Entity
@Table(name = "clones")
public class CloneData {

//    @Id
//    private long id;
    public int cloneType;
    public int[] referenceLocation;
    public int[] inputLocation;

    public CloneData(){

    }

    public String toString() {
        return "cloneType: " + cloneType + "\t Input Location: " + Arrays.toString(inputLocation) + "\tReference Location: " + Arrays.toString(referenceLocation);
    }
}
