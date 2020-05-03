package test;

public class TestType3Code2 {
    public static void main(String[] args) {
        double z = 6.0;
        int b = 92;
        while (b > 19) {
            b = b - 5;
            //hey there
            z = z + 0.5;
            if(b!=5){
                break;
            }
        }

        
    }

    public static void foo(int c){
        if(c==0){
            System.out.println("C is 0!");
        } else if (c==5){
            for(int i=0; i<5; i++){
                System.out.println("printing " + i);
            }
        } else {
            while(c<1000){
                c=c*2;
                if(c==20){
                    System.out.println("jackpot");
                }
            }
        }

    }

}