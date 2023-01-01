package com.example.pagination;

import com.example.pagination.entity.Board;
import com.example.pagination.persistence.BoardPersistence;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.List;
import java.util.regex.Matcher;
import java.util.regex.Pattern;
import java.util.stream.Collectors;

@SpringBootTest
class PaginationApplicationTests {

    @Resource
    private BoardPersistence boardPersistence;

    @Test
    public void test(){
        List<Integer> list = Arrays.stream(people).boxed().collect(Collectors.toList());
        String test="01234123123";
        System.out.println("asfd");
    }

    @Test
    void contextLoads() {
        for (int i = 0; i < 100; i++) {
            Board board = new Board();
            board.setTitle("asdfds" + i);
            boardPersistence.save(board);
        }

    }

    @Test
    public void getAll() {
        int a = 7;
        int b = 20;
        int answer = 0;
        int _gcd = gcd(a,b);
        while(_gcd != 1){
            a=a/_gcd;
            b=b/_gcd;
            _gcd = gcd(a,b);
        }
        System.out.println(a);
        System.out.println(b);


    }
    public int gcd(int num1, int num2){
        while(num1!=0){
            int temp = num1 % num2;
            num1 = num2;
            num2 = temp;
        }
        return num1;
    }
    //Iterable<Board> board = boardPersistence.findAll();


}
