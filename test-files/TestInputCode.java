public class TestInputCode{
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