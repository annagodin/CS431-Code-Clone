package test;

public class TestType3Code1 {
    public static void main(String[] args) {
        double z = 6.0;
        int a = 9;
        while (a < 19) {
            a = a + 5;
            //hey there
            //how ya doin
            z = z - 0.5;
            if(a==5){
                break;
            }
        }
    }

    public static void testing(){
        System.out.println("Hello, World");

        double z = 1.0;
        double x = 42;

        while(x>17){
            x=x-1;
            z+=0.5;
        }
    }

    public static void thing(int c){
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