package test;


import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

public class TestingSimian {
    public static void main(String[] args) {

//        String[] fileStrings = {"src/test/Test.java", "src/test/Test2java"};
//        AuditListener auditListener = new CompositeAuditListener();
//
//        Options options = new Options();
//        options.setThreshold(3);
//        options.setOption(Option.IGNORE_STRINGS, true);
//
//        Checker checker = new Checker(auditListener, options);
//
//        StreamLoader streamLoader = new StreamLoader(checker);
//
//        FileLoader fileLoader = new FileLoader(streamLoader);
//
//        for (int i = 0; i < fileStrings.length; ++i) {
//            fileLoader.load(fileStrings[i]);
//        }
//
//
//        if (checker.check()) {
//            System.out.println("Duplicate lines were found!");
//            System.out.println(checker.check());
//        }


//        java -jar simian-2.5.10.jar -threshold=3 test-code/Test.java test-code/Test2.java > results.txt
//        String[] arguments = new String[] {"/bin/bash", "-c", "java", "-jar", "simian-2.5.10.jar", "-threshold=3", "src/test/Test2,java", "src/test/Test,java", "> results.txt"};
//        try {
//            Process proc = new ProcessBuilder(arguments).start();
//        } catch (IOException e) {
//            e.printStackTrace();
//        }



//        try {
//            String command = "java -jar simian-2.5.10.jar -threshold=3 test/Test.java test/Test2.java";
////            String command = "ping -c 3 www.google.com";
//
//            Process proc = Runtime.getRuntime().exec(command);
//
//            // Read the output
//
//            BufferedReader reader =
//                    new BufferedReader(new InputStreamReader(proc.getInputStream()));
//
//            String line = "";
//            while((line = reader.readLine()) != null) {
//                System.out.print(line + "\n");
//            }
//
//            proc.waitFor();
//
//        } catch (IOException | InterruptedException e) {
//            e.printStackTrace();
//        }
//




    }
}
