package test;

public class TestType2Code1 {
    public static void main(String[] args) {
		double y = 1.0;
		int x = 42;
		while (x > 17) {
			x = x - 1;
			y += 0.5;
		}

		
	}
	
	public static void bing(int h){
        if(h==0){
            System.out.println("H is 0!");
        } else if (h==5){
            for(int i=0; i<5; i++){
                System.out.println("printing " + i);
            }
        } else {
            while(h<1000){
                h=h*2;
                if(h==20){
                    System.out.println("jackpot");
                }
            }
        }

    }
}