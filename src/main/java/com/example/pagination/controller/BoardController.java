package com.example.pagination.controller;

import com.example.pagination.entity.Board;
import com.example.pagination.persistence.BoardPersistence;
import com.example.pagination.vo.PageMaker;
import com.example.pagination.vo.PageVO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;

@RestController
public class BoardController {
    @Resource
    private BoardPersistence boardPersistence;

    @GetMapping("/api/board/list")
    public ResponseEntity<Map<String, Object>> get(@ModelAttribute PageVO pageVO){
        Pageable page = pageVO.makePageable(0, "no");
        Page<Board> boardIterable = boardPersistence.findAll(boardPersistence.makePredicate(pageVO.getType(),pageVO.getKeyword()),page);
        PageMaker<Board> boardResult = new PageMaker(boardIterable);
        Map<String, Object> map = new HashMap<>();
        map.put("content",boardResult.getResult().getContent());
        map.put("prevPage",boardResult.getPrevPage());
        map.put("nextPage",boardResult.getNextPage());
        map.put("pageList",boardResult.getPageList());

        return ResponseEntity.ok(map);
    }
}
