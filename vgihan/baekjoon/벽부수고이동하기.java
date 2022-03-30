import java.io.BufferedReader;
import java.io.BufferedWriter;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.util.LinkedList;
import java.util.Queue;
public class 벽부수고이동하기 {
	private static Queue<Integer> q = new LinkedList<>();
	private static int maze[][];
	private static int dist[][];
	private static boolean check[][][];
	private static int result = -1;
	private static int dx[] = new int[] {1, 0, -1, 0};
	private static int dy[] = new int[] {0, -1, 0, 1};
	public static void main(String args[]) throws IOException {
		BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
		BufferedWriter bw = new BufferedWriter(new OutputStreamWriter(System.out));
		
		String input[];
		input = br.readLine().split(" ");
		int n = Integer.parseInt(input[0]);
		int m = Integer.parseInt(input[1]);
		maze = new int[n][m];
		check = new boolean[n][m][2];
		dist = new int[n][m];
		for(int i=0; i<n; i++) {
			input = br.readLine().split("");
			for(int j=0; j<m; j++) {
				maze[i][j] = Integer.parseInt(input[j]);
			}
		}
		bfs(n, m);
		bw.write(String.valueOf(result));
		
		bw.flush();
		bw.close();
	}
	public static void bfs(int n, int m) {
		q.add(0);
		q.add(0);
		q.add(1);
		check[0][0][1] = true;
		dist[0][0] = 1;
		int x, y;
		int nx, ny;
		int power;
		while(q.peek() != null) {
			x = q.poll();
			y = q.poll();
			power = q.poll();
			if(x == n-1 && y == m-1) {
				result = dist[x][y];
				break;
			}
			for(int i=0; i<4; i++) {
				nx = x+dx[i];
				ny = y+dy[i];
				if(nx >= 0 && nx < n && ny >= 0 && ny < m && check[nx][ny][power] == false) {
					if(maze[nx][ny] == 1) {
						if(power == 1) {
							q.add(nx);
							q.add(ny);
							q.add(0);
							dist[nx][ny] = dist[x][y]+1;
							check[nx][ny][0] = true;
						}
					}
					else {
						q.add(nx);
						q.add(ny);
						q.add(power);
						check[nx][ny][power] = true;
						dist[nx][ny] = dist[x][y]+1;
					}
				}
			}
		}
	}
}