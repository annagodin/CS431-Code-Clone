package com.clonedetector.codeclonedetector.controller;

import com.clonedetector.codeclonedetector.model.CloneData;
import com.clonedetector.codeclonedetector.repository.CloneDataRepository;
import org.springframework.data.rest.webmvc.ResourceNotFoundException;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

import static CloneAlgorithm.JccdCloneAlgorithm.detectClones;

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
//        for(int i=0; i<4; i++){
//            CloneData c = new CloneData();
//            c.cloneType=1;
//            c.inputLocation = new int[]{1,4};
//            c.referenceLocation = new int[]{5,7};
//            results.add(c);
//        }


        String inputFileString = "//the is a placeholder for code inputs\n" +
                "public class TestType1Code1 {\n" +
                "    public static void main(String[] args) {\n" +
                "        System.out.println(\"Hello World\");\n" +
                "        int c=0;\n" +
                "        c=c+3;\n" +
                "        c=c*3;\n" +
                "        c=6+90-8;\n" +
                "        int a = c-3;\n" +
                "        if(a>5){\n" +
                "            a = c-90;\n" +
                "        }\n" +
                "\n" +
                "        String s = \"hello my name is anna\";\n" +
                "        s = s.substring(0,5);\n" +
                "        System.out.println(s);\n" +
                "\n" +
                "        int x = 6;\n" +
                "        int count = 0;\n" +
                "        while (x<900){\n" +
                "            x=x*2;\n" +
                "            count+=1;\n" +
                "        }\n" +
                "    }\n" +
                "}";
        String referenceFileString = "//the is a placeholder for code inputs\n" +
                "public class TestType1Code2 {\n" +
                "    public static void main(String[] args) {\n" +
                "        System.out.println(\"Hello World\");\n" +
                "        int b=0;\n" +
                "        b=b+3;\n" +
                "        b=b*3;\n" +
                "        b=6+90-8;\n" +
                "        int a = b-3;\n" +
                "        if(a>5){\n" +
                "            a = b-90;\n" +
                "        }\n" +
                "\n" +
                "\n" +
                "        String s = \"sup homie\";\n" +
                "        char c = s.charAt(5);\n" +
                "        System.out.println(c);\n" +
                "\n" +
                "        int x = 6;\n" +
                "        int count = 0;\n" +
                "        while (x<900){\n" +
                "            x=x*2;\n" +
                "            count+=1;\n" +
                "        }\n" +
                " \t\t\n" +
                "    }\n" +
                "}";

        List<CloneData> cloneResults = detectClones(inputFileString, referenceFileString);

        return cloneResults;
//        return results;
    }

}
