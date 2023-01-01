package com.example.pagination.persistence;

import com.example.pagination.entity.Board;
import com.example.pagination.entity.QBoard;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.Predicate;
import org.springframework.data.querydsl.QuerydslPredicateExecutor;
import org.springframework.data.repository.CrudRepository;


public interface BoardPersistence extends CrudRepository<Board, Long>, QuerydslPredicateExecutor<Board> {
    public default Predicate makePredicate(String type, String keyword){
        BooleanBuilder builder = new BooleanBuilder();
        QBoard board = QBoard.board;
        //bno>0
        builder.and(board.no.gt(0));
        if(type==null) {
            return builder;
        }
        //검색 로직
        switch(type) {
            case "title":
                builder.and(board.title.like("%"+keyword+"%"));
                break;
            case "content":
                builder.and(board.content.like("%"+keyword+"%"));
                break;
//            case "w":
//                builder.and(board.writer.like("%"+keyword+"%"));
//                break;
        }


        return builder;
    }
}
