package com.clonedetector.codeclonedetector.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Table;

@Data
@Entity
public class InputData {
    public String inputFile;
    public String referenceFile;

    public String toString(){
        return "inputFile: \n" + inputFile + "\n\nreferenceFile: \n" + referenceFile;
    }
}

