
package test;

import org.eposoft.jccd.comparators.ast.java.*;
import org.eposoft.jccd.data.*;
import org.eposoft.jccd.data.ast.ANode;
import org.eposoft.jccd.data.ast.NodeTypes;
import org.eposoft.jccd.detectors.APipeline;
import org.eposoft.jccd.detectors.ASTDetector;
import org.eposoft.jccd.preprocessors.java.*;


public class TestingJCCD {
    public static void main(String[] args) {

        String inputFileName = "src/test/Input_Type_1_2.java";
        String referenceFileName = "src/test/Reference_Type_1_2.java";

        APipeline detector = new ASTDetector();
        JCCDFile[] files = {
                new JCCDFile(inputFileName),
                new JCCDFile(referenceFileName)
        };

        detector.setSourceFiles(files);
        processType2(detector, inputFileName, referenceFileName);


    }


    public static SimilarityGroup[] processResults(APipeline detector) {
        SimilarityGroupManager similarityGroupManager = detector.process();
        return similarityGroupManager.getSimilarityGroups();
    }

    public static void processType1(APipeline detector,  String inputFileName, String referenceFileName) {
        SimilarityGroup[] similarityGroups = processResults(detector);
        System.out.println("TYPE 1 RESULTS:\n");
        printSimilarityGroups(similarityGroups, inputFileName, referenceFileName);
    }


    public static void processType2(APipeline detector, String inputFileName, String referenceFileName) {
        addOperatorsType2(detector);
        System.out.println("TYPE 2 RESULTS:\n");
        SimilarityGroup[] similarityGroups = processResults(detector);
        printSimilarityGroups(similarityGroups, inputFileName, referenceFileName);
    }

    public static void processType3(APipeline detector, String inputFileName, String referenceFileName) {
        addOperatorsType2(detector);
        detector.addOperator(new RemoveEmptyBlocks());
        detector.addOperator(new RemoveSimpleMethods());
        detector.addOperator(new AcceptAdditiveOperators());
        detector.addOperator(new AcceptArithmeticOperators());
        detector.addOperator(new AcceptBooleanKeywords());
        detector.addOperator(new AcceptCharacterLiterals());
        detector.addOperator(new AcceptDecrementOperators());
        detector.addOperator(new AcceptEquals());
        detector.addOperator(new AcceptStringLiterals());
        detector.addOperator(new GeneralizeArrayInitializers());
        detector.addOperator(new RemoveImports());
        detector.addOperator(new RemoveModifiers());
        detector.addOperator(new RemoveRedundantParentheses());
        detector.addOperator(new AcceptRelationOperators());
        detector.addOperator(new AcceptArithmeticOperators());

        SimilarityGroup[] similarityGroups = processResults(detector);
        System.out.println("================================\nTYPE 3 RESULTS:\n");
        printSimilarityGroups(similarityGroups, inputFileName, referenceFileName);
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

        detector.addOperator(new AcceptNumberTypeNames());
        detector.addOperator(new AcceptNumberLiterals());
        detector.addOperator(new RemovePackageInformation());
        detector.addOperator(new CompleteToBlock());
        detector.addOperator(new CollapsePostfixOperators());
        detector.addOperator(new NumberLiteralToDouble());
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

    public static void printSimilarityGroups(SimilarityGroup[] similarityGroups, String inputFileName, String referenceFileName) {
        if (similarityGroups != null && similarityGroups.length > 0) {
            for (int i = 0; i < similarityGroups.length; ++i) {
                ASourceUnit[] nodes = similarityGroups[i].getNodes();


                for (int j = 0; j < nodes.length; ++j) {
                    SourceUnitPosition minPos = getFirstNodePosition((ANode) nodes[j]);
                    SourceUnitPosition maxPos = getLastNodePosition((ANode) nodes[j]);

                    ANode fileNode;
                    for (fileNode = (ANode) nodes[j]; fileNode.getType() != NodeTypes.FILE.getType(); fileNode = fileNode.getParent()) {
                    }

                    String fileName = fileNode.getText();
                    int startLine = minPos.getLine();
                    int endLine = maxPos.getLine();
                    if(fileName.equals(inputFileName)){
                        System.out.println("Input File: " + fileName);
                    } else {
                        System.out.println("Reference File: " + fileName);
                    }

                    System.out.println("Start:\t" + startLine);
                    System.out.println("End:\t" + endLine);

                }

            }
        } else {
            System.out.println("No similar nodes found.");
        }

        System.out.println("\n================================");

    }

}