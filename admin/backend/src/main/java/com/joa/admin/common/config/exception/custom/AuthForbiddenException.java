package com.joa.admin.admin.config.exception.custom;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class AuthForbiddenException extends RuntimeException {
    public AuthForbiddenException(String message) {
        super(message);
    }
}
