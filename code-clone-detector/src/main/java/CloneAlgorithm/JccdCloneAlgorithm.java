
package CloneAlgorithm;

import com.clonedetector.codeclonedetector.model.CloneData;
import org.eposoft.jccd.comparators.ast.java.*;
import org.eposoft.jccd.data.*;
import org.eposoft.jccd.data.ast.ANode;
import org.eposoft.jccd.data.ast.NodeTypes;
import org.eposoft.jccd.detectors.APipeline;
import org.eposoft.jccd.detectors.ASTDetector;
import org.eposoft.jccd.preprocessors.java.*;

import java.io.BufferedWriter;
import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;

public class JccdCloneAlgorithm {
    public static void main(String[] args) {


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

        ArrayList<CloneData> cloneResults = detectClones(inputFileString, referenceFileString);

        System.out.println("FINAL RESTULS");

        for(CloneData c : cloneResults){
            System.out.println(c);
        }

    }

    public static ArrayList<CloneData> detectClones(String inputFileString, String referenceFileString) {

//        System.out.println("inputFileString: \n" + inputFileString);
//        System.out.println("referenceFileString: \n" +referenceFileString);

        ArrayList<CloneData> cloneResults = new ArrayList<CloneData>();

        File inputFile;
        File referenceFile;
        try {
            ///////////File Creation Stuff///////////

            // Create temp file.
            inputFile = File.createTempFile("inputFile", ".java");
            referenceFile = File.createTempFile("referenceFile", ".java");

            // Delete temp file when program exits.
            inputFile.deleteOnExit();
            referenceFile.deleteOnExit();

            // Write to temp file
            BufferedWriter inputFileOut = new BufferedWriter(new FileWriter(inputFile));
            BufferedWriter referenceFileOut = new BufferedWriter(new FileWriter(referenceFile));

            inputFileOut.write(inputFileString);
            referenceFileOut.write(referenceFileString);

            inputFileOut.close();
            referenceFileOut.close();

            ///////////Clone Detection Stuff///////////
            APipeline detector = new ASTDetector();
            JCCDFile[] files = {
                    new JCCDFile(inputFile),
                    new JCCDFile(referenceFile)
            };

            detector.setSourceFiles(files);

            cloneResults = processType1(detector, cloneResults);
            cloneResults = processType2(detector, cloneResults);

        } catch (IOException e) {
            e.printStackTrace();
        }

        return cloneResults;

    }


    public static ArrayList<CloneData> processType1(APipeline detector, ArrayList<CloneData> cloneResults) {
        SimilarityGroup[] similarityGroups = processResults(detector);
        System.out.println("================================\nTYPE 1 RESULTS:\n");
        return printSimilarityGroups(similarityGroups, cloneResults, 1);
    }

    public static ArrayList<CloneData> processType2(APipeline detector, ArrayList<CloneData> cloneResults) {
        addOperatorsType2(detector);
        SimilarityGroup[] similarityGroups = processResults(detector);
        System.out.println("================================\nTYPE 2 RESULTS:\n");
        return printSimilarityGroups(similarityGroups, cloneResults, 2);
    }


    public static void addOperatorsType2(APipeline detector) {
        detector.addOperator(new GeneralizeMethodCallNames());
        detector.addOperator(new GeneralizeMethodReturnTypes());
        detector.addOperator(new GeneralizeTypes());
        detector.addOperator(new GeneralizeMethodDeclarationNames());
        detector.addOperator(new GeneralizeVariableNames());
        detector.addOperator(new GeneralizeMethodCallNames());
        detector.addOperator(new GeneralizeMethodArgumentTypes());
        detector.addOperator(new GeneralizeVariableDeclarationTypes());
        detector.addOperator(new GeneralizeArrayInitializers());

        detector.addOperator(new AcceptNumberTypeNames());
        detector.addOperator(new AcceptNumberLiterals());
        detector.addOperator(new AcceptAdditiveOperators());
        detector.addOperator(new AcceptArithmeticOperators());
        detector.addOperator(new AcceptBooleanKeywords());
        detector.addOperator(new AcceptCharacterLiterals());
        detector.addOperator(new AcceptDecrementOperators());
        detector.addOperator(new AcceptEquals());
        detector.addOperator(new AcceptStringLiterals());
        detector.addOperator(new AcceptRelationOperators());
        detector.addOperator(new AcceptArithmeticOperators());
        detector.addOperator(new AcceptRelationOperators());
        detector.addOperator(new AcceptArithmeticOperators());

        detector.addOperator(new RemovePackageInformation());
        detector.addOperator(new RemoveEmptyBlocks());
        detector.addOperator(new RemoveSimpleMethods());
        detector.addOperator(new RemoveImports());
        detector.addOperator(new RemoveModifiers());
        detector.addOperator(new RemoveRedundantParentheses());

    }

