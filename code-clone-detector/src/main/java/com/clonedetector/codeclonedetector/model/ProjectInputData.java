package com.clonedetector.codeclonedetector.model;

import java.util.Arrays;

public class ProjectInputData {
    public String inputFileString;
    public Snippet[] referenceProject;

    @Override
    public String toString() {
        return "ProjectInputData{" +
                "inputFileString='" + inputFileString + '\'' +
                ", referenceProject=" + Arrays.toString(referenceProject) +
                '}';
    }
}
