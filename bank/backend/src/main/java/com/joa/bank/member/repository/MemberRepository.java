package com.joa.bank.member.repository;

import com.joa.bank.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {

    @Query(value = "SELECT * FROM member WHERE bank_id = :bankId and email = :email", nativeQuery = true)
    Member findByBankIdAndEmail(UUID bankId, String email);

}