    public static SimilarityGroup[] processResults(APipeline detector) {
        SimilarityGroupManager similarityGroupManager = detector.process();
        return similarityGroupManager.getSimilarityGroups();
    }

    public static SourceUnitPosition getFirstNodePosition(ANode node) {
        if (-1 == node.getLine() && !node.isLeaf()) {
            for (int i = 0; i < node.getChildCount(); ++i) {
                SourceUnitPosition pos = getFirstNodePosition(node.getChild(i));
                if (-1 != pos.getLine()) {
                    return pos;
                }
            }

            return new SourceUnitPosition(-1, -1);
        } else {
            return new SourceUnitPosition(node.getLine(), node.getCharPositionInLine());
        }
    }

    public static SourceUnitPosition getLastNodePosition(ANode node) {
        SourceUnitPosition max = new SourceUnitPosition(node.getLine(), node.getCharPositionInLine());
        if (node.isLeaf()) {
            return max;
        } else {
            for (int i = 0; i < node.getChildCount(); ++i) {
                SourceUnitPosition pos = getLastNodePosition(node.getChild(i));
                if (pos.getLine() > max.getLine()) {
                    max = pos;
                } else if (pos.getLine() == max.getLine() && pos.getCharacter() > max.getCharacter()) {
                    max = pos;
                }
            }

            return max;
        }
    }

    public static ArrayList<CloneData> printSimilarityGroups(SimilarityGroup[] similarityGroups, ArrayList<CloneData> cloneResults, int cloneType) {
        if (similarityGroups != null && similarityGroups.length > 0) {
            for (int i = 0; i < similarityGroups.length; ++i) {
                ASourceUnit[] nodes = similarityGroups[i].getNodes();
                CloneData cloneData = new CloneData();
                cloneData.cloneType = cloneType;
                for (int j = 0; j < nodes.length; ++j) { //loop represents a clone pair
                    SourceUnitPosition minPos = getFirstNodePosition((ANode) nodes[j]);
                    SourceUnitPosition maxPos = getLastNodePosition((ANode) nodes[j]);

                    ANode fileNode;
                    for (fileNode = (ANode) nodes[j]; fileNode.getType() != NodeTypes.FILE.getType(); fileNode = fileNode.getParent()) {
                    }

                    String fileName = fileNode.getText().substring(fileNode.getText().lastIndexOf("/") + 1);
                    int startLine = minPos.getLine();
                    int endLine = maxPos.getLine();

                    if (fileName.substring(0, 9).equals("inputFile")) {
                        System.out.println("Input File: " + fileName);
                        cloneData.inputLocation = new int[]{startLine, endLine};
                    } else if (fileName.substring(0, 13).equals("referenceFile")) {
                        System.out.println("Reference File: " + fileName);
                        cloneData.referenceLocation = new int[]{startLine, endLine};
                    }

                    System.out.print("Start: " + startLine + "\t");
                    System.out.println("End: " + endLine);
                }

                if(cloneData.inputLocation==null||cloneData.referenceLocation==null){
                    continue;
                }

                System.out.println(cloneData);
                cloneResults.add(cloneData);
                System.out.println();
            }
        } else {
            System.out.println("No similar nodes found.");
        }

        System.out.println("\n================================");

        return cloneResults;
    }


}