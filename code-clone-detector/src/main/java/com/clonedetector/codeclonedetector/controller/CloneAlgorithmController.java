package com.clonedetector.codeclonedetector.controller;

import com.clonedetector.codeclonedetector.model.CloneData;
import com.clonedetector.codeclonedetector.repository.CloneDataRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

//@CrossOrigin(origins = "http://localhost:4200")
//@RequestMapping("/api/v1")
@RestController
public class CloneAlgorithmController {

//    private final CloneDataRepository repository;
//
//    CloneAlgorithmController(CloneDataRepository repository) {
//        this.repository = repository;
//    }

    @GetMapping("/clones")
    public List<CloneData> getClones(){
//        Employee employee = employeeRepository.findById(employeeId)
//                .orElseThrow(() -> new ResourceNotFoundException("Employee not found for this id :: " + employeeId));
//        return ResponseEntity.ok().body(employee);
        List<CloneData> results = new ArrayList<CloneData>();
        for(int i=0; i<4; i++){
            CloneData c = new CloneData();
            c.cloneType=1;
            c.inputLocation = new int[]{1,4};
            c.referenceLocation = new int[]{5,7};
            results.add(c);
        }
        return results;
    }

}
