package com.joa.openapi.transaction.dto.req;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionRequestDto {

    private String password;
    private Long amount;
    private String depositorName;   //입금자명
    private String fromAccount;            //입금계좌
    private String toAccount;              //출금계좌
    private UUID dummyId = null;
}