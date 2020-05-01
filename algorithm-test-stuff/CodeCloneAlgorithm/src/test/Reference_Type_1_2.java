package test;

public class Reference_Type_1_2 {
    public static void main(String[] args) {
        System.out.println("Hello World");
        int b = 0;
        b = b + 3 * 3;
        b = 600 - 12 + (9);
        while (b < 1000) {
            b += 200;
            if(b==700){
                break;
            }
        }

        double z = 6.0;
        int x = 92;
        while (x > 19) {
            x = x - 5;
            //hey there
            z += 0.5;
        }
    }

    public static int factorial(int n) {
        if (n == 0) {
            return 1;
        } else {
            return n * factorial(n - 1);
        }
    }

}
