package com.clonedetector.codeclonedetector.controller;

import com.clonedetector.codeclonedetector.model.CloneData;
import com.clonedetector.codeclonedetector.model.InputData;
import com.clonedetector.codeclonedetector.repository.CloneDataRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.ArrayList;
import java.util.List;

import static CloneAlgorithm.JccdCloneAlgorithm.detectClones;


//@RequestMapping("/api/v1")
@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class CloneAlgorithmController {

//    private final CloneDataRepository repository;
//
//    CloneAlgorithmController(CloneDataRepository repository) {
//        this.repository = repository;
//    }

    @GetMapping("/clones")
    public List<CloneData> getClones(@RequestParam List<String> cloneStrings) {

        System.out.println("got here!!");
        System.out.println(cloneStrings);

        System.out.println("num inputs: " + cloneStrings.size());

        String inputFileString = cloneStrings.get(0);
        System.out.println("\n\n\nINPUT FILE:\n" + inputFileString);
        String referenceFileString = cloneStrings.get(1);
        System.out.println("REFERENCE FILE:\n" + referenceFileString);

//        List<CloneData> cloneResults = detectClones(inputFileString, referenceFileString);
//        return cloneResults;
        return null;
    }

    //    @PostMapping("/clones")
    @PostMapping(
            value = "/clones", consumes = "application/json", produces = "application/json")
    public List<CloneData> getInputs(@Valid @RequestBody InputData inputData) {
        System.out.println(inputData);
//        return "inputs are " + inputData;

        List<CloneData> cloneResults = detectClones(inputData.inputFile, inputData.referenceFile);
        return cloneResults;

    }

}
