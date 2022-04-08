import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.util.*;

public class KCM_Travel {
    public static BufferedReader br = new BufferedReader(new InputStreamReader(System.in));

    public static void main(String args[]) throws IOException {
        int t = Integer.parseInt(br.readLine());
        String[] results = new String[2];
        for(int i=0; i<t; i++) {
            int[] nmk = getIntArray(br.readLine());
            List<Node>[] field = new ArrayList[nmk[0]];
            for(int j=0; j<nmk[0]; j++) {
                field[j] = new ArrayList<>();
            }
            for(int j=0; j<nmk[2]; j++) {
                int[] input = getIntArray(br.readLine());
                field[input[0]-1].add(new Node(input[0]-1, input[1]-1, input[2], input[3]));
            }
            if(nmk[1] <= 0) {
                results[i] = "Poor KCM";
                continue;
            }
            int result = search(nmk, field);
            results[i] = result >= Integer.MAX_VALUE ? "Poor KCM" : String.valueOf(result);
        }
        System.out.print(String.join("\n", results));
    }
    public static int search(int[] nmk, List<Node>[] field) {
        Queue<Node> queue = new PriorityQueue();
        Node[][] dist = new Node[nmk[0]][nmk[1]];
        Node init = new Node(0,0,0,0);
        queue.add(init);
        dist[0][0] = init;
        while(!queue.isEmpty()) {
            Node curNode = queue.poll();
            int curId = curNode.end;
            int curTime = curNode.time;
            int curCost = curNode.cost;

            field[curId].forEach((v) -> {
                Node nextNode = v;
                int nextId = nextNode.end;
                int nextTime = nextNode.time + curTime;
                int nextCost = nextNode.cost + curCost;
                if(nextCost >= dist[nextId].length) return;
                if(dist[nextId][nextCost] != null &&
                        dist[nextId][nextCost].equals(nextNode)) return;
                Node newNode = new Node(curId, nextId, nextTime, nextCost);
                dist[nextId][nextCost] = newNode;
                queue.add(newNode);
            });
        }

        int min = Integer.MAX_VALUE;

        for(int i=0; i<dist[nmk[0]-1].length; i++) {
            if(dist[nmk[0]-1][i] == null) continue;
            if(min <= dist[nmk[0]-1][i].time) continue;
            min = dist[nmk[0]-1][i].time;
        }

        return min;
    }
    public static int[] getIntArray(String s) {
        return Arrays.stream(s.split(" "))
                .map((v) -> Integer.parseInt(v))
                .mapToInt(v -> (Integer)v).toArray();
    }
}

class Node implements Comparable<Node> {
    int start;
    int end;
    int time;
    int cost;
    public Node(int start, int end, int time, int cost) {
        this.start = start;
        this.end = end;
        this.time = time;
        this.cost = cost;
    }
    public int compareTo(Node target) {
        return this.time - target.time;
    }
    public boolean equals (Node target) {
        return target.end == this.end &&
                target.time == this.time &&
                target.cost == this.cost;
    }
}
