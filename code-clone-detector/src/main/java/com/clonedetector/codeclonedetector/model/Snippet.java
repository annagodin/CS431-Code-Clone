package com.clonedetector.codeclonedetector.model;

public class Snippet {
    public String type;
    public String fileName;
    public String contents;

    public String toString() {
        return "Snippet{" +
                "type=" + type + '\n' +
                ", fileName=" + fileName + '\n' +
                ", contents=" + contents + '\n' +
                '}';
    }
}
