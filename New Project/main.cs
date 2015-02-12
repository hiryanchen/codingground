using System.IO;
using System;

class Program {
	public class Node {
		public int data;
		public Node next;
	}

	static Node Merge(Node head1, Node head2) {
		Node head = null;
		Node current = null;
		Node shifter = null;
		while ((head1 != null) && (head2 != null)) {
			if (head1.data <= head2.data) {
				shifter = head1;
				head1 = head1.next;
			} else {
				shifter = head2;
				head2 = head2.next;
			}
			if (null == head) {
				head = shifter;
			} else {
				current.next = shifter;
			}
			current = shifter;
		}
		// Shift the remaining things into the final list
		if (head1 != null) {
			if (head == null) {
				head = head1;
			} else {
				current.next = head1;
			}
		}
		if (head2 != null) {
			if (head == null) {
				head = head2;
			} else {
				current.next = head2;
			}
		}
		return head;
	}

	public static void printList(Node n) {
		while (n != null) {
			Console.WriteLine(n.data);
			n = n.next;
		}
	}

	static void Main() {
		Console.WriteLine("Test some cases");
		Node n1 = new Node();
		n1.data = 1;

		Node n2 = new Node();
		n2.data = 2;
		n2.next = null;

		Node n3 = new Node();
		n3.data = 3;
		n1.next = n3;

		Node n4 = new Node();
		n4.data = 4;
		n4.next = null;
		n3.next = n4;

		Console.WriteLine("Final node list:");
		Node result = Merge(n1, n2);
		printList(result);
	}
}