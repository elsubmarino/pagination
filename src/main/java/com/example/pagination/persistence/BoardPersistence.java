package com.example.pagination.persistence;

import com.example.pagination.entity.Board;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BoardPersistence extends JpaRepository<Board, Long> {

    Page<Board> findByNoGreaterThanOrderByNoDesc(Long no, Pageable paging);
}
