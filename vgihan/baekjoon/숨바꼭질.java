import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;

public class 숨바꼭질 {
	private static Queue<Integer> q = new LinkedList<>();
	private static int dist[] = new int[100001];
	private static boolean check[] = new boolean[100001];
	private static int result;
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String input[] = br.readLine().split(" ");
		int n = Integer.parseInt(input[0]);
		int k = Integer.parseInt(input[1]);
		bfs(n, k);
		bw.write(String.valueOf(result));
		
		bw.flush();
		bw.close();
	}
	public static void bfs(int n, int k) {
		q.add(n);
		check[n] = true;
		int node;
		while(true) {
			if(q.peek() == null) break;
			node = q.poll();
			if(node == k) {
				result = dist[node];
				break;
			}
			if(node*2 <= 100000) {
				if(check[node*2] == false) {
					q.add(node*2);
					dist[node*2] = dist[node]+1;
					check[node*2] = true;
				}
			}
			if(node+1 <= 100000) {
				if(check[node+1] == false) {
					q.add(node+1);
					dist[node+1] = dist[node]+1;
					check[node+1] = true;
				}
			}
			if(node-1 >= 0) {
				if(check[node-1] == false) {
					q.add(node-1);
					dist[node-1] = dist[node]+1;
					check[node-1] = true;
				}
			}
		}
	}
}