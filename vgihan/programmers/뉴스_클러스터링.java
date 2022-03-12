import java.util.*;

class Solution {
    public int solution(String str1, String str2) {
        int answer = 0;
        if(str1 == "" && str2 == "") return 65536;
        
        str1 = str1.toUpperCase();
        str2 = str2.toUpperCase();
        
        System.out.println(str1 + " " + str2);
        
        Map<String, Integer> map = new HashMap<>();
        
        int crossCount = 0;
        int numOfAset = 0;
        int numOfBset = 0;
        
        for(int i=0; i<str1.length()-1; i++) {
            if(!isAlphabet(str1.charAt(i), str1.charAt(i+1))) continue;
            numOfAset++;
            map.put(str1.substring(i, i+2), map.getOrDefault(str1.substring(i, i+2), 0) + 1);
        }
        
        for(int i=0; i<str2.length()-1; i++) {
            if(!isAlphabet(str2.charAt(i), str2.charAt(i+1))) continue;
            numOfBset++;
            if(map.get(str2.substring(i, i+2)) == null) continue;
            if(map.get(str2.substring(i, i+2)) == 1) {
                crossCount++;
                map.remove(str2.substring(i, i+2));
                continue;
            }
            map.put(str2.substring(i, i+2), map.get(str2.substring(i, i+2)) - 1);
            crossCount++;
        }

        int sumOfSet = numOfAset + numOfBset - crossCount;
        if(sumOfSet == 0) return 65536;
        double j = (double)crossCount / (double)sumOfSet;
        j = j*65536.0;
        answer = (int)j;
        
        return answer;
    }
    public boolean isAlphabet(char c1, char c2) {
        if(!((c1 >= 'A' && c1 <= 'Z') || (c1 >= 'a' && c1 <= 'z'))) return false;
        if(!((c2 >= 'A' && c2 <= 'Z') || (c2 >= 'a' && c2 <= 'z'))) return false;
        return true;
    }
}