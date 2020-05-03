package test;

public class TestFileTwo {

  public static void main(String[] args) {
    System.out.println("Hello, World");

    double z = 1.0;
    double x = 42;

    while (x > 17) {
      x = x - 1;
      z += 0.5;
    }
  }

  public int factorial(int n) {
    if (n == 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }

  public int gcdTwo(int c, int d) {
    while (d != 0) {
      if (c > d) {
        c = c - d;
      } else {
        d = d - c;
      }
    }
    return c;
  }

  public double mul(double a, long b) {
    double n = 0.0;
    for (long i = 0l; i < b; i++)
      n += a;

    return n;
  }

  public static void thing(int c) {
    if (c == 0) {
      System.out.println("C is 0!");
    } else if (c == 5) {
      for (int i = 0; i < 5; i++) {
        System.out.println("printing " + i);
      }
    } else {
      while (c < 1000) {
        c = c * 2;
        if (c == 20) {
          System.out.println("jackpot");
        }
      }
    }

  }

}