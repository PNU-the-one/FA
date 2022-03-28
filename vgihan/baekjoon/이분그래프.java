import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
public class Main {
	private static boolean yes;
	private static ArrayList<ArrayList<Integer>> edge = new ArrayList<>();
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String input[];
		int v, e;
		int k = Integer.parseInt(br.readLine());
		for(int t=0; t<20001; t++) {
			edge.add(new ArrayList<Integer>());
		}
		for(int t=0; t<k; t++) {
			yes = true;
			input = br.readLine().split(" ");
			v = Integer.parseInt(input[0]);
			e = Integer.parseInt(input[1]);
			int color[] = new int[v+1];
			for(int i=0; i<e; i++) {
				input = br.readLine().split(" ");
				edge.get(Integer.parseInt(input[0])).add(Integer.parseInt(input[1]));
				edge.get(Integer.parseInt(input[1])).add(Integer.parseInt(input[0]));
			}
			for(int i=1; i<=v; i++) {
				if(color[i] == 0)
					dfs(i, color, 1);
			}
			if(yes) bw.write("YES\n");
			else bw.write("NO\n");
			for(int i=0; i<=v; i++) {
				edge.get(i).clear();
			}
		}
		
		bw.flush();
		bw.close();
	}
	public static void dfs(int me, int color[], int c) {
		color[me] = c;
		for(int value : edge.get(me)) {
			if(color[value] == c) {
				yes = false;
				break;
			}
			if(color[value] == 3-c) continue;
			dfs(value, color, 3-c);
		}
	}
}