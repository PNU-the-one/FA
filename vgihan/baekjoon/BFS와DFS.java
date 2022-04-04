import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.ArrayList;
import java.util.LinkedList;
import java.util.Queue;
public class BFS와DFS {
	private static ArrayList<ArrayList<Integer>> list = new ArrayList<>();
	private static Queue<Integer> q;
	private static boolean check[];
	private static BufferedWriter bw = 
			new BufferedWriter(new OutputStreamWriter(System.out));
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		String input[];
		
		input = br.readLine().split(" ");
		int n = Integer.parseInt(input[0]);
		int m = Integer.parseInt(input[1]);
		int v = Integer.parseInt(input[2]);
		check = new boolean[n+1];
		q = new LinkedList<Integer>();
		for(int i=0; i<=n; i++) {
			list.add(new ArrayList<Integer>());
		}
		for(int i=0; i<m; i++) {
			input = br.readLine().split(" ");
			list.get(Integer.parseInt(input[0])).add(Integer.parseInt(input[1]));
			list.get(Integer.parseInt(input[1])).add(Integer.parseInt(input[0]));
		}
		for(int i=1; i<=n; i++) list.get(i).sort(null);
		dfs(v);
		bw.write("\n");
		for(int i=1; i<=n; i++) check[i] = false;
		bfs(v);
		
		bw.flush();
		bw.close();
	}
	public static void dfs(int me) throws IOException {
		bw.write(String.valueOf(me) + " ");
		check[me] = true;
		for(int value : list.get(me)) {
			if(check[value]) continue;
			dfs(value);
		}
	}
	public static void bfs(int start) throws IOException {
		int node;
		check[start] = true;
		q.offer(start);
		while(true) {
			if(q.peek() == null) break;
			node = q.poll();
			bw.write(String.valueOf(node) + " ");
			for(int value : list.get(node)) {
				if(check[value]) continue; 
				q.offer(value);
				check[value] = true;
			}
		}
	}
}